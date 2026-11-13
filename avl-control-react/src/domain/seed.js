import {uid,monthDate} from '../utils/format.js';
export function seedData(){
 const vehicles=[
 {id:'v1',plate:'ABC-8899',model:'Volvo FMX 500 Basculante',category:'Caminhão',year:2022,meter:68400,unit:'km',lastOil:60000,oilInterval:10000,monthly:1250000,status:'Disponível',clientId:'c1',photos:[],tank:300},
 {id:'v2',plate:'KRH-4120',model:'Caterpillar 426F2',category:'Maquinário',year:2021,meter:3200,unit:'h',lastOil:2800,oilInterval:500,monthly:980000,status:'Disponível',clientId:'c1',photos:[],tank:160},
 {id:'v3',plate:'GXX-9011',model:'Toyota Hilux CD 4x4',category:'Pickup',year:2023,meter:42100,unit:'km',lastOil:40000,oilInterval:10000,monthly:540000,status:'Disponível',clientId:'',photos:[],tank:80},
 {id:'v4',plate:'RST-5A12',model:'Mercedes-Benz Atego 2730',category:'Caminhão',year:2020,meter:112000,unit:'km',lastOil:101000,oilInterval:10000,monthly:1100000,status:'Manutenção',clientId:'c2',photos:[],tank:300}
 ];
 const invoices=[];
 for(let m=-5;m<=0;m++)for(let i=0;i<3;i++){
  const amount=[1250000,980000,1100000][i]+(m+5)*12000;
  invoices.push({id:`i${m}-${i}`,vehicleId:['v1','v2','v4'][i],clientId:i===2?'c2':'c1',role:'locador',issued:monthDate(m,1),due:monthDate(m,i===0?5:20),amount,description:`Locação mensal · ${monthDate(m,1).slice(0,7)}`,payments:m<0?[{id:uid(),date:monthDate(m,20),amount}]:[],installment:'1/1'});
 }
 const expenses=[];
 for(let m=-5;m<=0;m++)for(const role of ['locador','locatario'])for(let i=0;i<4;i++)expenses.push({id:uid(),role,vehicleId:`v${i+1}`,clientId:i===3?'c2':i<2?'c1':'',category:['Combustível','Manutenção','Pedágio','Peças / Insumos'][i],amount:[148000,92000,18500,77000][i]+(m+5)*1200,date:monthDate(m,8),liters:i===0?240:0,description:'Lançamento demonstrativo',workId:i<2?'w1':'w2'});
 return {version:3,vehicles,clients:[{id:'c1',name:'Construtora Horizonte',document:'',contact:'financeiro@horizonte.exemplo'},{id:'c2',name:'Infraestrutura Sul',document:'',contact:'contato@infrasul.exemplo'}],works:[{id:'w1',name:'Edifício Horizon Lux',location:'São Paulo · SP',manager:'Eng. Ricardo Alves',status:'Ativa'},{id:'w2',name:'Rodovia BR-101 · Trecho Sul',location:'Santos · SP',manager:'Eng. Mariana Costa',status:'Ativa'},{id:'w3',name:'Parque Eólico Serra Verde',location:'Caetité · BA',manager:'Carlos Mendes',status:'Em início'}],drivers:[{id:'d1',name:'João Silva',license:'E',expires:'2027-11-15',workId:'w1',phone:'(11) 98765-4321'},{id:'d2',name:'Marcos Oliveira',license:'D',expires:'2027-10-05',workId:'w2',phone:'(13) 99123-8877'}],trips:[{id:'t1',vehicleId:'v1',workId:'w1',driverId:'d1',start:monthDate(0,1),startMeter:68000,startFuel:180,end:null},{id:'t2',vehicleId:'v2',workId:'w2',driverId:'d2',start:monthDate(0,1),startMeter:3150,startFuel:90,end:null}],checklists:[],expenses,invoices,categories:['Combustível','Manutenção','Pedágio','Peças / Insumos','Seguro / Taxas'],maintenance:[{id:'m1',vehicleId:'v4',type:'Corretiva',description:'Substituição da embreagem e alinhamento.',date:monthDate(0,10),status:'Em andamento',cost:320000,oil:false}],documents:[{id:'doc1',vehicleId:'v1',type:'Entrega na obra',date:monthDate(0,1),notes:'Recebido sem ressalvas.',name:'',data:'',status:'Registrado'}],regulations:[{id:'reg1',vehicleId:'v4',title:'Licenciamento',due:monthDate(-1,10)},{id:'reg2',vehicleId:'v1',title:'Seguro da frota',due:monthDate(1,20)}]};
}
