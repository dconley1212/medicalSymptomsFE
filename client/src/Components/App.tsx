import React from "react";
import ToDo from "./ToDo";
import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Products from "../features/Checkout/Products";
import CheckoutInfoPage from "../features/Checkout/CheckoutInfoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/checkoutinfo" element={<CheckoutInfoPage />} />
        <Route path="/todolist" element={<ToDo />} />
        <Route path="products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
