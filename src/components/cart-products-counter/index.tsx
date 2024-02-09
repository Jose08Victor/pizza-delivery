import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPizzaSlice, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./style.scss"

export const CartProductsCounter = () => {
  
    return (
      <div className="products-list">
        <NavLink to="/cart-products">
          <p>Meu Pedido</p>
          <FontAwesomeIcon icon={faCartPlus} />
          {/* <FontAwesomeIcon icon={faPizzaSlice} /> */}
          <span></span>
        </NavLink>
      </div>
    );
  };