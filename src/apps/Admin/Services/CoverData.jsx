import React, { useState, useEffect } from "react";
import axios from "axios";
function CoverData() {
    const [covers, setCovers] = useState([]);

    const fetchCovers = async () => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.get('http://localhost:8080/api/v1/cover/all', {});
            const modifiedCovers = response.data.data.map(cover => ({
                id: cover.coverId,
                coverType: cover.coverType
            }));
            setCovers(modifiedCovers);
            console.log(modifiedCovers);
        } catch (error) {
            console.error('Error fetching Covers:', error);
        }
    };

    const addCovers = async (data) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.post('http://localhost:8080/api/v1/cover/add', data);
            console.log('Genre added successfully:', response.data);
            console.log(data)
            // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchCovers để cập nhật danh sách thể loại
            fetchCovers();
        } catch (error) {
            console.log(data)
            console.error('Error adding genre:', error);
        }
    };
    const updateCovers = async (id,data) => {
        console.log(id)
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.put('http://localhost:8080/api/v1/cover/'+id, data);
            console.log('Genre update successfully:', response.data);
            // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchCovers để cập nhật danh sách thể loại
            fetchCovers();
        } catch (error) {
            console.error('Error adding genre:', error);
        }
    };
    const deleteCovers = async (id) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.delete('http://localhost:8080/api/v1/cover/'+id,{});
            console.log('Genre delete successfully:', response.data);
            fetchCovers();
        } catch (error) {
            console.error('Error adding genre:', error);
        }
    };

    useEffect(() => {
        fetchCovers();
    }, []);

    return { covers, fetchCovers, addCovers,updateCovers,deleteCovers }; // Trả về cả fetchGenres và addGenres
}

export default CoverData;