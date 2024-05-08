import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import NetflixIndex from './netflix/netflix-index';
import { Login } from './components/Login/login';
import DataBinding from './components/DataBinding/DataBinding';
import Customer from './components/DataBinding/Customer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NetflixIndex /> */}
    {/* <Login /> */}
    {/* <DataBinding /> */}
    <Customer />
  </React.StrictMode>
);
reportWebVitals();
