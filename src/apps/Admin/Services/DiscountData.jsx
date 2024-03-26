import React, { useState, useEffect } from "react";
import axios from "axios";

function DiscountData() {
  const [discounts, setDiscounts] = useState([]);

  const fetchDiscounts = async () => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.get(
        "http://localhost:8080/api/v1/discount/all",
        {}
      );
      const modifiedDiscounts = response.data.data.map((discount) => ({
        id: discount.discountId,
        discountName: discount.discountName,
        // description: discount.description,
        discountPercent: discount.discountPercent,
        active: discount.active,
        discountCode: discount.discountCode,
        createdAt: discount.createdAt,
        expirationDate: discount.expirationDate,
      }));
      setDiscounts(modifiedDiscounts);
      console.log(modifiedDiscounts);
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
      console.log("Discount added successfully:", response.data);
      console.log(data);
      fetchDiscounts();
    } catch (error) {
      console.log(data);
      console.error("Error adding discount:", error);
    }
  };

  const updateDiscounts = async (id, data) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.put(
        "http://localhost:8080/api/v1/discount/" + id,
        data
      );
      console.log("Discount update successfully:", response.data);
      fetchDiscounts();
    } catch (error) {
      console.error("Error updating discount:", error);
    }
  };

  const deleteDiscounts = async (id) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.delete(
        "http://localhost:8080/api/v1/discount/" + id,
        {}
      );
      console.log("Discount delete successfully:", response.data);
      fetchDiscounts();
      return true;
    } catch (error) {
      console.error("Error deleting discount:", error);
      return false;
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
        const modifiedDiscounts = response.data.data.map((discount) => ({
          id: discount.discountId,
          discountName: discount.discountName,
          // description: discount.description,
          discountPercent: discount.discountPercent,
          active: discount.active,
          discountCode: discount.discountCode,
          createdAt: discount.createdAt,
          expirationDate: discount.expirationDate,
        }));
        setDiscounts(modifiedDiscounts);
        console.log(name);
      } else {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/discount/all",
          {}
        );
        const modifiedDiscounts = response.data.data.map((discount) => ({
          id: discount.discountId,
          discountName: discount.discountName,
          // description: discount.description,
          discountPercent: discount.discountPercent,
          active: discount.active,
          discountCode: discount.discountCode,
          createdAt: discount.createdAt,
          expirationDate: discount.expirationDate,
        }));
        setDiscounts(modifiedDiscounts);
        console.log(name);
      }
      console.log(name);
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
    deleteDiscounts,
    findDiscount,
  };
}

export default DiscountData;
