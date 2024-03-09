import React from "react";
import HeaderAdmin from "../../apps/Admin/componnents/_Header-Admin";
import MenuAdmin from "../../apps/Admin/page/Menu_Admin";
import { useLocation } from "react-router-dom";
import Genre from "../../apps/Admin/page/Genre";
import AdminCover from "../../apps/Admin/page/AdminCover";

function HomeAdmin() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="w-auto min-h-screen">
            <HeaderAdmin />
            <div>
                <div className="flex">
                    <div className="w-2/12 "><MenuAdmin /></div>
                    <div className="ms-3 w-10/12">
                        {currentPath === "/Admin" || currentPath === "/Admin/Genre" && <Genre />}
                        {currentPath === "/Admin/Cover" && <AdminCover />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;