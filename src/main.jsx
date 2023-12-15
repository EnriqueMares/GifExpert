import React from 'react';
import ReactDOM from 'react-dom/client';
import {GifExpertApp} from './GifExpertApp.jsx';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* El modo estricto solo se usa en desarrollo, no es para producción y algunas cosas te las imprime dos veces en consola */}
    <GifExpertApp />
  </React.StrictMode>,
);
