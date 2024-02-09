import { Link } from 'react-router-dom';
import { CartProductsCounter } from '../cart-products-counter';
import erro from '../../assets/pizza-delivery-logo.png';
import "./style.scss"

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/pizza-delivery">
          {/* <img src="https://raw.githubusercontent.com/Jose08Victor/pizza-delivery/main/src/assets/pizza-delivery-logo.png" alt="Pizza Delivery Logo" /> */}
          <img src={erro} alt="teste" />
        </Link>
        <CartProductsCounter />
      </div>
    </header>
  );
};