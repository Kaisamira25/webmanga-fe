import style from "./Categories.module.scss";
function Categories() {
  const genreList = [
    { id: 1, name: "Romcom" },
    { id: 2, name: "Fantasy" },
    { id: 3, name: "Action" },
    { id: 4, name: "Adventure" },
    { id: 5, name: "Comedy" },
    { id: 6, name: "Drama" },
    { id: 7, name: "Harem" },
    { id: 8, name: "Mystery" },
    { id: 9, name: "Psychological" },
    { id: 10, name: "Romance" },
    { id: 11, name: "Seinen" },
    { id: 12, name: "Shounen" },
    { id: 13, name: "Isekai" },
    { id: 14, name: "Slice of Life" },
    { id: 15, name: "Sci - Fi" },
    { id: 16, name: "Historical" },
    { id: 17, name: "Supernatural" },
    { id: 18, name: "Sports" },
    { id: 19, name: "Horror" },
  ];
  return (
    <div className={style.container}>
      {genreList.map((item) => 
        <button key={item.id}>{item.name}</button>
      )}
    </div>
  );
}

export default Categories;
