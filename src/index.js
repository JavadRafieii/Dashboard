import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import Dashboard from './Components/Dashboard';
import { Provider } from './Components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <Dashboard />
    </Provider>
);
