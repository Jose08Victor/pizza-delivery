import { Link } from 'react-router-dom';
import { CartProductsCounter } from '../cart-products-counter';
import "./style.scss";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/pizza-delivery">
          <img src="https://raw.githubusercontent.com/Jose08Victor/pizza-delivery/main/src/assets/pizza-delivery-logo.png" alt="Pizza Delivery Logo" />
        </Link>

        <CartProductsCounter />
      </div>
    </header>
  );
};