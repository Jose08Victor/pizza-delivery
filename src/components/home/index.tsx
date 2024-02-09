import { useContext } from "react";
import { ThemeContext } from "../../product-context";
import "./style.scss";

export const Home = () => {
  const { theme, setTheme }: any = useContext(ThemeContext)

  const handleIncreaseQuantity = (product: any) => setTheme([...theme], product.quantity++);
  const handleDecreaseQuantity = (product: any) => product.quantity !== 1 ? setTheme([...theme], product.quantity--) : setTheme([...theme]);
  const handleAddTheOrder = (product: any) => setTheme([...theme], product.onAList = true);

  return (
    <main>
      <h1>Menu</h1>

      <ul className="pizza-options">
        {theme.map((product: any, index: any) => {
          return (
            <li key={index}>
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
                    <button onClick={() => { handleIncreaseQuantity(product) }}>+</button>

                    <span>{product.quantity}</span>

                    <button onClick={() => { handleDecreaseQuantity(product) }}>−</button>
                  </div>

                  <button className="add-btn" onClick={() => { handleAddTheOrder(product) }}>Adicionar Pedido</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  );
};