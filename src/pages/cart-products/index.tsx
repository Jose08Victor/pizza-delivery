import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/actions';
import "./style.scss";

const CartProducts = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => dispatch(removeFromCart(id));

  const handleIncrement = (id: number) => dispatch(incrementQuantity(id));

  const handleDecrement = (id: number) => dispatch(decrementQuantity(id));

  let totalPrice: number = 0;

  return (
    <main>
      <section>
        <ul className="added-order">
          {
            cart.map((product) => {
              return (
                <li key={product.id}>
                  <div className="order-item">
                    <h3>{product.name}</h3>

                    <img src={product.image} alt={product.name} />
                  </div>

                  {products.map((e) => {
                    if (e.id === product.id) totalPrice += product.price * product.quantity
                    if (e.id === product.id) return (
                      <div key={e.id} className="order-price">
                        <div>
                          <button onClick={() => handleIncrement(product.id)}>+</button>

                          <span>{product.quantity}</span>

                          <button onClick={() => handleDecrement(product.id)}>−</button>
                        </div>

                        <p>
                          {(product.price * product.quantity).toLocaleString("pt-br", {
                            minimumFractionDigits: 2,
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>

                        <button className="remove-btn" onClick={() => handleRemoveFromCart(product.id)}>Remover Pedido</button>
                      </div>)
                  })}
                </li>
              )
            })
          }
        </ul>

        {
          totalPrice !== 0 && <div className="send-the-order">
            <p>Total:
              <span>
                {totalPrice.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>

            <button>Finalizar o pedido</button>
          </div>
        }
      </section>

      {
        totalPrice === 0 && <div className="return-to-menu">
          <Link to="/pizza-delivery">Nenhum pedido feito, Clique Aqui para retornar ao menu.</Link>
        </div>
      }
    </main >
  );
};

export { CartProducts };