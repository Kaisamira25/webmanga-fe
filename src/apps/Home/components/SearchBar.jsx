import style from "./SearchBar.module.scss";
import IconArrow from "../../../assets/icons/Arrow";
function SearchBar({ handleSearch }) {
  return (
    <div className={style.searchBarWrapper}>
      <span>Search</span>
      <input type="text" onChange={(e) => handleSearch(e)}/>
      <button>
        <IconArrow />
      </button>
    </div>
  );
}

export default SearchBar;
