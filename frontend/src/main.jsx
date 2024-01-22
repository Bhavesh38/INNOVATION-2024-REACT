import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { store } from './reducer/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
