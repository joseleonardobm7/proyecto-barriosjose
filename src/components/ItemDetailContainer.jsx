import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [stock, setStock] = useState(0);
  const [visible, setVisible] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const fecthProduct = async (productId) => {
      const docRef = doc(db, "products", productId);
      const snapShot = await getDoc(docRef);
      if (snapShot.exists()) {
        setProduct({ id: snapShot.id, ...snapShot.data() });
        setVisible(false);
      }
      if (snapShot.exists()) {
        setProduct({ id: snapShot.id, ...snapShot.data() });
        setVisible(false);
      } else {
        setProduct({});
        setVisible(false);
      }
    };
    fecthProduct(productId);
    const fetchStock = async (productId) => {
      const collectionConnection = collection(db, "inventory");
      const queryCollection = query(
        collectionConnection,
        where("productId", "==", productId)
      );
      const snapShot = await getDocs(queryCollection);

      if (snapShot.size > 0) {
        const inventory = snapShot.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }))[0];
        setStock(inventory?.stock || 0);
      } else {
        setStock(0);
      }
    };
    fetchStock(productId);
  }, [productId]);

  return (
    <div className="container">
      <div className="row my-5">
        {visible ? (
          <Loading />
        ) : (
          <ProductDetail product={product} stock={stock} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
