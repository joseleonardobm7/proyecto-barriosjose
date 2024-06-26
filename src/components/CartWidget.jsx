import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
  const { getProductsInCart } = useContext(CartContext);

  return (
    <div className="cart position-relative">
      <a className="text-decoration-none" href="#">
        <i
          className="bi bi-cart3 text-black navbar-options-selector"
          data-toggle="tooltip"
          data-placement="top"
          title="Ver Carrito"
          data-value="shoppingCart"
        ></i>
      </a>
      <span
        className="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        id="shopping-cart-qty"
      >
        {getProductsInCart()}
        <span className="visually-hidden"> articles in cart </span>
      </span>
    </div>
  );
};

export default CartWidget;
