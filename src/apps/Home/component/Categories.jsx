import CategoriesOption from "../../../components/CategoriesOption";
import styles from "../css/categories.module.css";
import ArrowDown from "../../../assets/icons/ArrowDown";
function Categories() {
  const categories = [
    { id: 1, genre: "Romcom" },
    { id: 2, genre: "Comendy" },
    { id: 3, genre: "Fantasy" },
    { id: 4, genre: "Isekai" },
    { id: 5, genre: "Manga - Comic" },
  ];
  return (
    <div>
      <p className="text-3xl font-semibold">Categories</p>
      <div className={`mt-3 h-10 flex rounded-full bg-green400 gap-5 px-8 py-1 ${styles.categories}`}>
        {categories.map((categories, index) => (
          <CategoriesOption genrePublications={categories.genre} />
        ))}
        <div className="flex">
          <button>
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
