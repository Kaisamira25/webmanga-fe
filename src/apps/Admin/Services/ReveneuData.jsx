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
  const getOrderDate = async (list) => {
    const token = "your_actual_access_token_value";
    const response = await axios.post("http://localhost:8080/api/v1/order/revenue/date" ,list);
    const modifiedReve = response.data.data;
    return modifiedReve;
  }
   
  useEffect(() => {
    fetchReve();
  }, []);

  return {
    order,
    fetchReve,
    getOrderDate
  }; 
}

export default ReveData;
