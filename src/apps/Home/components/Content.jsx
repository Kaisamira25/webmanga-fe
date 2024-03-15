import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import { fetchAllProduct } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
function Content({ categoryId }) {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProduct();
  }, [categoryId]);
  const getProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res.data) {
        setListProduct(
          categoryId
            ? res.data.filter((product) => product.categoryId === 3)
            : res.data
            
        );
      }  
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const handleViewDetail = (id,name,description,img,publishYear,publisher,categories,author,categoryId) => {
    navigate(`/Detail/${id}`,{state:{id:id,name:name,description:description,img:img,publishYear:publishYear,publisher:publisher,categories:categories,author:author,categoryId:categoryId}});
  };

  const handleAddToCart = (id) => {
    const selectedProduct = listProduct.find((product) => product.id === id );
    setCart((prevCart) => [...prevCart, selectedProduct]);
  };
  return (
    <div className={style.container}>
      {listProduct.map((product) => (
        <div key={product.id}>
          <Card
            id={product.id}
            imgSrc={product.img}
            name={product.name}
            priceBeforeDiscount={product.price}
            priceAfterDiscount={""}
            summary={product.description}
            onViewDetail={() => handleViewDetail(product.id,product.name,product.description,product.img,product.publishYear,product.publisher,product.categories,product.author,product.categoryId)}
            onAddToCart={() =>
              handleAddToCart(
                product.id,
                product.name,
                product.img,
                product.price
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

export default Content;
