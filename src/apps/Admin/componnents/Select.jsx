import React,{useState} from "react";
import {Select as SelectOne} from "react-tailwindcss-select";


 function _Select({options}) {
    const [props, setId] = useState([]);

    const handleChange = value => {
        console.log("value:", value);
        setId(value);
    };

    return (
        <SelectOne
            isSearchable
            value={props}
            onChange={handleChange}
            options={options}
        />
    );
}
export default _Select