import { useContext } from "react";
import { WishListContext } from "./context/WishListContext";

const WishListWidget = () => {
  const { getProductsInList } = useContext(WishListContext);
  return (
    <div className="wishlist position-relative">
      <a className="text-decoration-none" href="#">
        <i
          className="bi bi-heart text-black navbar-options-selector"
          data-toggle="tooltip"
          data-placement="top"
          title="Favoritos"
          data-value="wishList"
        ></i>
      </a>
      <span
        className="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        id="wishlist-qty"
      >
        {getProductsInList()}
        <span className="visually-hidden"> articles in wishlist </span>
      </span>
    </div>
  );
};

export default WishListWidget;
