import "./style.scss";
import { useAppContext } from "../../hooks/useAppContext";

export const Home = () => {
  const { pizzaData, handleQuantityChange, handleListChange } = useAppContext();

  return (
    <main>
      <h1>Menu</h1>

      <ul className="pizza-options">
        {
          pizzaData.map((product) => {
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
                      <button onClick={() => handleQuantityChange(product, "increase")}>+</button>

                      <span>{product.quantity}</span>

                      <button onClick={() => handleQuantityChange(product, "decrease")}>−</button>
                    </div>

                    <button className="add-btn" onClick={() => handleListChange(product, "add")}>Adicionar Pedido</button>
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