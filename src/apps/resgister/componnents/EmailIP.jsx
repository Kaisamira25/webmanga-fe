import React from "react";

function EmailIP() {
    return (
        <div className="mb-4 shadow-md">
            <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50"
                placeholder="Email"/>
        </div>
    );
}

export default EmailIP;