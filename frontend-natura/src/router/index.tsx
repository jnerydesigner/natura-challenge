import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";

export default function RouterNatura() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
