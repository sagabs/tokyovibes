import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Keranjang from "./pages/Keranjang";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<ProductDetails />} />
        <Route exact path="/carts" element={<Keranjang />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/tracks" element={<Tracking />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
