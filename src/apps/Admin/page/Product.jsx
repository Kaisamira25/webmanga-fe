import * as React from "react";
import { useState, useEffect, useRef } from "react";
import InputAdmin from "../componnents/InputAdmin";
import BtnAdmin from "../componnents/BtnAdmin";
import TableAdmin from "../componnents/TableAdmin";
import SearchBar from "../componnents/SearchBar";
import { Card } from "@mui/material";
import MultiSelect from "../componnents/Multiple_Select";


function AdminProduct() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]); // Mảng chứa các địa chỉ URL của hình ảnh
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImageUrls = files.map(file => URL.createObjectURL(file));
        setImageUrls(prevImageUrls => [...prevImageUrls, ...newImageUrls]);
        setSelectedImages([...selectedImages, ...files]);
        const filePaths = files.map(file => file.path); // Sử dụng file.path nếu bạn đã enable đối tượng File cho đường dẫn
        console.log(filePaths);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...selectedImages];
        const updatedUrls = [...imageUrls];

        updatedImages.splice(index, 1);
        updatedUrls.splice(index, 1);

        setSelectedImages(updatedImages);
        setImageUrls(updatedUrls);

        URL.revokeObjectURL(imageUrls[index]);
    };
    useEffect(() => {
        console.log(imageUrls);
    }, [selectedImages]);
    const product = [
        { type: "text", names: "Title", id: "product", placeholder: "Title" },
        { type: "number", names: "UnitPrice", id: "product", placeholder: "Price" },
        { type: "number", names: "Stock", id: "product", placeholder: "Stock" },
        { type: "text", names: "Author", id: "product", placeholder: "Author" },
        { type: "text", names: "Publisher", id: "product", placeholder: "Publisher" },
        { type: "number", names: "PublicYear", id: "product", placeholder: "PublicYear" },
        { type: "text", names: "Summary", id: "product", placeholder: "Summary" },
        { type: "date", names: "ArrivalDay", id: "product", placeholder: "ArrivalDay" },
    ]
    const TH = [
        { names: "Title" },
        { names: "UnitPrice" },
        { names: "Stock" },
        { names: "Author" },
        { names: "Publisher" },
        { names: "PublicYear" },
        { names: "Summary" },
        { names: "ArrivalDay" },
    ]
    const TD = [{ id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" },
    { id: 1, name: "Thể loại 1" },
    ]
    const buttons = [{ names: "Add" },
    {names: "Update" },
    {names: "Xoá" }
    ]
    return (
        <div className="h-screen pt-12">
            <header className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Book</h3>
                </div>
            </header>
            <div>
                <div>
                    {product.map((field) => (
                        <InputAdmin
                            type={field.type}
                            name={field.names}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    ))}
                    
                    <input className="ms-2" type="file" id="image" name="imageProduct" multiple onChange={handleImageChange} />
                </div>
                <div>
                    {selectedImages.map((image, index) => (
                        <Card key={index} className="selected-image w-2/12 relative inline-block border-black border-2 ms-1">
                            <img src={URL.createObjectURL(image)} />
                            <button onClick={() => handleRemoveImage(index)} className="absolute top-0 right-0 bg w-1/12 bg-gray-500 border-10" type="button">X</button>
                        </Card>
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
export default AdminProduct