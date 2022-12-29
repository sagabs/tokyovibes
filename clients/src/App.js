import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Keranjang from "./pages/Keranjang";
import Checkout from "./pages/Checkout";
import Tracking from "./pages/Tracking";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import AboutUs from "./pages/AboutUs";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<ProductDetails />} />
        <Route exact path="/carts" element={<Keranjang />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/tracks" element={<Tracking />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
