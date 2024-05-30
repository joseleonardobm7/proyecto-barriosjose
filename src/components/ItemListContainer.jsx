import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import Loading from "./Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const fecthProducts = async (categoryId) => {
      const productsCollection = collection(db, "products");
      const queryCollection =
        categoryId &&
        !["allProducts", "bestSeller", "topRated"].includes(categoryId)
          ? query(productsCollection, where("category", "==", categoryId))
          : productsCollection;
      const snapShot = await getDocs(queryCollection);
      if (snapShot.size > 0) {
        setProducts(
          snapShot.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        );
        setVisible(false);
      } else {
        setProducts([]);
        setVisible(false);
      }
    };
    fecthProducts(categoryId);
  }, [categoryId]);

  return (
    <>
      <div className="row my-5 mx-5">
        {["bestSellers", "topRated"].includes(categoryId) ? (
          <div className="text-center my-5">
            <p> Esta sección se habilitará próximamente</p>
          </div>
        ) : visible ? (
          <Loading />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
