import GenresStyle from "../scss/GenresManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
function GenresManager() {
  return (
    <div className={GenresStyle.genresWrapper}>
      <div className={GenresStyle.genresContainer}>
        <h4>Add new genre</h4>
        <form>
          <div>
            <FormInput placeholder={"Type new genre here"} type={"text"}/>
            <div>
              <FormButton content={"Add"} />
              <FormButton content={"Update"} />
            </div>
          </div>
          <div>
            <p>
              !!! You need to enter the genre with the first letter capitalized,
              for example: Romcom or Isekai,etc.
            </p>
          </div>
          <div>
            <FormInput type={"search"} placeholder={"Type the name of the genre"}/>
            <div>
              <table>
                <thead>
                  <th>Genre name</th>
                </thead>
                <tbody>
                  <td>
                    à
                  </td>
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
