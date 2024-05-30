import React, { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const MyComponent = () => {
  const [data, setData] = useState([]);
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
        setData(
          snapShot.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }))
        );
      } else {
        setData([]);
      }
    };
    fecthProducts(null);

    const readFile = async () => {
      // Leer el archivo JSON
      const response = await fetch("src/components/json/allProducts.json");
      const data = await response.json();
      setData(data);
    };

    const uploadDataToFirestore = async (collectionName, dataToLoad) => {
      // Obtener una referencia a la colección en Firestore
      const collectionRef = collection(db, collectionName);
      // Iterar sobre los datos y agregarlos a Firestore
      dataToLoad.forEach(async (item, index) => {
        const data = {
          productId: item.id,
          stock: 150,
        };
        console.log(data);
        await addDoc(collectionRef, data);
      });
    };
    const dataToLoad = uploadDataToFirestore("inventory", data);
  }, []);

  return (
    <div>
      <p>Cargando datos en Firestore...</p>
    </div>
  );
};

export default MyComponent;
