import { createContext, useCallback, useState } from "react";
import productsJson from "../json/products.json";

interface IpizzaData {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
    onAList: boolean;
}

interface IAppContext {
    pizzaData: IpizzaData[];
    handleQuantityChange(product: IpizzaData, type: "increase" | "decrease"): void;
    handleListChange(product: IpizzaData, type: "add" | "remove"): void;
}

export const AppContext = createContext<IAppContext>({
    pizzaData: [],
    handleQuantityChange: () => { },
    handleListChange: () => { }
})

export const AppProvider = ({ children }: { children: JSX.Element }) => {

    const [pizzaData, setPizzaData] = useState<IpizzaData[]>(productsJson.data);

    const handleQuantityChange = useCallback((product: IpizzaData, type: "increase" | "decrease") => {
        const newData = pizzaData.map(item => {
            if (item.id === product.id) {
                let newQuantity = item.quantity;

                if (type === "increase") newQuantity += 1;

                else if (type === "decrease" && item.quantity > 1) newQuantity -= 1;

                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setPizzaData(newData);
    }, [pizzaData]);

    const handleListChange = useCallback((product: IpizzaData, type: "add" | "remove") => {
        const newData = pizzaData.map(item => {
            if (item.id === product.id && type === "add") return { ...item, onAList: true };

            if (item.id === product.id && type === "remove") return { ...item, onAList: false };

            return { ...item }
        });
        setPizzaData(newData);
    }, [pizzaData]);

    return (
        <AppContext.Provider value={{ pizzaData, handleQuantityChange, handleListChange }}>
            {children}
        </AppContext.Provider>
    )
}