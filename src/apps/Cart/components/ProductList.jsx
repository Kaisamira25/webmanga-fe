import React, { useEffect, useState } from "react";
import Product from "../../../components/ProductCart/Product";
import style from "./ProductList.module.scss";
import { fetchCart, fetchUpdateCart } from "../../../services/Service";
import axios from "axios";
function ProductList({ onCartUpdate }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const res = await fetchCart();
      if (res.data) {
        setCart(res.data);
        onCartChange();
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const incDec = async (qty, id, dec, name, img, price, author) => {
    if (dec === "dec") {
      if (qty === 1) {
        qty = 1;
      } else {
        qty -= 1;
      }
    } else {
      qty += 1;
    }
    const order = {
      name: name,
      img: img,
      price: price,
      author: author,
      qty: qty,
    };
    await axios.put(`http://localhost:3000/api/cart/${id}`, order);
    fetchCartData();
    onCartUpdate();
  };

  return (
    <div className={style.productList}>
      {cart.map((product, index) => (
        <div key={index}>
          <Product
            bookName={product.name}
            imgBook={product.img}
            bookPrice={product.price}
            author={product.author}
            total={product.price * product.qty}
            quantity={product.qty}
            handleDecrease={() =>
              incDec(
                product.qty,
                product.id,
                "dec",
                product.name,
                product.img,
                product.price,
                product.author
              )
            }
            handleIncrease={() =>
              incDec(
                product.qty,
                product.id,
                "inc",
                product.name,
                product.img,
                product.price,
                product.author
              )
            }
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
