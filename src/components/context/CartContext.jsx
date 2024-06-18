import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const inCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addProduct = (item, quantity) => {
    console.log("Agregando");
    if (inCart(item.id)) {
      let product = cart.find((prod) => prod.id === item.id);
      product.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (id) => {
    const items = cart.filter((item) => item.id !== id);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const getProductsInCart = () => {
    console.log("Test");
    return cart.length || 0;
  };

  const getQtyProducts = () => {
    return cart.reduce((acum, item) => (acum += item.quantity), 0);
  };

  const getTotalProducts = () => {
    return cart.reduce(
      (acum, item) => (acum += item.quantity * item.precio),
      0
    );
  };

  const CartContextOptions = {
    cart,
    addProduct,
    removeItem,
    clear,
    getProductsInCart,
    getQtyProducts,
    getTotalProducts,
  };
  return (
    <CartContext.Provider value={{ ...CartContextOptions }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
