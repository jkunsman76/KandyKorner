import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from './components/KandyKorner';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <KandyKorner />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
