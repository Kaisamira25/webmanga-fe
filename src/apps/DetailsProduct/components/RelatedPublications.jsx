import Card from "./Card";
import style from "../scss/RelatedPublications.module.scss";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllProduct } from "../../../services/Service";

function RelatedPublications() {
  const location = useLocation();
  const { categoryId } = location.state;
  const Nlistproduct = {
    categoryId: categoryId,
  };
  const listproduct = [];
  listproduct.push(Nlistproduct);

  const [listProducts, setListProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res.data) {
        setListProduct(res.data);
        const filteredProduct = res.data.filter(
          (product) => product.categoryId === listproduct[0].categoryId
        );
        setListProduct(filteredProduct);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className={style.container}>
      <p>Related Publicatinos</p>
      <div className={style.productContainer}>
        {listProducts.map((item, index) => (
          <Card key={index} imgUrl={item.img} />
        ))}
      </div>
    </div>
  );
}

export default RelatedPublications;
