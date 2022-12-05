import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BtalentUserApp } from './btalentUserApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BtalentUserApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
