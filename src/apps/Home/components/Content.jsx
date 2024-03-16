import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import { fetchAllProduct } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Content({ categoryId, setCart }) {
  const [listProduct, setListProduct] = useState([]);
  const navigate = useNavigate();
  let qty = 1;
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
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

  const handleViewDetail = (id) => {
    navigate(`/Detail/${id}`);
  };

  const handleAddToCart = async (id, name, price, author, img) => {
    let isExisting = false;
    const res = await axios.get("http://localhost:3000/api/cart");
    if (res.data.length === 0) {
      const order = {
        id: id,
        name: name,
        price: price,
        author: author,
        img: img,
        qty: qty,
      };
      axios.post("http://localhost:3000/api/cart", order);
    } else {
      res.data.map((orderItem) => {
        if (id === orderItem.id) {
          orderItem.qty += 1;
          const order = {
            id: id,
            name: name,
            price: price,
            author: author,
            img: img,
            qty: orderItem.qty,
          };
          axios.put(`http://localhost:3000/api/cart/${orderItem.id}`, order);
          isExisting = true;
        }
      });
      if (isExisting == false) {
        const order = {
          id: id,
          name: name,
          price: price,
          author: author,
          img: img,
          qty: qty,
        };
        axios.post("http://localhost:3000/api/cart", order);
      }
    }
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
            onViewDetail={() => handleViewDetail(product.id)}
            onAddToCart={() =>
              handleAddToCart(
                product.id,
                product.name,
                product.price,
                product.author,
                product.img
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

export default Content;
