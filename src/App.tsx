import { Header } from "./components/header";
import { Footer } from "./components/footer";
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
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App