import React from 'react';

function Passwordinputall({ type, id, password, placeholder }) {
    return (
        <div className="mb-4 relative">
            <input
                type={type}
                id={id}
                name={password}
                className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50 pl-10"
                placeholder={placeholder}
                
            />
        </div>
    );
}
export default Passwordinputall;