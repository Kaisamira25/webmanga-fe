import { useEffect, useState } from "react";
import style from "./Categories.module.scss";
import { fetchAllGenre } from "../../../services/Service";
function Categories({ onCategorySelect }) {
  const [listGenre, setListGenre] = useState([]);
  const [selectGenreId, setSelectGenreId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const fetchGenre = fetchAllGenre();
    fetchGenre.then((response) => {
      setListGenre(response.data.data);
    });
  }, []);

  const handleCategoryClick = (genreId) => {
    if (genreId == selectGenreId) {
      setSelectGenreId(null);
      onCategorySelect(null);
    } else {
      setSelectGenreId(genreId);
      onCategorySelect(genreId);
    }
  };
  const toggleCategories = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className={`${style.container} ${isExpanded ? style.expanded : style.collapsed}`} onClick={toggleCategories}>
      <div className={style.wrapper}>
        {listGenre.map((item, index) => (
          <button
            className={
              item.genreID === selectGenreId ? `${style.isSelected}` : ""
            }
            key={index}
            onClick={() => handleCategoryClick(item.genreID)}
          >
            {item.genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
