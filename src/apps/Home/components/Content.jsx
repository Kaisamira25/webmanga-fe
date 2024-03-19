import { useEffect, useState } from "react";
import Card from "./CardPublications";
import style from "./Content.module.scss";
import { fetchAllProduct } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Content({ categoryId }) {
  const [listProduct, setListProduct] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  let qty = 1;
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
    const storedCartItemCount = localStorage.getItem("cartItemCount");
    if (storedCartItemCount !== null) {
      setCartItemCount(parseInt(storedCartItemCount));
    }
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

  const handleViewDetail = (
    id,
    name,
    description,
    img,
    publishYear,
    publisher,
    categories,
    author,
    categoryId
  ) => {
    navigate(`/Detail/${id}`, {
      state: {
        id: id,
        name: name,
        description: description,
        img: img,
        publishYear: publishYear,
        publisher: publisher,
        categories: categories,
        author: author,
        categoryId: categoryId,
      },
    });
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
      setCartItemCount((prevCount) => {
        localStorage.setItem("cartItemCount", prevCount + 1);
        return prevCount + 1;
      });
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
        setCartItemCount((prevCount) => {
          localStorage.setItem("cartItemCount", prevCount + 1);
          return prevCount + 1;
        });
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
            onViewDetail={() =>
              handleViewDetail(
                product.id,
                product.name,
                product.description,
                product.img,
                product.publishYear,
                product.publisher,
                product.categories,
                product.author,
                product.categoryId
              )
            }
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
