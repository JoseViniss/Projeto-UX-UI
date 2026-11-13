import {seedData} from '../domain/seed.js';
export const STORAGE_KEY='avl-control-react-v4';
export function validateDatabase(data){
 const collections=['vehicles','clients','works','drivers','trips','checklists','expenses','invoices','categories','maintenance','documents','regulations'];
 if(!data||![3,4].includes(data.version)||collections.some(k=>!Array.isArray(data[k])))throw new Error('Arquivo de dados incompatível com o AVL Control.');
 return {...data,version:4};
}
export const repository={
 load(){try{const raw=localStorage.getItem(STORAGE_KEY)||localStorage.getItem('avl-control-v3');return {data:raw?validateDatabase(JSON.parse(raw)):{...seedData(),version:4},warning:''};}catch{return {data:{...seedData(),version:4},warning:'Não foi possível recuperar os dados locais. Uma demonstração foi carregada.'};}},
 save(data){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch{throw new Error('O navegador não conseguiu salvar. Reduza o tamanho dos anexos ou libere espaço. A alteração não foi aplicada.');}},
};
