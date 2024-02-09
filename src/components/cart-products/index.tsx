import { useContext } from "react";
import { ThemeContext } from "../../product-context";
import "./style.scss"
import { Link } from "react-router-dom";
const CartProducts = () => {
  const { theme, setTheme }: any = useContext(ThemeContext);

  const handleIncreaseQuantity = (product: any) => setTheme([...theme], product.quantity++);
  const handleDecreaseQuantity = (product: any) => product.quantity !== 1 ? setTheme([...theme], product.quantity--) : setTheme([...theme]);
  const handleRemoveTheOrder = (product: any) => setTheme([...theme], product.onAList = false);

  let as = 0;

  return (
    <main>
      <section>
        <ul className="added-order">
          {theme.map((product: any) => {
            if (product.onAList === true) {
              as += product.price * product.quantity
              return (
                <li key={product.id}>
                  <div className="order-item">
                    <h3>{product.name}</h3>

                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="order-price">
                    <div>
                      <button onClick={() => { handleIncreaseQuantity(product) }}>+</button>

                      <span>{product.quantity}</span>

                      <button onClick={() => { handleDecreaseQuantity(product) }}>-</button>
                    </div>

                    <p>{(product.price * product.quantity).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "BRL",
                    })}</p>

                    <button className="remove-btn" onClick={() => { handleRemoveTheOrder(product) }}>Remover Pedido</button>
                  </div>
                </li>
              )
            }
          })}
        </ul>


        {as !== 0 && <div className="send-the-order">
          <p>Total:
            <span>
              {as.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>

          <button>Finalizar o pedido</button>
        </div>}
      </section>

      {as === 0 && <div className="prompt-to-return-to-menu">
        <div>
          <p>Nenhum pedido feito, Clique no botão abaixo para retornar ao menu.</p>

          <Link to="/pizza-delivery">
            Retornar ao Menu
          </Link>
        </div>
      </div>}
    </main >
  );
};

export { CartProducts };