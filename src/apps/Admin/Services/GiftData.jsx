import { useState, useEffect } from "react";
import axios from "axios";
function GiftData() {
    const [Gifts, setGifts] = useState([]);
    const fetchGifts = async () => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.get('http://localhost:8080/api/v1/gift/all', {});
            const modifiedGifts = response.data.data.map(Gift => ({
                id: Gift.GiftId,
                GiftName: Gift.GiftName,
                GiftType: Gift.GiftType
            }));
            setGifts(modifiedGifts);
            console.log(modifiedGifts);
        } catch (error) {
            console.error('Error fetching Gifts:', error);
        }
    };
    const addGifts = async (data) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.post('http://localhost:8080/api/v1/Gift/add', data);
            console.log('Genre added successfully:', response.data);
            console.log(data)
            // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchGifts để cập nhật danh sách thể loại
            fetchGifts();
        } catch (error) {
            console.log(data)
            console.error('Error adding genre:', error);
        }
    };
    const updateGifts = async (id,data) => {
        console.log(id)
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.put('http://localhost:8080/api/v1/Gift/'+id, data);
            console.log('Genre update successfully:', response.data);
            // Sau khi thêm thể loại thành công, bạn có thể gọi lại hàm fetchGifts để cập nhật danh sách thể loại
            fetchGifts();
        } catch (error) {
            console.error('Error adding genre:', error);
        }
    };
    const deleteGifts = async (id) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.delete('http://localhost:8080/api/v1/Gift/'+id,{});
            console.log('Genre delete successfully:', response.data);
            fetchGifts();
        } catch (error) {
            console.error('Error adding genre:', error);
        }
    };

    useEffect(() => {
        fetchGifts();
    }, []);

    return { Gifts, fetchGifts, addGifts,updateGifts,deleteGifts }; // Trả về cả fetchGenres và addGenres
}

export default GiftData;