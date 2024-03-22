import React, { useState } from "react";
import Padgina from "../componnents/Padgination";
import SearchBar from "../componnents/SearchBar";
import CoverData from "../Services/CoverData";
import CloseBtn from "../../../assets/icons/CloseBtn";

function AdminCover() {
    const [coverType, setCoverType] = useState('');
    const { covers, addCovers, updateCovers, deleteCovers } = CoverData();
    const [CoverId, setCoverId] = useState('')
    const TH = [{ names: "Id" },
    { names: "CoverType" }, {}
    ]
    const handleAddCover = async () => {
        if (coverType.trim() !== '') { // Kiểm tra xem giá trị đã được nhập hay chưa
            await addCovers({ coverType });
            setCoverType('');
        } else {
            console.error('Cover type must not be empty');
        }
    };
    const handleRowClick = (id) => {
        const selected = covers.find(cover => cover.id === id);
        console.log(id)
        if (selected) {
            setCoverType(selected.coverType)
            setCoverId(selected.id);
        }
    };
    const handleUpdateCover = async () => {
        await updateCovers(CoverId, { coverType });
        setGenre('');
    }
    const handleDeleteCover = async (id) => {
        try {
            // Gọi hàm xóa genre từ service hoặc endpoint tương ứng
            await deleteCovers(id);
            setCoverType('');
        
        } catch (error) {
            console.error('Error deleting genre:', error);
        }
    };
    return (
        <div className="h-screen pt-12">
            <div className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Manage Type Cover</h3>
                </div>
            </div>
            <div>
                <div>
                    <div className=" w-12/12 py-4 flex-col inline-block w-3/12">
                        <div className="relative w-full h-10 ">
                            <input
                                type="text"
                                id="cover"
                                name="cover"
                                value={coverType}
                                onChange={(e) => setCoverType(e.target.value)}
                                className=" peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                placeholder=""
                            />
                            <label
                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                CoverType
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    formMethod="POST"
                    onClick={handleAddCover}
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Add
                </button>
                <button
                    type="button"
                    formMethod="PUT"
                    onClick={handleUpdateCover}
                    className="w-24 h-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sans rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                    Update
                </button>
                <SearchBar />
                <div className="w-12/12 h-1/3 mb-2 mt-1 ">
                    <table className="w-full h-full overflow-y-scroll border-s border-black">
                        <thead className="border-b border-black bg-gray-500 uppercase ">
                            <tr>
                                {TH.map((item, index) => (
                                    <th className=" text-center font-bold border-r border-black" key={index}>{item.names}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {covers.map((cover, rowIndex) => (
                                <tr key={rowIndex} name={rowIndex} onClick={() => handleRowClick(cover.id)} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                    {Object.values(cover).map((value, colIndex) => (
                                        <td className="text-center border-r border-black" key={colIndex}>{value}</td>
                                    ))}
                                    <td className="text-center border-r border-black py-2"  >
                                        <button type="button" onClick={() => handleDeleteCover(cover.id)}
                                            className="w-6 h-6 bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <CloseBtn />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Padgina />
                </div>
            </div>
        </div>
    )
}
export default AdminCover