import React, { useEffect, useState } from "react";
import Product from "../../../components/ProductCart/Product";
import style from "./ProductList.module.scss";
import {useLocation} from 'react-router-dom';
import axios from "axios";

function ProductList({ onCartUpdate }) {
  const location = useLocation();
  const { state } = location;
  const Nlistproduct = {
    'name': state.listproduct[0].name,
    'img': state.listproduct[0].img,
    'price': state.listproduct[0].price,
    'author': state.listproduct[0].author,
    'qty': state.quantity,
  }
  const listcart = [];
    listcart.push(Nlistproduct);
   var product = localStorage.getItem('productList')
    if(product === null) {
      var productList = [];
    } else {
      var productList = JSON.parse(product);
      productList.push(Nlistproduct);
      localStorage.setItem('productList', JSON.stringify(productList));
    }

  
console.log(product);
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
      qty: quantity,
    };
    await axios.put(`http://localhost:3000/api/cart/${id}`, order);
    fetchCartData();
    onCartUpdate();
  };

  return (
    <div className={style.productList}>
      {listcart.map((product, index) => (
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
