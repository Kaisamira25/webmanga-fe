import React, { useState, useEffect } from "react";
import axios from "axios";
function ReveData() {
    const [order,setOrder]=useState([]);
  const fetchReve = async () =>{
      const token = "your_actual_access_token_value";
      const response = await axios.get("http://localhost:8080/api/v1/order/revenue" , {});
      const modifiedReve = response.data.data;
      console.log(response.data.data)
      setOrder(modifiedReve);
      return modifiedReve;
  }
  
  useEffect(() => {
    fetchReve();
  }, []);

  return {
    order,
    fetchReve
  }; 
}

export default ReveData;
