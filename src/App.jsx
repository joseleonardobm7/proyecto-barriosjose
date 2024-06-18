import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import Footer from "./navigation/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import AppContextProvider from "./components/context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/product-detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
