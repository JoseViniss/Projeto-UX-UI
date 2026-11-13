import React from 'react';
import {createRoot} from 'react-dom/client';
import App,{ErrorBoundary} from './App.jsx';
import {AppProvider} from './context/AppContext.jsx';
import './styles/app.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><ErrorBoundary><AppProvider><App/></AppProvider></ErrorBoundary></React.StrictMode>);
