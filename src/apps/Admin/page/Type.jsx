import * as React from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import SearchBar from "../componnents/SearchBar";

function AdminType() {
    const type = [{ type: "text", names: "type", id: "type", placeholder: "Bản truyện" }]
    const TH = [{ names: "Id truyện" },
    { names: "Bản truyện" }
    ]
    const TD = [{ id: 1, name: "Bản 1" },
    { id: 1, name: "Bản 2" },
    { id: 1, name: "Bản 3" }
    ]
    const buttons = [{ action: "/api/v1/type", method: "POST", names: "Thêm" },
    { action: "api/v1/type/{id}", method: "PUT", names: "Cập nhật" },
    { action: "api/v1/type/{id}", method: "DELETE", names: "Xoá" }
    ]
    return (
        <div className="h-screen pt-12">
            <div className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Type Book</h3>
                </div>
            </div>
            <div className="w-12/12">
                <div>
                    {type.map((field) => (
                        <InputAdmin
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                {buttons.map((button) => (
                    <BtnAdmin method={button.method} names={button.names} />
                ))}
                <SearchBar />
                <TableAdmin arraysTH={TH} arraysTD={TD} />
            </div>
        </div>
    )
}
export default AdminType

