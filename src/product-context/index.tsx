import { createContext, useState } from "react";
import productsJson from "../json/products.json";

export const ThemeContext = createContext({})

export const ThemeProvider = (Props: any) => {

    const [theme, setTheme] = useState(productsJson.data)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}