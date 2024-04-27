import React from "react";
import HeaderAdmin from "../../apps/Admin/componnents/_Header-Admin";
import MenuAdmin from "../../apps/Admin/page/Sidebar";
import { useLocation } from "react-router-dom";
import Genre from "../../apps/Admin/page/GenreManager";
import AdminCover from "../../apps/Admin/page/CoverManager";
import AdminDiscount from "../../apps/Admin/page/DiscountManager";
import AdminGift from "../../apps/Admin/page/GiftManager";
import AdminProduct from "../../apps/Admin/page/PublicationsManager";
import AdminType from "../../apps/Admin/page/TypeManager";
import Reveneu from "../../apps/Admin/page/Reveneu";
import Invoice from "../../apps/Admin/page/InvoiceManager";
import Account from "../../apps/Admin/page/EmployeeManager";

function HomeAdmin() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="w-auto ">
            <HeaderAdmin />
            <div>
                <div className="flex">
                    <div className="w-2/12"><MenuAdmin /></div>
                    <div className="ms-3 w-10/12 ">
                        {currentPath === "/admin" && <Genre />}
                        {currentPath === "/admin/genre" && <Genre />}
                        {currentPath === "/admin/gift" && <AdminGift/>}
                        {currentPath === "/admin/discount" && <AdminDiscount />}
                        {currentPath === "/admin/cover" && <AdminCover />}
                        {currentPath === "/admin/product" && <AdminProduct />}
                        {currentPath === "/admin/type" && <AdminType />}
                        {currentPath === "/admin/order" && <Invoice/> }
                        {currentPath === "/admin/account" && <Account/>}
                        {currentPath === "/admin/sales" && <Reveneu />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAdmin;