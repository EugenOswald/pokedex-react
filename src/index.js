import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; //Um Bootstrap zu nutzen muss es hier Importiert werden.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/pokemonTyps.css';
import './style/fontBaloo.css';
import './style/style.css';
import App from './App';

    

/* const element = <h1>Hello World</h1>;
 */

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<App />); // Importierte Componente schreibt man in < />
