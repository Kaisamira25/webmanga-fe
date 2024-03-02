import React from "react";
import { Routes, Route, Link } from "react-router-dom";




export function Li(link, name) {
    return (
        <div>
            <li className="py-2">
                <Link className="gap-2 ms-6 mb-2 text-black hover:text-blue-800" to={link}>
                    <i className="bi bi-inboxes"></i>
                    <span>{name}</span>
                </Link>
            </li>
        </div>
    )
}
export default Li