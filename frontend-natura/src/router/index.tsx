import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Products from "../pages/products";
import Product from "../pages/product";

export default function RouterNatura() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
