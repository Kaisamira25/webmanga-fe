import { useState, useEffect } from "react";
import axios from "axios";
function PublicData() {
    const [publics, setPublics] = useState([]);
    const fetchPublics = async () => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.get('http://localhost:8080/api/v1/publications/all', {});
            const modifiedCovers = response.data.data
            setPublics(modifiedCovers);
            console.log(publics)
        } catch (error) {
            console.error('Error fetching Covers:', error);
        }
    };
    const addPublics = async (publics, imagePaths) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.post('http://localhost:8080/api/v1/publications', publics);
            const data = response.data.data
            const responseImage =await axios.post('http://localhost:8080/api/v1/images/'+ data.publicationsID, imagePaths)
                .then((responseImage) => {
                    console.log(responseImage.data);
                    return true;
                })
                .catch((error) => {
                    console.error(error);
                    return false;
                });
        } catch (error) {
            console.error('Error fetching publication:', error);
            return false;
        }
        fetchPublics();
    };
    useEffect(() => {
        fetchPublics()
    }, []);

    return { publics, fetchPublics, addPublics }; // Trả về cả fetchGenres và addGenres
}
export default PublicData;