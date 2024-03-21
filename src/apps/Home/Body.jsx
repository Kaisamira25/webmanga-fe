import style from "./Body.module.scss";
import Categories from "./components/Categories";
import Content from "./components/Content";
import HotPublications from "./components/HotPublications";
import NewPublications from "./components/NewPublications";
import SearchBar from "./components/SearchBar";
function Body() {
  return (
    <div>
      <Categories />
      <SearchBar />
      <Content />
      <NewPublications />
      <HotPublications />
    </div>
  );
}

export default Body;
