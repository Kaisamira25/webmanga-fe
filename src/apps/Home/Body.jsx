import { useState } from "react";
import style from "./Body.module.scss";
import Categories from "./components/Categories";
import Content from "./components/Content";
import HotPublications from "./components/HotPublications";
import NewPublications from "./components/NewPublications";
function Body() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div>
      <NewPublications />
      <HotPublications />
      <Categories onCategorySelect={handleCategorySelect} />
      <Content categoryId={selectedCategoryId} />
    </div>
  );
}

export default Body;
