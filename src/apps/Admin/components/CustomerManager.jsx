import { useEffect, useState } from "react";
import CustomerStyle from "../scss/CustomerManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createDiscount, fetchDiscount } from "../../../services/Service";
function CustomerManager() {
  const [employees, setEmployees] = useState([]);
  return (
    <div className={CustomerStyle.customerWrapper}>
      <div className={CustomerStyle.customerContainer}>
        <h4>Manager customer</h4>
        <form>
          <FormInput placeholder={"Email"} label={"Account"} disable={true} />
          <FormInput
            placeholder={"Fullname"}
            label={"Fullname"}
            disable={true}
          />
          <FormInput
            placeholder={"Phone number"}
            label={"Phone number"}
            disable={true}
          />
          <FormInput placeholder={"Address"} label={"Address"} disable={true} />
          <div className={CustomerStyle.radioStyle}>
            <label htmlFor="">Block account</label>
            <div>
              <input type="radio" id="choice1" name="choice" value="1" />
              <label for="choice1">Block</label>
            </div>
            <div>
              <input type="radio" id="choice2" name="choice" value="2" />
              <label for="choice2">Not block</label>
            </div>
          </div>
          <div>
            {/* <FormButton content={"Create account"} /> */}
            <FormButton content={"Update account"} />
            {/* <FormButton content={"Delete account"} /> */}
          </div>
        </form>
        <div className={CustomerStyle.tableWrapper}>
          <FormInput label={"Search employee"} type={"search"} />
          <table>
            <thead>
              <tr>
                <td>Employee name</td>
                <td>Phone number</td>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              {/* {employees.map((employee, index) => ( */}
              <tr>
                <td>f</td>
                <td>f</td>
                <td>e</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerManager;
