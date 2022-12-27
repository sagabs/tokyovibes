import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home/index'
import Register from './pages/Register/index';
import Keranjang from './pages/Keranjang/index';
import Checkout from './pages/Checkout/index'
import Tracking from './pages/Tracking/index'
import reportWebVitals from './reportWebVitals';
// import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails'


import Payment from "./pages/Payment/index";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tracking />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


