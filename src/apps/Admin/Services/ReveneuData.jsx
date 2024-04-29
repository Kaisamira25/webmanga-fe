import React, { useState, useEffect } from "react";
import axios from "axios";
function ReveData() {
    const [order,setOrder]=useState([]);
  const fetchReve = async () =>{
      const token = "your_actual_access_token_value";
      const response = await axios.get("http://localhost:8080/api/v1/order/revenue" , {});
      const modifiedReve = response.data.data;
      setOrder(modifiedReve);
      return modifiedReve;
  }
  const getOrderDate = async (month) => {
    const token = "your_actual_access_token_value";
    const response = await axios.post("http://localhost:8080/api/v1/order/revenue/month" ,month);
    const modifiedReve = response.data.data;
    return modifiedReve;
  }
  const getOrderYear = async (year) => {
    const token = "your_actual_access_token_value";
    const response = await axios.post("http://localhost:8080/api/v1/order/revenue/year" ,year);
    console.log(response.data.data)
     return response.data.data;
  }
   
  useEffect(() => {
    fetchReve();
  }, []);

  return {
    order,
    fetchReve,
    getOrderDate,
    getOrderYear
  }; 
}

export default ReveData;
