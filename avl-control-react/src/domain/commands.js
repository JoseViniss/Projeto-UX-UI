import {assert,uid,cents,addMonths,today} from '../utils/format.js';
import {activeTrip} from './calculations.js';
import {Domain} from './operations.js';
// Um ponto de entrada para mutações; independente de React e do armazenamento.
export function applyCommand(data,kind,values,context={}){
 const role=context.role||'locador',id=context.id,n=key=>Number(values[key]);
 const getVehicle=key=>data.vehicles.find(v=>v.id===key);
 switch(kind){
 case 'vehicle':{const old=getVehicle(id);assert(values.model&&values.plate,'Preencha modelo e identificação.');assert(!data.vehicles.some(v=>v.id!==id&&v.plate.replace(/\W/g,'').toUpperCase()===values.plate.replace(/\W/g,'').toUpperCase()),'Já existe um veículo com essa identificação.');assert(n('lastOil')<=n('meter'),'A última troca não pode superar a leitura atual.');assert(!old||n('meter')>=old.meter,'A leitura atual não pode diminuir.');assert(!old||old.unit===values.unit||!data.trips.some(t=>t.vehicleId===id),'Não altere a unidade de um veículo com rotinas registradas.');assert(!(values.status==='Disponível'&&data.maintenance.some(m=>m.vehicleId===id&&['Pendente','Em andamento'].includes(m.status))),'Conclua os serviços pendentes na oficina antes de liberar o veículo.');assert(n('oilInterval')>0&&n('tank')>0&&n('meter')>=0,'Revise os valores de leitura, intervalo e tanque.');const v={id:id||uid(),model:values.model,plate:values.plate.toUpperCase(),category:values.category,year:n('year'),meter:n('meter'),unit:values.unit,lastOil:n('lastOil'),oilInterval:n('oilInterval'),monthly:cents(values.monthly),status:values.status,clientId:role==='locador'?values.clientId||'':old?.clientId||'',photos:[...(context.photos||[])],tank:n('tank')};const index=data.vehicles.findIndex(x=>x.id===v.id);if(index<0)data.vehicles.push(v);else data.vehicles[index]=v;break;}
 case 'allocate':Domain.allocate(data,id,{workId:values.workId,driverId:values.driverId,start:values.start,startMeter:n('startMeter'),startFuel:n('startFuel')});break;
 case 'return':Domain.returnTrip(data,id,{end:values.end,endMeter:n('endMeter')});break;
 case 'checklist':Domain.checklist(data,id,{refueled:n('refueled'),endFuel:n('endFuel'),confirmed:values.confirmed==='on',tires:values.tires,brakes:values.brakes,lights:values.lights,body:values.body,fluids:values.fluids,notes:values.notes});break;
 case 'category':assert(values.name,'Informe o nome da categoria.');assert(!data.categories.some(c=>c.toLowerCase()===values.name.toLowerCase()),'Esta categoria já existe.');data.categories.push(values.name);break;
 case 'expense':{const v=getVehicle(values.vehicleId);assert(v,'Selecione um veículo.');assert(cents(values.amount)>0,'Informe um valor maior que zero.');assert(values.category!=='Combustível'||n('liters')>0,'Informe a quantidade abastecida.');data.expenses.unshift({id:uid(),role,vehicleId:v.id,clientId:v.clientId,category:values.category,amount:cents(values.amount),date:values.date,liters:values.category==='Combustível'?n('liters'):0,description:values.description,workId:values.workId||activeTrip(v.id,data)?.workId||''});break;}
 case 'client':assert(values.name,'Informe o cliente.');data.clients.push({id:uid(),...values});break;
 case 'invoice':{const total=cents(values.amount),count=n('count');assert(Number.isInteger(count)&&count>=1&&count<=36,'Use de 1 a 36 parcelas.');assert(total>=count,'Cada parcela precisa ter ao menos R$ 0,01.');assert(values.due>=values.issued,'O vencimento não pode anteceder a emissão.');assert(data.clients.some(c=>c.id===values.clientId)&&getVehicle(values.vehicleId),'Selecione cliente e veículo.');const group=uid();for(let i=0;i<count;i++)data.invoices.push({id:uid(),group,role,vehicleId:values.vehicleId,clientId:values.clientId,workId:values.workId||'',issued:values.issued,due:addMonths(values.due,i),description:values.description,amount:Math.floor(total/count)+(i<total%count?1:0),installment:`${i+1}/${count}`,payments:[]});break;}
 case 'payment':Domain.payment(data,id,{date:values.date,amount:cents(values.amount)});break;
 case 'work':data.works.push({id:uid(),...values});break;
 case 'driver':data.drivers.push({id:uid(),...values});break;
 case 'maintenance':data.maintenance.unshift({id:uid(),vehicleId:values.vehicleId,type:values.type,date:values.date,cost:cents(values.cost),status:values.status,description:values.description,oil:false});if(['Pendente','Em andamento'].includes(values.status))getVehicle(values.vehicleId).status=values.status==='Pendente'?'Necessita manutenção':'Manutenção';break;
 case 'finish-maintenance':Domain.finishMaintenance(data,id,{date:values.date,meter:n('meter'),cost:cents(values.cost),oil:values.oil==='on'});break;
 case 'document':assert(context.attachment,'Selecione o arquivo e aguarde a leitura.');data.documents.unshift({id:uid(),vehicleId:values.vehicleId,type:values.type,notes:values.notes,date:today(),status:'Registrado',...context.attachment});break;
 default:throw new Error('Operação desconhecida.');
 }
}
