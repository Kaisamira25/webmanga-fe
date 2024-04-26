import { useEffect, useState } from "react";
import EmployeeStyle from "../scss/EmployeeManager.module.scss";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { createDiscount, fetchDiscount } from "../../../services/Service";
function EmployeesManager() {
  const [employees, setEmployees] = useState([]);
  return (
    <div className={EmployeeStyle.employeeWrapper}>
      <div className={EmployeeStyle.employeeContainer}>
        <h4>Add new employee</h4>
        <form>
          <FormInput placeholder={"Account"} label={"Account"} />
          <FormInput placeholder={"Employee name"} label={"Employee name"} />
          <FormInput placeholder={"Password"} label={"Password"} />
          <FormInput placeholder={"Phone number"} label={"Phone number"} />
          <FormInput placeholder={"Address"} label={"Address"} />
          <div>
            <FormButton content={"Create account"} />
            <FormButton content={"Update account"} />
            <FormButton content={"Delete account"} />
          </div>
        </form>
        <div className={EmployeeStyle.tableWrapper}>
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

export default EmployeesManager;
