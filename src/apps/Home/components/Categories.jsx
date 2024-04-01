import { useEffect, useState } from "react";
import style from "./Categories.module.scss";
import { fetchAllGenre } from "../../../services/Service";
function Categories({ onCategorySelect }) {
  const [listGenre, setListGenre] = useState([]);
  useEffect(() => {
    const fetchGenre = fetchAllGenre();
    fetchGenre.then((response) => {
      setListGenre(response.data.data);
    });
  }, []);

  const handleCategoryClick = (genreId) => {
    onCategorySelect(genreId);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {listGenre.map((item, index) => (
          <button key={index} onClick={() => handleCategoryClick(item.genreID)}>{item.genre}</button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
