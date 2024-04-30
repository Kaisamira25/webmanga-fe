import React, { useState, useEffect } from "react";
import EmployeeStyle from "../scss/EmployeeManager.module.scss";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import {
  fetchAllEmployees,
  fetchEmployeesWithAccountName,
  fetchCreateEmployees,
  fetchUpdateEmployees,
  fetchDeleteEmployees,
} from "../../../services/Service";

function EmployeesManager() {
  const [employees, setEmployees] = useState([]);
  const [accountName, setAccountName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isBlocked, setBlocked] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [accountError, setAccountError] = useState(false);
  const [employeesError, setEmployeesError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [errors, setErrors] = useState({
    accountName: false,
    fullName: false,
    password: false,
    phone: false,
    address: false,
  });
  function validatePhoneNumber(phone) {
    // kiểm tra xem phone có đúng 10 số
    return /^\d{10}$/.test(phone);
  }
  function validatePassword(password) {
    // Kiểm tra mật khẩu  dài ít nhất 8 kí tự gồm cả chữ  số
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  }
  useEffect(() => {
    const fetchEmployeeData = async () => {
      const response = await fetchAllEmployees();
      console.log(response.data.data);
      setEmployees(response.data.data);
    };
    fetchEmployeeData();
  }, []);

  const handleRadioChange = (e) => {
    setBlocked(e.target.value === "1");
  };

  const handleRowClick = (employee) => {
    console.log(employee);
    setSelectedEmployee(employee);
    setAccountName(employee.accountName);
    setFullName(employee.fullName);
    setPhone(employee.phone);
    setAddress(employee.address);
    setBlocked(employee.isBlocked);
  };

  const refreshEmployeeData = async () => {
    const response = await fetchAllEmployees();
    setEmployees(response.data.data);
  };

  const handleCreateEmployee = async (event) => {
    event.preventDefault();
    if (!accountName.trim()) {
      setAccountError(true);
      return;
    }
    if (!fullName.trim()) {
      setEmployeesError(true);
      return;
    }
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    if (!phone.trim()) {
      setPhoneError(true);
      return;
    }
    if (!address.trim()) {
      setAddressError(true);
      return;
    }
    const isPasswordValid = validatePassword(password); // Kiểm tra mật khẩu
    const isPhoneNumberValid = validatePhoneNumber(phone);
    setErrors({
      password: !isPasswordValid,
      phone: !isPhoneNumberValid,
    });
    if (!isPasswordValid) {
      setMessage("Password is not in correct format.");
      setIsSuccess(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    if (!isPhoneNumberValid) {
      setMessage("phone number is incorrect.");
      setIsSuccess(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    const employeeData = {
      accountName,
      fullName,
      password,
      phone,
      address,
      isBlocked: false,
    };

    try {
      const response = await fetchCreateEmployees(employeeData);
      if (response.status === 200) {
        console.log("Employee created successfully");
        setMessage("Employee created successfully");
        setIsSuccess(true);
        refreshEmployeeData();
        setTimeout(() => {
          setMessage("");
        }, 1000);
      } else {
        console.log("Failed to create employee");
        setMessage("Failed to create employee");
        setIsSuccess(false);
        setTimeout(() => {
          setMessage("");
        }, 1000);
      }
    } catch (error) {
      console.log("An error occurred while creating the employee:", error);
      setMessage("An error occurred while creating the employee");
      setIsSuccess(false);
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  };

  const handleUpdateEmployee = async (event) => {
    event.preventDefault();
    if (typeof selectedEmployee === "undefined" || selectedEmployee === null) {
      console.log("No employee selected for update");
    } else {
      try {
        const response = await fetchUpdateEmployees({
          accountName: selectedEmployee.accountName,
          fullName,
          phone,
          address,
          isBlocked,
        });
        if (response.status === 200) {
          console.log("Employee updated successfully");
          setMessage("Employee updated successfully");
          setIsSuccess(true);
          refreshEmployeeData();
          setTimeout(() => {
            setMessage("");
          }, 1000);
        } else {
          console.log("Failed to update employee");
          setMessage("Failed to update employee");
          setIsSuccess(false);
          setTimeout(() => {
            setMessage("");
          }, 1000);
        }
      } catch (error) {
        console.log("An error occurred while updating the employee:", error);
        setMessage("An error occurred while updating the employee");
        setIsSuccess(false);
        setTimeout(() => {
          setMessage("");
        }, 1000);
      }
    }
  };

  const handleDeleteEmployee = async (event) => {
    event.preventDefault();
    if (selectedEmployee) {
      const response = await fetchDeleteEmployees(selectedEmployee.accountName);
      if (response.status === 200) {
        console.log("Employee deleted successfully");
        setMessage("Employee deleted successfully");
        setIsSuccess(true);
        refreshEmployeeData();
        setTimeout(() => {
          setMessage("");
        }, 1000);
      } else {
        console.log("Failed to delete employee");
        setMessage("Failed to delete employee");
        setIsSuccess(false);
        setTimeout(() => {
          setMessage("");
        }, 1000);
      }
    } else {
      console.log("No employee selected for delete");
    }
  };

  const handleResetEmployee = async (event) => {
    event.preventDefault();
    setAccountName("");
    setFullName("");
    setPassword("");
    setPhone("");
    setAddress("");
    setBlocked(false);
    setSelectedEmployee(null);
  };

  const handleSearchEmployee = async (searchQuery) => {
    if (searchQuery.trim() === "") {
      fetchAllEmployees();
      return;
    }

    const response = await fetchEmployeesWithAccountName(searchQuery);
    if (response.status === 200) {
      setEmployees(response.data.data);
    } else {
      console.log("Failed to fetch employees with account name: ", searchQuery);
    }
  };

  return (
    <div className={EmployeeStyle.employeeWrapper}>
      <div className={EmployeeStyle.employeeContainer}>
        <h4>Add new employee</h4>
        <form>
          <FormInput
            placeholder={"Account"}
            label={"Account"}
            value={accountName}
            onChange={(e) => {
              setAccountName(e.target.value);
              setAccountError(false); // Reset error when input changes
            }}
            validate={{ error: accountError && "Account cannot be empty" }}
          />
          <FormInput
            placeholder={"Full name"}
            label={"Employee name"}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setEmployeesError(false); // Reset error when input changes
            }}
            validate={{
              error: employeesError && "Employee name cannot be empty",
            }}
          />
          <FormInput
            placeholder={"Password"}
            label={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            validate={{ error: passwordError && "Password cannot be empty" }}
            error={errors.password}
          />
          <FormInput
            placeholder={"Phone number"}
            label={"Phone number"}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPasswordError(false);
            }}
            validate={{ error: phoneError && "Phone number cannot be empty" }}
            error={errors.phone}
          />
          <FormInput
            placeholder={"Address"}
            label={"Address"}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError(false);
            }}
            validate={{ error: addressError && "Address cannot be empty" }}
          />
          <div className={EmployeeStyle.radioStyle}>
            <label htmlFor="">Block account</label>
            <div>
              <input
                type="radio"
                id="choice1"
                name="choice"
                value="1"
                checked={isBlocked}
                onChange={handleRadioChange}
              />
              <label htmlFor="choice1">Block</label>
            </div>
            <div>
              <input
                type="radio"
                id="choice2"
                name="choice"
                value="2"
                checked={!isBlocked}
                onChange={handleRadioChange}
              />
              <label htmlFor="choice2">Not block</label>
            </div>
          </div>
          <div>
            <FormButton
              content={"Create"}
              onClick={(event) => handleCreateEmployee(event)}
            />
            <FormButton
              content={"Update"}
              onClick={(event) => handleUpdateEmployee(event)}
            />
            <FormButton
              content={"Delete"}
              onClick={(event) => handleDeleteEmployee(event)}
            />
            <FormButton
              content={"Reset"}
              onClick={(event) => handleResetEmployee(event)}
            />
          </div>
        </form>
        <div className={EmployeeStyle.tableWrapper}>
          <FormInput
            label={"Search employee"}
            type={"search"}
            onChange={(e) => handleSearchEmployee(e.target.value)}
          />

          {message && (
            <div className={EmployeeStyle.messageWrapper}>
              <div style={{ color: isSuccess ? "green" : "red" }}>
                {message}
              </div>
            </div>
          )}
          <table>
            <thead>
              <tr>
                <td>Account</td>
                <td>Employee name</td>
                <td>Phone number</td>
                <td>Address</td>
                <td>Role</td>
                <td>Blocked</td>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} onClick={() => handleRowClick(employee)}>
                  <td>{employee.accountName}</td>
                  <td>{employee.fullName}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.address}</td>
                  <td>{employee.roleName}</td>
                  <td>{employee.isBlocked ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeesManager;
