import { useEffect, useState } from "react";
import TypeStyle from "../scss/TypesManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createType, fetchType } from "../../../services/Service";
function TypesManager() {
  const [typesValueInput, setTypesValueInput] = useState("");
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchTypesData = async () => {
      const response = await fetchType();
      setTypes(response.data.data);
    };
    fetchTypesData();
  }, [types]);
  const handleGetTypes = (e) => {
    let typeValue = e.target.value;
    typeValue = typeValue.trim();
    typeValue = typeValue.charAt(0).toUpperCase() + typeValue.slice(1);
    setTypesValueInput(typeValue);
  };
  const handleCreateType = async () => {
    const response = await createType(typesValueInput);
  };
  return (
    <div className={TypeStyle.typesWrapper}>
      <div className={TypeStyle.typesContainer}>
        <h4>Add new type</h4>
        <form>
          <div>
            <FormInput
              label={"Type name"}
              placeholder={"Type new type here"}
              type={"text"}
              handleFunction={handleGetTypes}
            />
            <div>
              <FormButton content={"Add"} handleFunction={handleCreateType} />
              <FormButton content={"Update"} />
            </div>
          </div>
          <div>
            <p>
              Note: You need to enter the type with the first letter
              capitalized, for example: Special or Regular.
            </p>
          </div>
          <div>
            <FormInput
            label={"Search"}
              type={"search"}
              placeholder={"Type the name of the genre to search"}
            />
            <div className={TypeStyle.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <td>Genre name</td>
                    <td>Function</td>
                  </tr>
                </thead>
                <tbody>
                  {types.map((type, index) => (
                    <tr key={index}>
                      <td>{type.typeName}</td>
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
export default TypesManager;
