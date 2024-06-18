import ProductCounter from "./ProductCounter";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const ProductDetail = ({ product, stock }) => {
  const { addProduct } = useContext(CartContext);

  const generateStarsRatings = (rate, low, up) => {
    const rating = rate || 0;
    const icon =
      rating <= low
        ? " bi-star"
        : rating > low && rating < up
        ? " bi-star-half"
        : " bi-star-fill";
    return icon;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-4">
          <h1 className="fs-3 text-uppercase fw-semibold">{product.title}</h1>
          <div className="card-text">
            <p className="fs-4 fw-bold">${product.price}</p>
            <i
              className={`bi ${generateStarsRatings(
                product?.rating?.rate,
                0,
                1
              )} text-warning`}
            ></i>
            <i
              className={`bi ${generateStarsRatings(
                product?.rating?.rate,
                1,
                2
              )} text-warning`}
            ></i>
            <i
              className={`bi ${generateStarsRatings(
                product?.rating?.rate,
                2,
                3
              )} text-warning`}
            ></i>
            <i
              className={`bi ${generateStarsRatings(
                product?.rating?.rate,
                3,
                4
              )} text-warning`}
            ></i>
            <i
              className={`bi ${generateStarsRatings(
                product?.rating?.rate,
                4,
                5
              )} text-warning`}
            ></i>
            &nbsp;
            {product?.rating?.rate || 0}
            &nbsp; [{product?.rating?.count || 0}]
          </div>
          <p className="small">{product.description}</p>
          <p className="small"> Stock Disponible: {stock}</p>
          <ProductCounter stock={product.stock} addProduct={addProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
