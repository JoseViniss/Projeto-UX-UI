import {sum,today} from '../utils/format.js';
export const activeTrip=(id,data)=>data.trips.find(t=>t.vehicleId===id&&!t.end);
export const pendingCheck=(id,data)=>data.checklists.find(c=>c.vehicleId===id&&!c.done);
export const paid=i=>sum(i.payments,'amount');
export const balance=i=>Math.max(0,i.amount-paid(i));
export const invoiceStatus=i=>balance(i)===0?'Recebido':i.due<today()?'Vencido':paid(i)>0?'Parcial':'Em aberto';
export const oil=v=>({left:v.lastOil+v.oilInterval-v.meter,next:v.lastOil+v.oilInterval});
