import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import InputAdmin from "../componnents/InputAdmin";
import _Select from "../componnents/Select_Statis";
import TableAdmin from "../componnents/TableAdmin";



function Reveneu() {
    // const [xData,setXData] =useState([]);
    const xData = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
    const options = [
        { value: "month", label: "Month" },
        { value: "year", label: "Year" }
    ];
    const input = [
        { type: "date", names: "From", id: "DayFrom", placeholder: "Day From" },
        { type: "date", names: "To", id: "DayTo", placeholder: "Day To" }
    ]
    const TH = [
        { names: "Id" },
        { names: "Total Price" },
        { names: "Status" },
        { names: "Discount" },
    ]
    const TD = [
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 1, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 2, total:1000000,status:"Đang lên đơn",discount:"" },
        { id: 3, total:1000000,status:"Đang lên đơn",discount:"" },
    
    ]



    return (
        <div>
            <div className="mt-4">
                <div className="text-black text-start">
                    <h3 className="font-bold">Reveneu Statistics</h3>
                </div>
            </div>
            <div>
                <div className="w-full">
                    <div className=" w-12/12 py-4  ">
                        <div className="w-11/12 flex py-2">
                            <div>
                                <span className="font-bold ">Oder by</span>
                                <br />
                                <div className="w-12/12 flex px-4 py-2">
                                    {input.map((field, index) => (
                                        <InputAdmin
                                            key={index}
                                            type={field.type}
                                            name={field.names}
                                            id={field.id}
                                            placeholder={field.placeholder}
                                        />
                                    ))}
                                    <div className="w-3/12">
                                        <_Select options={options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-12/12 h-10 border-1  border-black flex py-5">
                            <div className="w-5/12 me-40">
                                <LineChart
                                    xAxis={[{ data: xData, scaleType: 'point', label: 'Order' }]}
                                    series={[
                                        {
                                            data: [60, 40, 70, 80, 100, 180, 105],
                                            label: 'Order',
                                            area: true
                                        },
                                    ]}
                                    width={800}
                                    height={500} 
                                />
                            </div>
                            <div className="w-4/12 ms-20 mt-9">
                                <div className="w-12/12 mb-2 mt-8 h-96 border-2 border-black overflow-y-scroll">
                                    <table className="w-full h-80 border-s border-r border-black">
                                        <thead className="border-b border-black bg-gray-500 uppercase ">
                                            <tr>
                                                {TH.map((item, index) => (
                                                    <th className=" text-center font-bold border-r border-black" key={index}>{item.names}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {TD.map((items, rowIndex) => (
                                                <tr key={rowIndex} name={rowIndex} className="cursor-pointer border-b  border-black hover:bg-gray-400">
                                                    {Object.values(items).map((value, colIndex) => (
                                                        <td className="text-center border-r border-black" key={colIndex}>{value}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Reveneu