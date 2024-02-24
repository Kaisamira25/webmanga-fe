import React from "react";
import Passwordinputall from "../../../components/Passwordinput";

function Passwordrequired() {
    const passwordFields = [
        { placeholder: "repeat password", type: "password" },
        { placeholder: "password", type: "password" }
    ];
    return (
        <div className="flex justify-between">
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