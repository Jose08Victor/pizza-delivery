import { useContext } from "react";
import { AppContext } from "../../context";
import "./style.scss"
import { Link } from "react-router-dom";
const CartProducts = () => {
  const { pizzaData, handleQuantityChange, handleListChange } = useContext(AppContext);

  let totalPrice: number = 0;

  return (
    <main>
      <section>
        <ul className="added-order">
          {
            pizzaData.map((product) => {
              if (product.onAList === true) {
                totalPrice += product.price * product.quantity
                return (
                  <li key={product.id}>
                    <div className="order-item">
                      <h3>{product.name}</h3>

                      <img src={product.image} alt={product.name} />
                    </div>

                    <div className="order-price">
                      <div>
                        <button onClick={() => handleQuantityChange(product, "increase")}>+</button>

                        <span>{product.quantity}</span>

                        <button onClick={() => handleQuantityChange(product, "decrease")}>−</button>
                      </div>

                      <p>
                        {(product.price * product.quantity).toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>

                      <button className="remove-btn" onClick={() => handleListChange(product, "remove")}>Remover Pedido</button>
                    </div>
                  </li>
                )
              }
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