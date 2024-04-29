import React, { useEffect, useState } from "react";
import InputAdmin from "../components/InputAdmin";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
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
  const [formDate, setFormDate] = useState({
    dayFrom: null,
    dayTo: null,
  });
  const [data, setData] = useState([]);
  const { fetchReve, order, getOrderDate } = ReveData();
  const options = {
    responsive: true,
    plugins: {},
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const chart = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const input = [
    { type: "date", names: "dayFrom", id: "DayFrom", placeholder: "Day From" },
    { type: "date", names: "dayTo", id: "DayTo", placeholder: "Day To" },
  ];
  const handleDayToChange = (e) => {
    const { name, value } = e.target;
    setFormDate((prevFormDate) => ({ ...prevFormDate, [name]: value }));
  };
  const convertDateFormat = (dateString) => {
    return moment(dateString, "YYYY-MM-dd").toString();
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = [];
      if (formDate.dayTo !== null && formDate.dayFrom !== null) {
        try {
          const response = await getOrderDate(formDate); // Đợi promise getOrderDate hoàn thành và lấy kết quả
          console.log(response);
          // Xử lý dữ liệu response ở đây nếu cần
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else if (formDate.dayTo !== null && formDate.dayFrom === null) {
        // Xử lý trường hợp formDate.dayTo tồn tại nhưng formDate.dayFrom không tồn tại
      } else {
        // Xử lý trường hợp cả formDate.dayTo và formDate.dayFrom đều không tồn tại
        order.forEach((order) => {
          const orderDate = new Date(order.orderDay); // Chuyển đổi ngày đơn hàng thành kiểu Date
          let existingDataIndex = newData.findIndex(
            (data) => data.date === orderDate.getDate()
          );
          if (existingDataIndex !== -1) {
            // Nếu ngày của đơn hàng đã tồn tại trong newData, cập nhật giá trị
            newData[existingDataIndex].data += order.totalPrice;
          } else {
            // Nếu ngày của đơn hàng chưa tồn tại trong newData, thêm dữ liệu mới
            newData.push({
              date: orderDate.getDate(),
              price: order.totalPrice,
            });
          }
        });
      }
      setData(newData);
      console.log(formDate);
    };
    fetchData();
  }, [formDate.dayFrom, formDate.dayTo, order]);
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
              <Line options={options} data={chart} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reveneu;
