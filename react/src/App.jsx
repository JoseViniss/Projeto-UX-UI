import {Component} from 'react';
import {useApp} from './context/AppContext.jsx';
import Layout from './components/Layout.jsx';
import ModalHost from './components/ModalHost.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Vehicles from './pages/Vehicles.jsx';
import VehicleDetail from './pages/VehicleDetail.jsx';
import Works from './pages/Works.jsx';
import Finance from './pages/Finance.jsx';
import Maintenance from './pages/Maintenance.jsx';
import Documents from './pages/Documents.jsx';
import Reports from './pages/Reports.jsx';
const pages={dashboard:Dashboard,veiculos:Vehicles,detail:VehicleDetail,obras:Works,financeiro:Finance,manutencao:Maintenance,documentos:Documents,relatorios:Reports};
export class ErrorBoundary extends Component{state={error:null};static getDerivedStateFromError(error){return {error};}render(){if(this.state.error)return <main style={{padding:40}}><h1>Não foi possível abrir esta tela.</h1><p>Seus dados salvos foram preservados. Recarregue a aplicação.</p><button className="btn primary" onClick={()=>location.reload()}>Recarregar</button><details><summary>Detalhes técnicos</summary>{this.state.error.message}</details></main>;return this.props.children;}}
export default function App(){const {ui,loggedIn,toasts}=useApp();const Page=pages[ui.tab]||Dashboard;return <><a className="skip-link" href="#main-content" onClick={()=>document.getElementById('main-content')?.focus()}>Pular para o conteúdo</a>{loggedIn?<Layout><Page/></Layout>:<Login/>}<ModalHost/><div className="toasts" role="status" aria-live="polite" aria-atomic="true">{toasts.map(t=><div className="toast" key={t.id}>{t.message}</div>)}</div></>;}
