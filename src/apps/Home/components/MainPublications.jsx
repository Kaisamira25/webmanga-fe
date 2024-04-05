import { useEffect, useState } from "react";
import Categories from "./Categories";
import Content from "./Content";
import SearchBar from "./SearchBar";

import {
  fetchAllPublications,
  fetchPublicationContentPagingate,
  fetchPublictionsFromGenre,
} from "../../../services/Service";
function MainPublications() {
  const [pageCount, setPageCount] = useState(1);
  const [initalPageCount, setInitalPageCount] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  // const [publicationsList, setPublictionsList] = useState([]);
  const [publications, setPublications] = useState([]);
  const [forcePage, setForcePage] = useState(null);
  const handleSelectGenre = async (genreId) => {
    setSelectedGenre(genreId);
    if (genreId == null) {
      const response = await fetchPublicationContentPagingate(0);
      setPublications(response.data.data.content);
      setPageCount(initalPageCount);
      setForcePage(0);
    } else {
      setForcePage(0);
      // Bổ sung thêm api search sản phẩm bằng genre
      const fetchDataFromGenre = await fetchPublictionsFromGenre(genreId);
      // console.log(fetchDataFromGenre.data.data.publications.length);
      setPageCount(
        Math.ceil(fetchDataFromGenre.data.data.publications.length / 9)
      );
      const response = await fetchPublicationContentPagingate(0, genreId);
      // console.log(response.data.data.content);
      setPublications(response.data.data.content);
      // setPageCount(Math.ceil(response.data.data.content.length / 9));
    }
  };
  useEffect(() => {
    const fetchAllPublicationsToSetPageCount = async () => {
      const response = await fetchAllPublications();
      if (
        response &&
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        setPageCount(Math.ceil(response.data.data.length / 9));
        setInitalPageCount(Math.ceil(response.data.data.length / 9));
      } else {
        console.log("Error pagecount not an integer: ", response);
      }
    };
    fetchAllPublicationsToSetPageCount();
  }, []);
  useEffect(() => {
    const getPublicationsFirstPage = async () => {
      const response = await fetchPublicationContentPagingate(0);
      setPublications(response.data.data.content);
    };
    getPublicationsFirstPage();
  }, []);
  const handlePageChange = async (e) => {
    if (selectedGenre) {
      const fetchData = await fetchPublicationContentPagingate(
        e.selected,
        selectedGenre
      );
      setForcePage(null);
      setPublications(fetchData.data.data.content);
    } else {
      const fetchData = await fetchPublicationContentPagingate(
        e.selected,
        selectedGenre
      );
      setForcePage(null);
      setPublications(fetchData.data.data.content);
    }
  };
  return (
    <div>
      <Categories onCategorySelect={handleSelectGenre} />
      <SearchBar />
      <Content
        pageCount={pageCount}
        handlePageChange={handlePageChange}
        publications={publications}
        forcePage={forcePage}
      />
    </div>
  );
}

export default MainPublications;
