import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import ButtonInput from "../../../components/BtnInput";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailApi } from "../../../services/Service";

function EmailRequired() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async () => {
    try {
      const emailData = { email: email }; // Tạo đối tượng chứa dữ liệu email
      await sendEmailApi(emailData); // Gọi hàm API để gửi email
      navigate("/Otp", { state: { from: "/components/EmailRequired" } });
    } catch (error) {
      console.error("Failed to send email:", error);
      // Xử lý lỗi khi gửi email không thành công (ví dụ: hiển thị thông báo cho người dùng)
    }
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="Email"
        type="email"
        svg={<IconEmail />}
        value={email}
        onChange={handleEmailChange}
      />
      <div className="flex gap-4 ">
        <div className="flex-1 ml-2">
          <Link to={"/Login"}>
            <ButtonInput type={"button"} placeholder={"Cancel "} />
          </Link>
        </div>
        <div className="flex-1 mr-2">
          <ButtonInput
            type={"button"}
            placeholder={"Continue"}
            onClick={handleForgotPassword}
          />
        </div>
      </div>
    </div>
  );
}

export default EmailRequired;
