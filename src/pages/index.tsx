import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { CartProducts } from "./cart-products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pizza-delivery" element={<Home />} />
      <Route path="/cart-products" element={<CartProducts />} />
    </Routes>
  );
};

export { AppRoutes };