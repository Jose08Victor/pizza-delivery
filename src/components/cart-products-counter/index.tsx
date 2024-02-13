import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import "./style.scss";

export const CartProductsCounter = () => {
  const { pizzaData } = useContext(AppContext);

  let counter: number = 0;

  pizzaData.map((product) => {
    if (product.onAList === true) counter++;
  })

  return (
    <div className="products-list">
      <NavLink to="/cart-products">
        <p>Meus Pedidos</p>

        <FontAwesomeIcon icon={faCartPlus} />

        <span>{counter}</span>
      </NavLink>
    </div>
  );
};