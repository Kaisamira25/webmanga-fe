import React from "react";
import HeaderAdmin from "./componnents/_Header-Admin";
import MenuAdmin from "./Menu_Admin";
import AdminGift from "./AdminGift";
import AdminDiscount from "./AdminDiscount";
import AdminCover from "./AdminCover";
import AdminGenre from "./AdminGenre";
import { Routes,Route } from "react-router-dom";
import AdminType from "./AdminType";




function HomeAdmin() {
    return (
        <div className="w-auto min-h-screen">
            <HeaderAdmin/>
            <div>
                <div className="flex">
                    <div className="w-2/12 "><MenuAdmin/></div>
                    <div className="ms-3 w-10/12">
                        <Routes>
                            <Route path="/AdminGenre" element={<AdminGenre/>}/>
                            <Route path="/AdminCover" element={<AdminCover/>}/>
                            <Route path="/AdminGift" element={<AdminGift/>}/>
                            <Route path="/AdminProduct" element={<AdminGenre/>}/>
                            <Route path="/AdminType" element={<AdminType/>}/>
                            <Route path="/AdminDiscount" element={<AdminDiscount/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;