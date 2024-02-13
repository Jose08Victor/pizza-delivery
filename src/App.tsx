import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { AppProvider } from './context';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages";
import './App.scss';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App