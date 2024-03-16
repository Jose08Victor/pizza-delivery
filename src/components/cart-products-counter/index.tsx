import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../../store/reducers';
import "./style.scss";

export const CartProductsCounter = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="products-list">
      <NavLink to="/cart-products">
        <p>Meus Pedidos</p>

        <FontAwesomeIcon icon={faCartPlus} />

        <span>{cart.length}</span>
      </NavLink>
    </div>
  );
};