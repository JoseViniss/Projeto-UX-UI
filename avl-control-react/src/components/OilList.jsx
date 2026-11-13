import {useApp} from '../context/AppContext.jsx';
import {oil} from '../domain/calculations.js';
import {num} from '../utils/format.js';
import {Badge,Empty} from './ui.jsx';
export function OilList(){const {selectors:s}=useApp();const rows=s.oilRows();return rows.length?rows.map(v=>{const o=oil(v);return <div className="oil-row" key={v.id}><div><strong>{v.plate} · {v.model}</strong><p>Próxima troca: {num(o.next)} {v.unit}</p></div><Badge type={o.left<=0?'red':o.left<=v.oilInterval*.15?'amber':'green'}>{o.left<0?`${num(-o.left)} ${v.unit} em atraso`:o.left===0?'Troca agora':`${num(o.left)} ${v.unit} restantes`}</Badge></div>;}):<Empty/>;}
