import { useEffect, useState } from "react";
import CoversStyle from "../scss/CoversManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createCover, fetchCover } from "../../../services/Service";
function CoversManager() {
  //   const [genreValueInput, setGenreValueInput] = useState("");
  const [coverName, setCoverName] = useState("");
  const [covers, setCovers] = useState([]);
  useEffect(() => {
    const fetchCoverData = async () => {
      const response = await fetchCover();
      console.log(response.data.data);
      setCovers(response.data.data);
    };
    fetchCoverData();
  }, []);
  const handleGetCoverName = (e) => {
    let coverName = e.target.value;
    coverName = coverName.trim();
    coverName = coverName.charAt(0).toUpperCase() + coverName.slice(1);
    setCoverName(coverName);
  };
  const handleCreateCover = async () => {
    const response = await createCover(coverName);
  };
  return (
    <div className={CoversStyle.coversWrapper}>
      <div className={CoversStyle.coversContainer}>
        <h4>Add new cover type</h4>
        <form>
          <div>
            <FormInput
              label={"Cover type"}
              placeholder={"Type new cover type here"}
              type={"text"}
              handleFunction={handleGetCoverName}
            />
            <div>
              <FormButton content={"Add"} handleFunction={handleCreateCover} />
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
            label={"Search"}
              type={"search"}
              placeholder={"Type the name of the genre to search"}
            />
            <div className={CoversStyle.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <td>Gift name</td>
                    <td>Function</td>
                  </tr>
                </thead>
                <tbody>
                  {covers.map((cover, index) => (
                    <tr key={index}>
                      <td>{cover.coverType}</td>
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

export default CoversManager;
