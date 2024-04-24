import { useState, useEffect } from "react";
import axios from "axios";
import CoverData from "../Services/CoverData";
import GenreData from "../Services/GenreData";
import TypeData from "../Services/TypeData";
import GiftData from "../Services/GiftData";

function PublicData() {
    const [publics, setPublics] = useState([]);
    const { GetCoverSelect } = CoverData();
    const { GetGenreSelect } = GenreData();
    const { GetTypeSelect } = TypeData();
    const { GetGiftSelect } = GiftData();
    const fetchPublics = async () => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.get('http://localhost:8080/api/v1/publications/all', {});
            setPublics(response.data.data);
        } catch (error) {
            console.error('Error fetching Publics:', error);
        }
    };
    const addPublics = async (publics, imagePaths, genres, covers, types, gifts) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.post('http://localhost:8080/api/v1/publications', publics);
            const data = response.data.data
            const responseImage = await axios.post('http://localhost:8080/api/v1/images/' + data.publicationsID, imagePaths)
                .then((responseImage) => {
                    return true;
                })
                .catch((error) => {
                    console.error(error);
                    return false;
                });
            if (genres !== null) {
                const listGenres = genres.map(genre => genre.value);
                const responseGenres = await axios.post('http://localhost:8080/api/v1/publications_genre/' + data.publicationsID, listGenres)
            }
            if (covers !== null) {
                const listCovers = covers.map(cover => cover.value);
                const responseCovers = await axios.post('http://localhost:8080/api/v1/publications_cover/' + data.publicationsID, listCovers)
            }
            if (types !== null) {
                const listTypes = types.map(type => type.value);
                const responseTypes = await axios.post('http://localhost:8080/api/v1/publications_type/' + data.publicationsID, listTypes)
            }
            if (gifts !== null) {
                const listGifts = gifts.map(gift => gift.value);
                const responseGifts = await axios.post('http://localhost:8080/api/v1/publications_gift/' + data.publicationsID, listGifts)
            }
        } catch (error) {
            console.error('Error fetching publication:', error);
            return false;
        }
        fetchPublics();
    };
    const updatePublics = async (id, publics, imagePaths, genres, covers, types, gifts) => {
        try {
            const token = 'your_actual_access_token_value';
            const response = await axios.put('http://localhost:8080/api/v1/publications/' + id, publics);
            const data = response.data.data
            if(imagePaths.length !== 0){
                const responseDelImage = await axios.delete('http://localhost:8080/api/v1/images/delImage/' + id, {});
                const responseImage = await axios.post('http://localhost:8080/api/v1/images/' + data.publicationsID, imagePaths)
                .then((responseImage) => {
                    console.log(responseImage.data);
                    return true;
                })
                .catch((error) => {
                    console.error(error);
                    return false;
                });
            }
            if (genres !== null) {
                const listGenres = genres.map(genre => genre.value);
                const genreSelectData = await GetGenreSelect(id);
                if (genreSelectData.length === 0) {
                    const responseGenres = await axios.post('http://localhost:8080/api/v1/publications_genre/' + id, listGenres)
                } else {
                    const del = await axios.delete('http://localhost:8080/api/v1/publications_genre/' + id, {});
                    const responseGenres = await axios.post('http://localhost:8080/api/v1/publications_genre/' + id, listGenres)
                }
            }
            if (covers !== null) {
                const listCovers = covers.map(cover => cover.value);
                const coverSelectData = await GetCoverSelect(id);
                if (coverSelectData.length === 0) {
                    const responseCovers = await axios.post('http://localhost:8080/api/v1/publications_cover/' + id, listCovers)
                } else {
                    const del = await axios.delete('http://localhost:8080/api/v1/publications_cover/' + id, {});
                    const responseCovers = await axios.post('http://localhost:8080/api/v1/publications_cover/' + id, listCovers)
                }
            }
            if (types !== null) {
                const listTypes = types.map(type => type.value);
                const typeSelectData = await GetTypeSelect(id);
                if (typeSelectData.length === 0) {
                    const responseTypes = await axios.post('http://localhost:8080/api/v1/publications_type/' + id, listTypes)
                } else {
                    const del = await axios.delete('http://localhost:8080/api/v1/publications_type/' + id, {});
                    const responseTypes = await axios.post('http://localhost:8080/api/v1/publications_type/' + id, listTypes)
                }
            }
            if (gifts !== null) {
                const listGifts = gifts.map(gift => gift.value);
                const giftSelectData = await GetGiftSelect(id);
                if (giftSelectData.length === 0) {
                    const responseGifts = await axios.post('http://localhost:8080/api/v1/publications_gift/' + id, listGifts)
                } else {
                    const del = await axios.delete('http://localhost:8080/api/v1/publications_gift/' + id, {});
                    const responseGifts = await axios.post('http://localhost:8080/api/v1/publications_gift/' + id, listGifts)
                }
            }
            
        } catch (error) {
            console.error('Error fetching publication:', error);
            return false;
        }
        fetchPublics();
    };
    const findPublic = async (name) => {
        if (name !== null && name !== '') {
            const token = "your_actual_access_token_value";
            const response = await axios.get("http://localhost:8080/api/v1/publications/search/" + name, {});
            setPublics(response.data.data)
        } else {
            const token = "your_actual_access_token_value";
            const response = await axios.get("http://localhost:8080/api/v1/publications/all", {});
            setPublics(response.data.data)
        }
    }
    useEffect(() => {
        fetchPublics()
    }, []);

    return { publics, fetchPublics, addPublics, updatePublics, findPublic }; // Trả về cả fetchGenres và addGenres
}
export default PublicData;