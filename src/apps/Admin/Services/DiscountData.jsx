import React, { useState, useEffect } from "react";
import axios from "axios";

function DiscountData() {
  const [discounts, setDiscounts] = useState([]);

  const fetchDiscounts = async () => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.get("http://localhost:8080/api/v1/discount/all",{});
      setDiscounts(response.data.data);
    } catch (error) {
      console.error("Error fetching Discounts:", error);
    }
  };

  const addDiscounts = async (data) => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.post(
        "http://localhost:8080/api/v1/discount",
        data
      );
      fetchDiscounts();
    } catch (error) {
      console.error("Error adding discount:", error);
    }
  };

  const updateDiscounts = async (id, data) => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.put(
        "http://localhost:8080/api/v1/discount/" + id,
        data
      );
      fetchDiscounts();
    } catch (error) {
      console.error("Error updating discount:", error);
    }
  };
  const findDiscount = async (name) => {
    try {
      if (name !== null && name !== "") {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/discount/search/" + name,
          {}
        );
        setDiscounts(response.data.data);
      } else {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/discount/all",
          {}
        );
        const modifiedDiscounts = response.data.data.map((discount) => ({
         
        }));
        setDiscounts(response.data.data);
      }
    } catch (error) {
      return error;
    }
  };
  
  useEffect(() => {
    fetchDiscounts();
  }, []);

  return {
    discounts,
    fetchDiscounts,
    addDiscounts,
    updateDiscounts,
    findDiscount,
    
  };
}

export default DiscountData;
