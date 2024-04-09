import { useState } from "react";
import style from "./Body.module.scss";
import MainPublications from "./components/MainPublications";
// import AboveContent from "./components/";
function Body() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div>
      {/* <AboveContent /> */}
      <MainPublications />
    </div>
  );
}

export default Body;
