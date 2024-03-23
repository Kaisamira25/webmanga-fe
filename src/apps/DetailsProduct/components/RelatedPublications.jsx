import Card from "./Card";
import style from "../scss/RelatedPublications.module.scss";
import {useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { fetchAllProduct } from "../../../services/Service";


function RelatedPublications() {
  const navigates = useNavigate();
  const location = useLocation();
  const {categoryId} = location.state;
  const Nlistproduct = {
 "categoryId": categoryId}

  const listproduct = [];

  listproduct.push(Nlistproduct);

const [listProducts, setListProduct] = useState([]);
useEffect(() => { getProduct();}, []);
const getProduct = async () => {
  try {
    const res = await fetchAllProduct();
    if (res.data) {
      setListProduct(res.data);
      const filteredProduct = res.data.filter(product => product.categoryId === listproduct[0].categoryId);
      setListProduct(filteredProduct); 
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const handleViewDetail = (id,name,description,img,publishYear,publisher,categories,author,categoryId,price) => {
  navigates(`/Detail/${id}`,{state:{id:id,name:name,description:description,img:img,publishYear:publishYear,publisher:publisher,categories:categories,author:author,categoryId:categoryId,price:price}});
};
  return (
    <div className={style.container}>
      <p>Related Publicatinos</p>
      <div className={style.productContainer}>
        {listProducts.map((product, index) => (
          <Card key={index} imgUrl={product.img}
          id={product.id}
          Viewdetail={() => handleViewDetail(product.id,product.name,product.description,product.img,product.publishYear,product.publisher,product.categories,product.author,product.categoryId,product.price)}
          />
        ))}
      </div>
    </div>
    // <div className={style.container}>
    //   {list.map((product, index) => (
    //     <Card
    //       key={index}
    //       imgUrl={item.img}
    //       name={item.name}
    //       beforeDiscount={"100,000VND"}
    //       afterDiscount={"99,000VND"}
    //     />
    //   ))}
    // </div>
  );
}

export default RelatedPublications;
