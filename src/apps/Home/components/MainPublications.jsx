import { useState } from "react";
import Categories from "./Categories";
import Content from "./Content";
import SearchBar from "./SearchBar";
import { fetchPublicationContentPagingate } from "../../../services/Service";
function MainPublications() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const handleSelectGenre = async (genreId) => {
    setSelectedGenre(genreId);
    const fetchPublicationsByGenreId = await fetchPublicationContentPagingate(
        0,
        genreId
        );
        console.log(fetchPublicationsByGenreId.data);
  };

  return (
    <div>
      <Categories onCategorySelect={handleSelectGenre} />
      <SearchBar />
      <Content />
    </div>
  );
}

export default MainPublications;
