import { useEffect, useState } from "react";
import style from "./Categories.module.scss";
import { fetchAllCategories } from "../../../services/Service";
function Categories({ onCategorySelect }) {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const res = await fetchAllCategories();
      if (res.data) {
        setListProduct(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    onCategorySelect(categoryId);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {listProduct.map((item) => (
          <button key={item.id} onClick={() => handleCategoryClick(item.id)}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
