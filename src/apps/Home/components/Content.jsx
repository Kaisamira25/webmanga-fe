import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import { fetchAllProduct } from "../../../services/Service";
function Content() {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res.data) {
        setListProduct(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className={style.container}>
      {listProduct.map((item) => (
        <div key={item.id}>
          <Card
            imgSrc={item.img}
            name={item.name}
            priceBeforeDiscount={item.price}
            priceAfterDiscount={""}
            summary={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Content;
