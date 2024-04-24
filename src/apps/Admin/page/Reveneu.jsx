import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import InputAdmin from "../componnents/InputAdmin";
import Select from "react-tailwindcss-select";
import moment from "moment/moment";
import ReveData from "../Services/ReveneuData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { height } from "@mui/system";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function Reveneu() {
    const [formData, setFormData] = useState({
        dayFrom: null,
        dayTo: null
    })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const xyzdata = [{x:1,y:2},{x:1,y:2},{x:1,y:2},{x:1,y:2},{x:1,y:2},{x:1,y:2},{x:1,y:2},{x:1,y:2},]
    const xydata = {
        labels,
        datasets: [{
            data: xyzdata,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
        ],
    };
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
            console.log(dayFrom +'1923' + dayTo)
            const filteredOrders = order.filter(item => {
                const orderDate = new Date(item.orderDay);
                return orderDate <= dayFrom && orderDate >= dayTo;
            });
            newData.push(filteredOrders)
            newData.sort((a, b) => a.xData - b.xData)
            console.log(newData);
            setData(prevData => [...prevData, ...newData]);
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
                            <Line options={options} data={xydata} />;
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Reveneu