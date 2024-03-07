import style from "./Body.module.scss";
import Categories from "./components/Categories";
import Content from "./components/Content";
import HotPublications from "./components/HotPublications";
function Body() {
  return (
    <div>
      <HotPublications />
      <Categories />
      <Content />
    </div>
  );
}

export default Body;
