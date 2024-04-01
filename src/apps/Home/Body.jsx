import { useState } from "react";
import style from "./Body.module.scss";
import HotPublications from "./components/HotPublications";
import NewPublications from "./components/NewPublications";
import MainPublications from "./components/MainPublications";
function Body() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div>
      <NewPublications />
      <HotPublications />
      <MainPublications />
    </div>
  );
}

export default Body;
