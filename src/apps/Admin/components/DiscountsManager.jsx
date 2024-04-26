import { useEffect, useState } from "react";
import DiscountsStyle from "../scss/DiscountsManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createDiscount, fetchDiscount } from "../../../services/Service";
function DiscountsManager() {
  //   const [genreValueInput, setGenreValueInput] = useState("");
  const [coverName, setCoverName] = useState("");
  const [discounts, setDiscounts] = useState([]);
  const [discoutName, setDiscountName] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountExpirationDate, setDiscountExpirationDate] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const fetchDiscountData = async () => {
      const response = await fetchDiscount();
      console.log(response.data.data);
      setDiscounts(response.data.data);
    };
    fetchDiscountData();
  }, []);
  const handleGetDiscountName = (e) => {
    let discountName = e.target.value;
    discountName = discountName.trim();
    discountName = discountName.charAt(0).toUpperCase() + discountName.slice(1);
    setDiscountName(discountName);
  };
  const handleGetDiscountPercent = (e) => {
    let discountPercent = e.target.value;
    discountPercent = discountPercent.trim();
    discountPercent =
      discountPercent.charAt(0).toUpperCase() + discountPercent.slice(1);
    setDiscountPercent(discountPercent);
  };
  const handleGetDiscountCode = (e) => {
    let discountCode = e.target.value;
    discountCode = discountCode.trim();
    discountCode = discountCode.charAt(0).toUpperCase() + discountCode.slice(1);
    setDiscountCode(discountCode);
  };
  const handleGetDiscountExpirationDate = (e) => {
    let discountExpirationDate = e.target.value;
    discountExpirationDate = discountExpirationDate.trim();
    discountExpirationDate =
      discountExpirationDate.charAt(0).toUpperCase() +
      discountExpirationDate.slice(1);
    setDiscountExpirationDate(discountExpirationDate);
  };
  const handleGetDiscountDescription = (e) => {
    let discountDescription = e.target.value;
    discountDescription = discountDescription.trim();
    discountDescription =
      discountDescription.charAt(0).toUpperCase() +
      discountDescription.slice(1);
    setDescription(discountDescription);
  };
  console.log(
    discoutName,
    discountPercent,
    discountCode,
    discountExpirationDate,
    description
  );
  const handleCreateDiscount = async () => {
    const response = await createDiscount(
      discoutName,
      discountPercent,
      discountCode,
      discountExpirationDate,
      description
    );
    console.log(response.data);
  };
  return (
    <div className={DiscountsStyle.discountsWrapper}>
      <div className={DiscountsStyle.discountsContainer}>
        <h4>Add new discount</h4>
        <form>
          <div>
            <div>
              <FormInput
                label={"Discount name"}
                placeholder={"Type new discount name here"}
                type={"text"}
                handleFunction={handleGetDiscountName}
              />
              <FormInput
                label={"Discount percent"}
                placeholder={"Discount percent"}
                type={"text"}
                handleFunction={handleGetDiscountPercent}
              />
              <FormInput
                label={"Discount code"}
                placeholder={"Discount code"}
                type={"text"}
                handleFunction={handleGetDiscountCode}
              />
              <FormInput
                label={"Expiration date"}
                placeholder={"Discount expiration date"}
                type={"date"}
                handleFunction={handleGetDiscountExpirationDate}
              />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea
                onChange={(e) => handleGetDiscountDescription(e)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <FormButton
                content={"Add"}
                handleFunction={handleCreateDiscount}
              />
              <FormButton content={"Update"} />
              <FormButton content={"Delete"} />
            </div>
          </div>
          <div>
            <p>
              Note: You need to enter the discount percent like this
              "100%","50%"
            </p>
          </div>
          <div>
            <FormInput
              type={"search"}
              placeholder={"Type the name of the discount to search"}
            />
            <div className={DiscountsStyle.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <td>Discount name</td>
                    <td>Discount percent</td>
                    <td>Active</td>
                    <td>Code</td>
                    <td>Create date</td>
                    <td>Expiration date</td>
                  </tr>
                </thead>
                <tbody>
                  {discounts.map((discount, index) => (
                    <tr key={index}>
                      <td>{discount.discountName}</td>
                      <td>{discount.discountPercent}</td>
                      <td>{discount.active == true ? "Yes" : "No"}</td>
                      <td>{discount.discountCode}</td>
                      <td>{discount.createdAt}</td>
                      <td>{discount.expirationDate}</td>
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

export default DiscountsManager;
