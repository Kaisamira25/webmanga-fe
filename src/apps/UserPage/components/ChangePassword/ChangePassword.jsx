import React, { useState, useEffect } from "react";
import InputUser from "../InputUser/InputUser";
import Toast from "../ToastMessage/Toast";
import { fetchChangePassword } from "../../../../services/Service";

function ChangePassword() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(["", "", ""]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const changePassword = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (!validatePassword(password, newPassword, confirmPassword)) {
        setToastMessage("Change Password Fail!");
        setToastType("error");
        setShowToast(true);
        return;
      }
      try {
        const response = await fetchChangePassword(
          password,
          newPassword,
          confirmPassword
        );
        if (response.data.status === "fail") {
          setToastMessage("Change Password Fail!");
          setToastType("error");
          setShowToast(true);
          return;
        } else {
          setToastMessage("Change Password Success!");
          setToastType("success");
          setShowToast(true);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        setToastMessage("Change Password Fail!");
        setToastType("error");
        setShowToast(true);
      }
    } else {
      console.log("User is not logged in!");
    }
  };

  const validatePassword = async (password, newPassword, confirmPassword) => {
    let valid = true;
    const errors = ["", "", ""];

    try {
      const response = await fetchChangePassword(
        password,
        newPassword,
        confirmPassword
      );
      if (response.data.data.status === "fail") {
        errors[0] = "Wrong old password!";
        valid = false;
      }
    } catch (error) {
      errors[0] = "An error occurred while checking old passwords!";
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      errors[1] = "New password does not match!";
      errors[2] = "Re-entered password does not match!";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const fields = [
    {
      label: "Old Password *",
      type: "old-password",
      placeholder: "Enter Old Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      error: errors[0],
    },
    {
      label: "New Password *",
      type: "new-password",
      placeholder: "Enter New Password",
      value: newPassword,
      onChange: (e) => setNewPassword(e.target.value),
      error: errors[1],
    },
    {
      label: "Confirm Password *",
      type: "current-password",
      placeholder: "Confirm Password",
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
      error: errors[2],
    },
  ];

  return (
    <div>
      <InputUser
        title="Change Password"
        fields={fields}
        onSubmit={changePassword}
        errors={errors}
      />
      <Toast
        message={toastMessage}
        type={toastType}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
}

export default ChangePassword;
