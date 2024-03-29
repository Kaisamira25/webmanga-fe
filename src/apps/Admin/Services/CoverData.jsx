import React, { useState, useEffect } from "react";
import axios from "axios";
function CoverData() {
  const [covers, setCovers] = useState([]);
  const [coversSL, setCoverSL] = useState([]);

  const fetchCovers = async () => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.get(
        "http://localhost:8080/api/v1/cover/all",
        {}
      );
      const modifiedCovers = response.data.data.map((cover) => ({
        id: cover.coverID,
        coverType: cover.coverType,
      }));
      setCovers(modifiedCovers);
      console.log(modifiedCovers);
    } catch (error) {
      console.error("Error fetching Covers:", error);
    }
  };
  const GetCoverSelect = async (id) => {
    try {
        const token = 'your_actual_access_token_value';
        const response = await axios.get('http://localhost:8080/api/v1/publications_cover/' + id, {});
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
};

  const addCovers = async (data) => {
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.post(
        "http://localhost:8080/api/v1/cover",
        data
      );
      console.log("Genre added successfully:", response.data);
      console.log(data);
      // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchCovers để cập nhật danh sách thể loại
      fetchCovers();
    } catch (error) {
      console.log(data);
      console.error("Error adding genre:", error);
    }
  };
  const updateCovers = async (id, data) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.put(
        "http://localhost:8080/api/v1/cover/" + id,
        data
      );
      console.log("Genre update successfully:", response.data);
      // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchCovers để cập nhật danh sách thể loại
      fetchCovers();
    } catch (error) {
      console.error("Error adding genre:", error);
    }
  };
  const deleteCovers = async (id) => {
    console.log(id);
    try {
      const token = "your_actual_access_token_value";
      const response = await axios.delete(
        "http://localhost:8080/api/v1/cover/" + id,
        {}
      );
      console.log("Genre delete successfully:", response.data);
      fetchCovers();
      return true;
    } catch (error) {
      console.error("Error adding genre:", error);
      return false;
    }
  };
  const findCover = async (name) => {
    try {
      if (name !== null && name !== "") {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/cover/search/" + name,
          {}
        );
        const modifiedCovers = response.data.data.map((cover) => ({
          id: cover.coverID,
          coverType: cover.coverType,
        }));
        setCovers(modifiedCovers);
        console.log(name);
      } else {
        const token = "your_actual_access_token_value";
        const response = await axios.get(
          "http://localhost:8080/api/v1/cover/all",
          {}
        );
        const modifiedCovers = response.data.data.map((cover) => ({
          id: cover.coverID,
          coverType: cover.coverType,
        }));
        setCovers(modifiedCovers);
        console.log(name);
      }
      console.log(name);
    } catch (error) {
      return error;
    }
  };
  const CoverSelect = async () => {
    try {
      const token = 'your_actual_access_token_value';
      const response = await axios.get('http://localhost:8080/api/v1/cover/all', {});
      const modifiedCover = response.data.data.map(cover => ({
        value: cover.coverID,
        label: cover.coverType
      }));
      setCoverSL(modifiedCover);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  }

  useEffect(() => {
    fetchCovers();
    CoverSelect();
  }, []);

  return {
    covers,
    fetchCovers,
    addCovers,
    updateCovers,
    deleteCovers,
    findCover,
    coversSL,
    GetCoverSelect
  }; // Trả về cả fetchGenres và addGenres
}

export default CoverData;
