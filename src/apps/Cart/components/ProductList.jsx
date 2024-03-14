import React, { useState } from "react";
import Product from "../../../components/ProductCart/Product";
import img from "../../../assets/imgs/ShadowGarden.jpg";
import img86 from "../../../assets/imgs/86.jpg";
import style from "./ProductList.module.scss";
function ProductList() {
  const [products, setProducts] = useState([
    {
      id: "1",
      bookName: "The Eminence In Shadow",
      img: img,
      bookPrice: 50000,
      author: "Aizawa Daisuke",
      category: "Fantasy",
      quantity: 1,
    },
  ]);

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div className={style.productList}>
      {products.map((product, index) => (
        <div key={index}>
          <Product
            index={index}
            bookName={product.bookName}
            imgBook={product.img}
            bookPrice={product.bookPrice}
            author={product.author}
            category={product.category}
            total={calculateTotal(product.bookPrice, product.quantity)}
            initialQuantity={product.quantity}
            setProducts={setProducts}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
