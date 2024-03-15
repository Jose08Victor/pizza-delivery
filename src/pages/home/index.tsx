import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { incrementQuantity, decrementQuantity, addToCart } from '../../store/actions';
import "./style.scss";

export const Home = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleIncrement = (id: number) => dispatch(incrementQuantity(id))
  const handleDecrement = (id: number) => dispatch(decrementQuantity(id));
  const handleAddToCart = (id: number) => dispatch(addToCart(id));

  return (
    <main>
      <h1>Menu</h1>

      <ul className="pizza-options">
        {
          products.map((product) => {
            return (
              <li key={product.id}>
                <div className="order-item">
                  <h3>{product.name}</h3>

                  <img src={product.image} alt={product.name} />

                  <p>{product.description}</p>
                </div>

                <div className="order-price">
                  <p>
                    {(product.price * product.quantity).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>

                  <div className="add-order">
                    <div>
                      <button onClick={() => handleIncrement(product.id)}>+</button>

                      <span>{product.quantity}</span>

                      <button onClick={() => handleDecrement(product.id)}>−</button>
                    </div>

                    <button className="add-btn" onClick={() => handleAddToCart(product.id)}>Adicionar Pedido</button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  );
};