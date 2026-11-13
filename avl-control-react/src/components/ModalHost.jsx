import {useApp} from '../context/AppContext.jsx';
import {Modal} from './Modal.jsx';
import {DataForm} from './DataForm.jsx';
import {Field,Select,Button,Table,StatusBadge,Empty} from './ui.jsx';
import {VehicleForm} from './forms/VehicleForm.jsx';
import {AllocationForm,ReturnForm,ChecklistForm} from './forms/OperationForms.jsx';
import {ExpenseForm,InvoiceForm,PaymentForm,InvoiceDetail} from './forms/FinanceForms.jsx';
import {MaintenanceForm,FinishMaintenanceForm} from './forms/MaintenanceForms.jsx';
import {DocumentForm} from './forms/DocumentForm.jsx';
import {applyCommand} from '../domain/commands.js';
import {pendingCheck,oil} from '../domain/calculations.js';
import {num} from '../utils/format.js';
const titles={vehicle:'Cadastro de veículo',allocate:'Alocar veículo em obra',return:'Finalizar rotina e registrar retorno',checklist:'Checklist de retorno',expense:'Registrar nova despesa',category:'Nova categoria financeira',invoice:'Faturar e agendar recebimentos',payment:'Registrar recebimento','invoice-detail':'Histórico da parcela',clients:'Clientes',client:'Cadastrar cliente',work:'Cadastrar obra',driver:'Cadastrar motorista',maintenance:'Registrar manutenção','finish-maintenance':'Concluir serviço',document:'Anexar canhoto ou comprovante',notifications:'Alertas da operação',help:'Navegação por teclado'};
export default function ModalHost(){const {modal,close,open,db,ui,commit,selectors:s}=useApp();if(!modal)return null;const {type,id}=modal;function save(values,extra={}){const next=commit(data=>applyCommand(data,type,values,{id,role:ui.role,...extra}),'Registro salvo com sucesso.');if(type==='return')open('checklist',pendingCheck(id,next).id);else close();}let body;
 switch(type){
 case 'vehicle':body=<VehicleForm id={id} onSave={save}/>;break;
 case 'allocate':body=<AllocationForm id={id} onSave={save}/>;break;
 case 'return':body=<ReturnForm id={id} onSave={save}/>;break;
 case 'checklist':body=<ChecklistForm id={id} onSave={save}/>;break;
 case 'expense':body=<ExpenseForm onSave={save}/>;break;
 case 'invoice':body=<InvoiceForm onSave={save}/>;break;
 case 'payment':body=<PaymentForm id={id} onSave={save}/>;break;
 case 'invoice-detail':body=<InvoiceDetail id={id}/>;break;
 case 'category':body=<DataForm onSave={save}><Field name="name" label="Nome da categoria" maxLength={60} placeholder="Ex.: lavagem, estacionamento"/></DataForm>;break;
 case 'client':body=<DataForm onSave={save}><Field name="name" label="Nome / razão social" maxLength={120}/><Field name="document" label="Documento ou identificação" maxLength={30}/><Field name="contact" label="E-mail ou telefone de contato" maxLength={100}/></DataForm>;break;
 case 'clients':body=<><div className="actions section-bottom"><Button variant="primary" onClick={()=>open('client')}>+ Cadastrar cliente</Button></div><Table headers={['Cliente','Documento','Contato']} rows={db.clients.map(c=>[c.name,c.document||'—',c.contact])}/></>;break;
 case 'work':body=<DataForm onSave={save}><Field name="name" label="Nome da obra" maxLength={100}/><Field name="location" label="Cidade / localização" maxLength={150}/><Field name="manager" label="Gestor responsável" maxLength={100}/><Select name="status" label="Situação" options={['Ativa','Em início','Concluída'].map(x=>[x,x])}/></DataForm>;break;
 case 'driver':body=<DataForm onSave={save}><Field name="name" label="Nome completo" maxLength={100}/><div className="form-grid"><Select name="license" label="Categoria da CNH" options={['B','C','D','E'].map(x=>[x,x])}/><Field name="expires" label="Validade da CNH" type="date"/><Select name="workId" label="Obra de referência" options={db.works.map(w=>[w.id,w.name])}/><Field name="phone" label="Telefone" maxLength={30}/></div></DataForm>;break;
 case 'maintenance':body=<MaintenanceForm onSave={save}/>;break;
 case 'finish-maintenance':body=<FinishMaintenanceForm id={id} onSave={save}/>;break;
 case 'document':body=<DocumentForm onSave={save}/>;break;
 case 'notifications':body=<><h3>Trocas de óleo</h3>{db.vehicles.filter(v=>oil(v).left<=v.oilInterval*.15).map(v=><div key={v.id} className="oil-row"><div><strong>{v.plate}</strong><p>{num(oil(v).left)} {v.unit} para a troca</p></div><StatusBadge status={oil(v).left<=0?'Vencido':'Atenção'}/></div>)}<h3 className="section-gap">Checklists pendentes</h3>{db.checklists.some(c=>!c.done)?db.checklists.filter(c=>!c.done).map(c=><div className="oil-row" key={c.id}><strong>{s.vehicleName(c.vehicleId)}</strong><Button onClick={()=>open('checklist',c.id)}>Conferir</Button></div>):<Empty>Nenhum checklist pendente.</Empty>}</>;break;
 case 'help':body=<><Table headers={['Tecla','Ação']} rows={ [['Tab','Avança para o próximo controle.'],['Shift + Tab','Volta ao controle anterior.'],['Enter / Espaço','Ativa o botão em foco.'],['Enter em formulário','Envia o formulário, respeitando validações.'],['Escape','Fecha a janela aberta.'],['Setas em listas de seleção','Altera a opção pelo comportamento nativo.']]}/><p className="hint">O primeiro Tab oferece “Pular para o conteúdo”. As janelas mantêm o foco dentro delas e devolvem o foco ao fechar. Os gráficos possuem descrições e tabelas alternativas. O zoom do navegador permanece habilitado.</p></>;break;
 default:body=<Empty>Janela não encontrada.</Empty>;
 }
 return <Modal key={modal.key} title={titles[type]||'AVL Control'} onClose={close}>{body}</Modal>;
}
