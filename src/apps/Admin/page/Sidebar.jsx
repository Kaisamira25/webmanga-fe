import React from "react";
import SideBar from "../components/SideBar-Ul";
function MenuAdmin() {
  return (
    <div className="border-r-2 h-full border-black border-b-2">
      <div className="bg-body-tertiary" id="sidebarMenu">
        <div className="header">
          <h5
            className="title text-center font-bold py-2"
            id="sidebarMenuLabel"
          >
            LAINOVO
          </h5>
        </div>
        <div className="body p-2 pt-lg-3 mb-1 ">
          <SideBar />
          <ul className="nav  mb-2 ms-1 relative mt-32">
            <li className="nav-item py-2">
              <a
                className="nav-link gap-2 py-2 hover:text-blue-400"
                href="/home"
              >
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link gap-2 py-2 hover:text-blue-400"
                href="/home"
              >
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
