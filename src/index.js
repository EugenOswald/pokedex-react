import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/pokemonTyps.css';
import './style/fontBaloo.css';
import './style/style.css';
import App from './App';

    


const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />);
