import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages";
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
    </Provider>
  )
}

export default App