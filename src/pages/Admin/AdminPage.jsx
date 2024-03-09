import React from "react";
import HeaderAdmin from "../../apps/Admin/componnents/_Header-Admin";
import MenuAdmin from "../../apps/Admin/Menu_Admin";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import AdminGenre from "../../apps/Admin/page/AdminGenre";
import AdminCover from "../../apps/Admin/page/AdminCover";

function HomeAdmin() {
    return (
        <div className="w-auto min-h-screen">
            <HeaderAdmin />
            <div>
                <div className="flex">
                    <div className="w-2/12 "><MenuAdmin /></div>
                    <div className="ms-3 w-10/12">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;