import React from "react";
import { UserContextProvider } from "./UserContext";
import { CartContextProvider } from "./CartContext";
import { WishListContextProvider } from "./WishListContext";

const App = ({ children }) => {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <WishListContextProvider>{children}</WishListContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
