import React, { useState, useEffect } from "react";
import axios from "axios";
function OrderData() {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.get("http://localhost:8080/api/v1/order/getAll", {} );
      const modifiedorder = response.data.data
      setOrders(modifiedorder);
      console.log(modifiedorder)
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };
  
  useEffect(() => {
    fetchOrder();
  }, []);

  return {
    orders,
    fetchOrder
  }; // Trả về cả fetchGenres và addGenres
}

export default OrderData;
