import {createContext,useContext,useState,useMemo,useRef,useCallback} from 'react';
import {repository} from '../services/repository.js';
import {createSelectors} from '../domain/selectors.js';
import {monthDate,uid} from '../utils/format.js';
const AppContext=createContext(null);
export const defaultFilters=()=>({from:monthDate(-5,1),to:monthDate(0,31),vehicle:'all',category:'all',client:'all',work:'all',invoiceStatus:'all'});
export function AppProvider({children}){
 const [initial]=useState(()=>repository.load());
 const [db,setDb]=useState(initial.data);const dbRef=useRef(db);
 const [ui,setUi]=useState(()=>({role:'locador',tab:'dashboard',vehicleId:null,status:'Todos',search:'',report:'vehicle',financeTab:'receipts',...defaultFilters()}));
 const [loggedIn,setLoggedIn]=useState(false),[modal,setModal]=useState(null),[toasts,setToasts]=useState([]);
 const selectors=useMemo(()=>createSelectors(db,ui),[db,ui]);
 const notify=useCallback(message=>{const id=uid();setToasts(v=>[...v,{id,message}]);setTimeout(()=>setToasts(v=>v.filter(t=>t.id!==id)),5000);},[]);
 const updateUi=useCallback(patch=>setUi(prev=>({...prev,...patch})),[]);
 const commit=useCallback((change,message)=>{const next=structuredClone(dbRef.current);change(next);repository.save(next);dbRef.current=next;setDb(next);if(message)notify(message);return next;},[notify]);
 const navigate=useCallback((tab,patch={})=>setUi(prev=>({...prev,tab,vehicle:'all',category:'all',client:'all',work:'all',invoiceStatus:'all',...patch})),[]);
 const open=useCallback((type,id=null)=>setModal({type,id,key:uid()}),[]);
 const close=useCallback(()=>setModal(null),[]);
 const login=()=>{setLoggedIn(true);updateUi({financeTab:ui.role==='locador'?'receipts':'expenses'});if(initial.warning)notify(initial.warning);};
 const switchRole=role=>updateUi({role,...defaultFilters(),status:'Todos',financeTab:role==='locador'?'receipts':'expenses'});
 return <AppContext.Provider value={{db,ui,selectors,updateUi,commit,navigate,modal,open,close,notify,toasts,loggedIn,login,logout:()=>setLoggedIn(false),switchRole}}>{children}</AppContext.Provider>;
}
export function useApp(){const value=useContext(AppContext);if(!value)throw new Error('AppProvider ausente');return value;}
