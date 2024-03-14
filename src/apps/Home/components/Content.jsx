import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import { fetchAllProduct } from "../../../services/Service";
function Content({ categoryId }) {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, [categoryId]);
  const getProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res.data) {
        setListProduct(
          categoryId
            ? res.data.filter((product) => product.categoryId === categoryId)
            : res.data
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className={style.container}>
      {listProduct.map((product) => (
        <div key={product.id}>
          <Card
            imgSrc={product.img}
            name={product.name}
            priceBeforeDiscount={product.price}
            priceAfterDiscount={""}
            summary={product.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Content;
