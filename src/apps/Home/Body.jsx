import { useState } from "react";
import style from "./Body.module.scss";
import Categories from "./components/Categories";
import Content from "./components/Content";
import HotPublications from "./components/HotPublications";
import NewPublications from "./components/NewPublications";
import SearchBar from "./components/SearchBar";
function Body() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div>
      <Categories />
      <SearchBar />
      <NewPublications />
      <HotPublications />
      <Content />
    </div>
  );
}

export default Body;
