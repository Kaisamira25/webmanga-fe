import { useEffect, useState } from "react";
import GenresStyle from "../scss/GenresManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createGenre, fetchGenre } from "../../../services/Service";
function GenresManager() {
  const [genreValueInput, setGenreValueInput] = useState("");
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchGenreData = async () => {
      const response = await fetchGenre();
      setGenre(response.data.data);
    };
    fetchGenreData();
  }, []);
  const handleGetGenre = (e) => {
    let genreValue = e.target.value;
    genreValue = genreValue.trim();
    genreValue = genreValue.charAt(0).toUpperCase() + genreValue.slice(1);
    setGenreValueInput(genreValue);
  };
  const handleCreateGenre = async () => {
    const response = await createGenre(genreValueInput);
  };
  return (
    <div className={GenresStyle.genresWrapper}>
      <div className={GenresStyle.genresContainer}>
        <h4>Add new genre</h4>
        <form>
          <div>
            <FormInput
              placeholder={"Type new genre here"}
              type={"text"}
              handleFunction={handleGetGenre}
            />
            <div>
              <FormButton content={"Add"} handleFunction={handleCreateGenre} />
              <FormButton content={"Update"} />
            </div>
          </div>
          <div>
            <p>
              Note: You need to enter the genre with the first letter
              capitalized, for example: Romcom or Isekai,etc.
            </p>
          </div>
          <div>
            <FormInput
              type={"search"}
              placeholder={"Type the name of the genre to search"}
            />
            <div className={GenresStyle.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <td>Genre name</td>
                    <td>Function</td>
                  </tr>
                </thead>
                <tbody>
                  {genre.map((genre, index) => (
                    <tr key={index}>
                      <td>{genre.genre}</td>
                      <td>
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GenresManager;
