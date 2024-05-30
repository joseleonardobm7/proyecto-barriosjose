import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
    <div className="col-md-3 text-center">
      <Link
        to={"/product-detail/" + product.id}
        className="text-decoration-none d-block"
        style={{ height: "100%" }}
      >
        <div className="card h-100 border-0 product-card">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <p className="card-text small text-uppercase mb-0">
              {product.title}
            </p>
            <p className="card-text mb-0">
              <b>${product.price}</b>
            </p>
            <p className="card-text">
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
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
