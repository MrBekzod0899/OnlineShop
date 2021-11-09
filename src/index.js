import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css'
import 'bootstrap/js/dist/popover'
import 'bootstrap/js/src/collapse'
import 'bootstrap/dist/js/bootstrap'



reactDom.render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>,
    document.getElementById('root')
) ;