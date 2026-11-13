export const money = n => (Number(n || 0) / 100).toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
export const num = n => Number(n || 0).toLocaleString('pt-BR', {maximumFractionDigits:1});
export const today = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export const monthDate = (offset,day=10) => {const d=new Date();d.setDate(1);d.setMonth(d.getMonth()+offset);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(Math.min(day,new Date(d.getFullYear(),d.getMonth()+1,0).getDate())).padStart(2,'0')}`;};
export const addMonths = (s,n) => {const [y,m,d]=s.split('-').map(Number);const t=new Date(y,m-1+n,1);return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(Math.min(d,new Date(t.getFullYear(),t.getMonth()+1,0).getDate())).padStart(2,'0')}`;};
export const dateLabel = s => s ? s.split('-').reverse().join('/') : '—';
export const uid = () => crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const sum = (arr,key) => arr.reduce((a,x)=>a+Number(x[key] || 0),0);
export const cents = value => Math.round(Number(value)*100);
export function assert(ok,msg){if(!ok)throw new Error(msg);}
