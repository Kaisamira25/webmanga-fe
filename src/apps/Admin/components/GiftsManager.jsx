import { useEffect, useState } from "react";
import GiftsStyle from "../scss/GiftsManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createGift, fetchGift } from "../../../services/Service";
function GiftsManager() {
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
    <div className={GiftsStyle.giftsWrapper}>
      <div className={GiftsStyle.giftsContainer}>
        <h4>Add new gifts</h4>
        <form>
          <div>
            <FormInput
              placeholder={"Type new gift name here"}
              type={"text"}
              handleFunction={handleGetGiftName}
            />
            <FormInput
              placeholder={"Type new gift type here"}
              type={"text"}
              handleFunction={handleGetGiftType}
            />
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
            <div className={GiftsStyle.tableWrapper}>
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

export default GiftsManager;
