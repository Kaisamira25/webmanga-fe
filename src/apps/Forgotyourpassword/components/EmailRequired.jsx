import React from "react";
import Inputallpage from "../../../components/Inputall";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
function EmailRequired() {
    const passwordFields = [
       
        { placeholder: "Email", type: "Email", svg: <IconEmail /> },
      
        

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

export default EmailRequired;
