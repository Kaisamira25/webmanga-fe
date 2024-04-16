import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import InputAdmin from "../componnents/InputAdmin";
import Select from "react-tailwindcss-select";
import moment from "moment/moment";
import ReveData from "../Services/ReveneuData";

function Reveneu() {
    const [formData, setFormData] = useState({
        dayFrom: null,
        dayTo: null
    })
    const [data, setData] = useState([]);
    const { fetchReve, order } = ReveData();
    const [xData, setXdata] = useState([]);
    const input = [
        { type: "date", names: "dayFrom", id: "DayFrom", placeholder: "Day From" },
        { type: "date", names: "dayTo", id: "DayTo", placeholder: "Day To" }
    ]
    const handleDayToChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
    const convertDateFormat = (dateString) => {
        return moment(dateString, 'DD/MM/YYYY').toISOString();
    }

    useEffect(() => {
        const newData = [];
        if (formData.dayTo !== null && formData.dayFrom !== null) {
            const dayFrom = convertDateFormat(formData.dayFrom);
            const dayTo = convertDateFormat(formData.dayTo);
            const filteredOrders = order.filter(item => {
                const orderDate = new Date(item.orderDay);
                return orderDate >= dayFrom && orderDate <= dayTo;
            });
            console.log(filteredOrders);
        } else if (formData.dayTo !== null && formData.dayFrom === null) {

        } else {
            order.forEach(order => {
                const orderDate = new Date(order.orderDay); // Chuyển đổi ngày đơn hàng thành kiểu Date
                let existingDataIndex = newData.findIndex(data => data.xData === orderDate.getDate());
                if (existingDataIndex !== -1) {
                    // Nếu ngày của đơn hàng đã tồn tại trong newData, cập nhật giá trị
                    newData[existingDataIndex].data += order.totalPrice;
                } else {
                    // Nếu ngày của đơn hàng chưa tồn tại trong newData, thêm dữ liệu mới
                    newData.push({ xData: orderDate.getDate(), data: order.totalPrice });
                }
            });
        }

        newData.sort((a, b) => a.xData - b.xData)
        setData(prevData => [...prevData, ...newData]);
        console.log(newData)
    }, [formData.dayTo, formData.dayFrom, order])
    const xDataArray = data.map(item => item.xData);
    const dataArray = data.map(item => item.data);
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
                        <div>
                            <span className="font-bold ">Oder by</span>
                            <br />
                            <div className="w-12/12 flex  py-2">
                                {input.map((field, index) => (
                                    <InputAdmin
                                        key={index}
                                        type={field.type}
                                        name={field.names}
                                        id={field.id}
                                        placeholder={field.placeholder}
                                        onChange={handleDayToChange}
                                    />
                                ))}
                            </div>

                        </div>
                        <div className="w-12/12 h-10 py-5 ms-3">
                            <LineChart
                                xAxis={[{ data: xDataArray, scaleType: 'point', label: 'Order', position: "right" }]}
                                series={[
                                    {
                                        data: dataArray,
                                        area: true,
                                    },
                                ]}
                                width={1200}
                                height={600}

                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Reveneu