import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Card } from "@mui/material";
import PublicData from "../Services/PublicationData";
import Select from "react-tailwindcss-select";
import CoverData from "../Services/CoverData";
import GenreData from "../Services/GenreData";
import TypeData from "../Services/TypeData";
import GiftData from "../Services/GiftData";

function AdminProduct() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [newImageUrls, setNewImageUrls] = useState([])
    const [showModal, setShowModal] = React.useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const { covers } = CoverData();
    const { genresSL } = GenreData();
    const { types } = TypeData();
    const { Gifts } = GiftData();

    const handleSelectedChange = (value) => {
        setSelectedOption(value);
    };
    
    const [formData, setFormData] = useState({
        publicationsName: "",
        unitPrice: "",
        stock: "",
        author: "",
        publisher: "",
        publicationYear: "",
        summary: "",
        arrivalDay: "",
        genres: [],
        covers: [],
        gifts: [],
    });
    const columnIndexToRemove = [6,7];

    const { publics, addPublics } = PublicData();
    const [imageUrls, setImageUrls] = useState([]); // Mảng chứa các địa chỉ URL của hình ảnh
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePaths = [];
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imagePath = event.target.result;
                imagePaths.push(imagePath);
                if (imagePaths.length === files.length) {
                    console.log(imagePaths)
                    setNewImageUrls(imagePaths);
                }
            };
            reader.readAsDataURL(file);
        });
        setImageUrls(prevImageUrls => [...prevImageUrls, ...imagePaths]);
        setSelectedImages([...selectedImages, ...files]);

    };
    useEffect(() => {
        console.log(newImageUrls);
    }, [newImageUrls]);
    const handleRemoveImage = (index) => {
        const updatedImages = [...selectedImages];
        const updatedUrls = [...imageUrls];
        const updateNewImageUrls = [...newImageUrls]
        updatedImages.splice(index, 1);
        updatedUrls.splice(index, 1);
        updateNewImageUrls.splice(index, 1)
        setNewImageUrls(updateNewImageUrls)
        setSelectedImages(updatedImages);
        setImageUrls(updatedUrls);
        URL.revokeObjectURL(imageUrls[index]);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);
    const handleAddPublic = async () => {
        await addPublics(formData, newImageUrls);
        setFormData(new formData());
    };
    const product = [
        { type: "text", names: "publicationsName", id: "product", placeholder: "Title" },
        { type: "number", names: "unitPrice", id: "product", placeholder: "Price" },
        { type: "number", names: "stock", id: "product", placeholder: "Stock" },
        { type: "text", names: "author", id: "product", placeholder: "Author" },
        { type: "text", names: "publisher", id: "product", placeholder: "Publisher" },
        { type: "number", names: "publicationYear", id: "product", placeholder: "PublicYear" },
        { type: "text", names: "summary", id: "product", placeholder: "Summary" },
        { type: "date", names: "arrivalDay", id: "product", placeholder: "ArrivalDay" },
    ]
    const TH = [
        { names: "Title" },
        { names: "UnitPrice" },
        { names: "Stock" },
        { names: "Author" },
        { names: "Publisher" },
        { names: "PublicYear" },
        { names: "Image" }
    ]
    const buttons = [{ names: "Add" },
    { names: "Update" },
    { names: "Xoá" }
    ]
    return (
        <div className="h-full ">
            <div className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Book</h3>
                </div>
            </div>
            <div>
                <div>
                    {product.map((field) => (
                        <div className="py-2 flex-col inline-block w-3/12 ms-2">
                            <div className=" w-12/12 py-1">
                                <div className="relative w-full h-10 ">
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.names}
                                        value={formData[field.names]}
                                        onChange={handleChange}
                                        className="shadow-black peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=""
                                    />
                                    <label
                                        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {field.placeholder}
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                    <input className="ms-2" type="file" id="image" name="imageProduct" multiple onChange={handleImageChange} />
                    <br />
                    <div className="py-2 flex-col inline-block ms-1 w-2/12 ">
                        < Select
                            isMultiple
                            isSearchable
                            value={selectedOption}
                            onChange={handleSelectedChange}
                            options={genresSL}
                            classNames={"overflow-x-scroll overflow-y-scroll"}
                            placeholder="Genres"
                        />
                    </div>
                    <div className="py-2 flex-col inline-block ms-1 w-2/12 ">
                        < Select
                            isMultiple
                            isSearchable
                            value={selectedOption}
                            onChange={handleSelectedChange}
                            options={genresSL}
                            classNames={"overflow-x-scroll overflow-y-scroll"}
                            placeholder="Covers"
                        />
                    </div>
                    <div className="py-2 flex-col inline-block ms-1 w-2/12 ">
                        < Select
                            isMultiple
                            isSearchable
                            value={selectedOption}
                            onChange={handleSelectedChange}
                            options={genresSL}
                            classNames={"overflow-x-scroll overflow-y-scroll"}
                            placeholder="Types"
                        />
                    </div>
                    <div className="py-2 flex-col inline-block ms-1 w-2/12 ">
                        < Select
                            isMultiple
                            isSearchable
                            value={selectedOption}
                            onChange={handleSelectedChange}
                            options={genresSL}
                            classNames={"overflow-x-scroll overflow-y-scroll"}
                            placeholder="Gifts"
                        />
                    </div>

                </div>
                <div>

                </div>
                <button
                    type="button"
                    onClick={handleAddPublic}
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Add
                </button>
                <button
                    type="button"
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Update
                </button>
                <button
                    type="button"
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Delete
                </button>
                <button
                    className=" w-24 h-8 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 px-5 py-1   text-sm  rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                     Image
                </button>
                <div className="w-12/12 h-1/2 mb-1 ">
                    <form className="max-w-sm w-7/12"  >
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                    </form>
                </div>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            List Image Book
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        {selectedImages.map((image, index) => (
                                            <Card key={index} className="selected-image w-2/12 relative inline-block border-black border-2 ms-1 " style={{ width: '150px', height: '180px' }}>
                                                <img src={URL.createObjectURL(image)} />
                                                <button onClick={() => handleRemoveImage(index)} className="absolute top-0 right-0 bg w-1/12 bg-gray-500 border-10" type="button">X</button>
                                            </Card>
                                        ))}
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                <div className="w-12/12 h-80 border-2 border-black overflow-y-scroll">
                    <table className="w-full h-full overflow-y-scroll border-s border-black">
                        <thead className="border-b border-black bg-gray-500 uppercase " >
                            <tr className="">
                                {TH.map((item, index) => (
                                    <th className=" text-center font-bold border-r border-black" key={index}>{item.names}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {publics.map((giftRow, rowIndex) =>
                            (
                                <tr key={rowIndex} name={rowIndex} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                    {Object.entries(giftRow).map(([key, value], col, row) => (
                                        // Kiểm tra nếu không phải là cột mà bạn muốn loại bỏ
                                        col !== columnIndexToRemove[0] && col !== columnIndexToRemove[1] ? (
                                            key !== 'imageURl' ? (
                                                <td className="text-center border-r border-black" key={col}>
                                                    {value}
                                                </td>
                                            ) :
                                                <td className="text-center border-r border-black " key={col}>
                                                    <img src={value} alt="" className="mx-auto" style={{ width: '50px', height: '80px' }} />
                                                </td>
                                        ) : null
                                    ))}
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default AdminProduct