import React from "react";
import Passwordinputall from "../../../components/Passwordinput";
import TablerPassword from "../../../assets/icons/TablerPassword"
function Passwordrequired() {
    const passwordFields = [
        { placeholder: "repeat password", type: "password" },
        { placeholder: "password", type: "password" }
    ];
    return (
        <div className="grid grid-cols-1 md:flex md:flex-col w-auto">
            {passwordFields.map((field, index) => (
                
                <Passwordinputall
                    key={index}
                    placeholder={field.placeholder}
                    type={field.type}
                />
               
            ))}
            
        </div>
    );
}

export default Passwordrequired;
