import React from 'react';

function EmailotP({ value, onChange,placeholder }) {
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 6) {     
            onChange(inputValue);
        }
    };
    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            maxLength={6} 
            className="p-3 text-lg border rounded-md"
            placeholder={placeholder}
        />
    );
}

export default EmailotP;
