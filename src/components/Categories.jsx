import _ from "lodash";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const fetchCategories = async () => {
      const categoriesCollection = collection(db, "product_categories");
      const queryCollection = query(
        categoriesCollection,
        where("render", "==", true)
      );
      const snapShot = await getDocs(queryCollection);

      if (snapShot.size > 0) {
        setCategories(
          snapShot.docs.map((category) => ({ ...category.data() }))
        );
      } else {
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <ul
        id="nav-bar-options-container"
        className="navbar-nav ms-auto mb-2 mb-lg-0"
      >
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/allProducts`}
          >
            Todos los Productos
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </Link>
          <ul id="categories-container" className="dropdown-menu">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  className="dropdown-item navbar-options-selector"
                  to={`/category/${category.en}`}
                >
                  <span className="p-3"> {category.es} </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/bestSellers`}
          >
            Más Vendidos
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link navbar-options-selector"
            to={`/category/topRated`}
          >
            Mejores Valorados
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Categories;
