import React from "react";
import Inputallpage from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import IconUser from "../../../assets/icons/MaterialIconUser";
function ResgisterFormRequired() {
    const passwordFields = [
        { placeholder: "UserName", type: "text", svg: <IconUser /> },
        { placeholder: "Email", type: "Email", svg: <IconEmail /> },
        { placeholder: "password", type: "password", svg: <IconPassword /> },
        { placeholder: "repeat password", type: "password", svg: <IconRepeat /> },

    ];

    return (
        <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
            {passwordFields.map((field, index) => (
                <Inputallpage
                    key={index}
                    placeholder={field.placeholder}
                    type={field.type}
                    svg={field.svg}
                />

            ))}

        </div>
    );
}

export default ResgisterFormRequired;
