import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { CartProducts } from "../components/cart-products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pizza-delivery" element={<Home />} />
      <Route path="/cart-products" element={<CartProducts />} />
    </Routes>
  );
};

export { AppRoutes };