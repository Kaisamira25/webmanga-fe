import { useEffect, useState } from "react";
import PublicationsStyle from "../scss/PublicationsManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createGift, fetchGift } from "../../../services/Service";
function PublicationsManager() {
  //   const [genreValueInput, setGenreValueInput] = useState("");
  const [giftName, setGiftName] = useState("");
  const [giftType, setGiftType] = useState("");
  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    const fetchGenreData = async () => {
      const response = await fetchGift();
      setGifts(response.data.data);
    };
    fetchGenreData();
  }, []);
  const handleGetGiftName = (e) => {
    let giftName = e.target.value;
    giftName = giftName.trim();
    giftName = giftName.charAt(0).toUpperCase() + giftName.slice(1);
    setGiftName(giftName);
  };
  const handleGetGiftType = (e) => {
    let giftType = e.target.value;
    giftType = giftType.trim();
    giftType = giftType.charAt(0).toUpperCase() + giftType.slice(1);
    setGiftType(giftType);
  };
  const handleCreateGift = async () => {
    const response = await createGift(giftName, giftType);
    console.log(response.data.data);
  };
  return (
    <div className={PublicationsStyle.publicationsWrapper}>
      <div className={PublicationsStyle.publicationsContainer}>
        <h4>Add new publications</h4>
        <form>
          <div>
            <div className={PublicationsStyle.inputContainer}>
              <FormInput
                placeholder={"Type title here"}
                type={"text"}
                handleFunction={handleGetGiftName}
              />
              <FormInput
                placeholder={"Type price to display for the user here"}
                type={"text"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Stock"}
                type={"text"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Author of the publications"}
                type={"text"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Publisher"}
                type={"text"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Release date"}
                type={"text"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Arrival date"}
                type={"date"}
                handleFunction={handleGetGiftType}
              />
              <FormInput
                placeholder={"Release date"}
                type={"file"}
                handleFunction={handleGetGiftType}
              />
            </div>
            <textarea />
            <div className={PublicationsStyle.dropdown}>
              
            </div>
            <div>
              <FormButton content={"Add"} handleFunction={handleCreateGift} />
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
            <div className={PublicationsStyle.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <td>Gift name</td>
                    <td>Gift type</td>
                    <td>Function</td>
                  </tr>
                </thead>
                <tbody>
                  {gifts.map((gift, index) => (
                    <tr key={index}>
                      <td>{gift.promotionalGiftName}</td>
                      <td>{gift.promotionalGiftType}</td>
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

export default PublicationsManager;
