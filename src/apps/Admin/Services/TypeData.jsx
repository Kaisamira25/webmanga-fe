import React, { useState, useEffect } from "react";
import axios from "axios";
function TypeData() {
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.get(
        "http://localhost:8080/api/v1/type/all",
        {}
      );
      const modifiedTypes = response.data.data.map((type) => ({
        id: type.typeID,
        typeName: type.typeName,
      }));
      setTypes(modifiedTypes);
      console.log(modifiedTypes);
    } catch (error) {
      console.error("Error fetching Types:", error);
    }
  };

  const addTypes = async (data) => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.post(
        "http://localhost:8080/api/v1/type",
        data
      );
      console.log("Type added successfully:", response.data);
      console.log(data);
      // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchTypes để cập nhật danh sách thể loại
      fetchTypes();
    } catch (error) {
      console.log(data);
      console.error("Error adding Type:", error);
    }
  };
  const updateTypes = async (id, data) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.put(
        "http://localhost:8080/api/v1/type/" + id,
        data
      );
      console.log("Type update successfully:", response.data);
      // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchTypes để cập nhật danh sách thể loại
      fetchTypes();
    } catch (error) {
      console.error("Error adding Type:", error);
    }
  };
  const deleteTypes = async (id) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.delete(
        "http://localhost:8080/api/v1/type/" + id,
        {}
      );
      console.log("Type delete successfully:", response.data);
      fetchTypes();
      return true;
    } catch (error) {
      console.error("Error adding Type:", error);
      return false;
    }
  };
  const findType = async (name) => {
    try {
      if (name !== null && name !== "") {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/type/search/" + name,
          {}
        );
        const modifiedTypes = response.data.data.map((type) => ({
          id: type.typeID,
          typeName: type.typeName,
        }));
        setTypes(modifiedTypes);
        console.log(name);
      } else {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/type/all",
          {}
        );
        const modifiedTypes = response.data.data.map((type) => ({
          id: type.typeID,
          typeName: type.typeName,
        }));
        setTypes(modifiedTypes);
        console.log(name);
      }
      console.log(name);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return {
    types,
    fetchTypes,
    addTypes,
    updateTypes,
    deleteTypes,
    findType,
  }; // Trả về cả fetchTypes và addTypes
}

export default TypeData;
