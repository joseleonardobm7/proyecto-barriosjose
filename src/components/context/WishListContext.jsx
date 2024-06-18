import { createContext, useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const inList = (id) => {
    return wishList.some((item) => item.id === id);
  };

  const addProduct = (item) => {
    if (!inList(item.id)) {
      setWishList([...wishList, item.id]);
    }
  };

  const removeProduct = (id) => {
    const items = wishList.filter((item) => item.id !== id);
    setWishList([...items]);
  };

  const clear = () => {
    setWishList([]);
  };

  const getProductsInList = () => {
    return wishList.length || 0;
  };

  const WishListContextOptions = {
    wishList,
    inList,
    addProduct,
    removeProduct,
    clear,
    getProductsInList,
  };
  return (
    <WishListContext.Provider value={{ ...WishListContextOptions }}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
