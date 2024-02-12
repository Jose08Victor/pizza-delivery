import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./style.scss";

export const CartProductsCounter = () => {
  const { theme }: any = useContext(ThemeContext);

  let counter: number = 0;

  theme.map((product: any) => {
    if (product.onAList === true) {
      counter++
    }
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