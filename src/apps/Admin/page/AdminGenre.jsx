import * as React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import SearchBar from "../componnents/SearchBar";
import { Outlet } from "react-router";

function AdminGenre() {
    const genre = [{ type: "text", names: "genre", id: "genre", placeholder: "Tên thể loại" }]
    const TH = [{ names: "Id" },
    { names: "Tên thể loại" }
    ]
    const TD = [{ id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" }
    ]
    const buttons = [{ action: "/api/v1/genre", method: "POST", names: "Thêm" },
    { action: "api/v1/genre/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/genre/{id}", method: "DELETE", names: "Xoá" }
    ]
    return (
        <Outlet>
            <div className="h-screen pt-12">
                <header className="mt-4">
                    <div className="text-black text-start">
                        <h3 className="font-bold">Quản lý thể loại</h3>
                    </div>
                </header>
                <div>
                    <div>
                        {genre.map((field, index) => (
                            <InputAdmin
                                key={index}
                                type={field.type}
                                name={field.names}
                                id={field.id}
                                placeholder={field.placeholder}
                            />
                        ))}
                    </div>
                    {buttons.map((button, index) => (
                        <BtnAdmin key={index} method={button.method} names={button.names} />
                    ))}
                    <SearchBar />
                    <TableAdmin arraysTH={TH} arraysTD={TD} />
                </div>
            </div>
        </Outlet>
    )
}
export default AdminGenre