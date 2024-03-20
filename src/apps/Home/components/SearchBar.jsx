import style from "./SearchBar.module.scss";
import IconArrow from "../../../assets/icons/Arrow";
function SearchBar() {
  return (
    <div className={style.searchBarWrapper}>
      <input type="text" />
      <button>
        <IconArrow />
      </button>
    </div>
  );
}

export default SearchBar;
