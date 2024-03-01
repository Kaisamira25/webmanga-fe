import style from "./Body.module.scss";
import HotPublications from "./components/HotPublications";
function Body() {
  return (
    <div className={style.demo}>
      <HotPublications />
    </div>
  );
}

export default Body;
