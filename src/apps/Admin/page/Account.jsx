import React from "react";
import SearchBar from "../componnents/SearchBar";
import TableAdmin from "../componnents/TableAdmin";
import InputAdmin from "../componnents/InputAdmin";
import MultiSelect from "../componnents/Multiple_Select";

function Account() {

    const TH = [
        { names: "Id" },
        { names: "Email" },
        { names: "Full Name" },
        { names: "Is_Verify" },
        { names: "Is_Block" },
        { names: "Creat_At" },
    ]
    const option=[
        {value:"1",label:"Lân"},
        {value:"2",label:"Lân2"},
        {value:"3",label:"Lân1"}
    ]
    const TD = [
        { id: 1, email: "lan@gmail.com", fullname: "Lâm Tự Lân", Is_Verify: false ? "Đã kích hoạt" : "Chưa kích hoạt", Is_Block: true ? "Hoạt Động" : "Không Hoạt Động", creatAt: "19/03/2003" }
    ]
    const AccountIP = [
        { type: "email", id: "email", name: "email", placeholder: "Email" },
        { type: "text", id: "fullname", name: "fullname", placeholder: "Fullname" },
        { type: "password", id: "password", name: "password", placeholder: "Password" },
    ]
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Account</h3>
                </div>
            </header>
            <div>
                <div>
                    {AccountIP.map((field, index) => (
                        <InputAdmin
                            key={index}
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <div className="w-3/12 py-2">
                        <MultiSelect options={option} placeholder="Role"/>
                    </div>

                </div>
                <button
                    type="button"
                    formMethod="POST"

                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Add
                </button>
                <button
                    type="button"
                    formMethod="PUT"
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Update
                </button>
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={TD} />
            </div>
        </div>
    )
}
export default Account