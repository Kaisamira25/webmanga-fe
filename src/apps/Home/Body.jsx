import style from "./Body.module.scss";
import Categories from "./components/Categories";
import Content from "./components/Content";
import HotPublications from "./components/HotPublications";
import NewPublications from "./components/NewPublications";
function Body() {
  return (
    <div>
      <NewPublications />
      <HotPublications />
      <Categories />
      <Content />
    </div>
  );
}

export default Body;
