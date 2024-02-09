import { Header } from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import './App.scss'
import { ThemeProvider } from "./product-context";

function App() {
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
