import React from 'react';
import styles from '../History/History.module.scss';

function History() {
  const purchaseHistory = [
    { ID: "SP01", productName: "Sản phẩm 1", price: "200,000đ", status: "Đã giao", date: "01/01/2024" },
    { ID: "SP02", productName: "Sản phẩm 2", price: "300,000đ", status: "Đang giao", date: "02/02/2024" },
    { ID: "SP03", productName: "Sản phẩm 3", price: "400,000đ", status: "Đã giao", date: "02/02/2024" },
    { ID: "SP04", productName: "Sản phẩm 4", price: "500,000đ", status: "Đã giao", date: "02/02/2024" },
    { ID: "SP05", productName: "Sản phẩm 5", price: "600,000đ", status: "Đang giao", date: "02/02/2024" },
    // Thêm các mục khác vào đây
  ];

  return (
    <div className={styles.history}>
      <h1>Purchase History</h1>
      <table>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Name Product</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((item, index) => (
            <tr key={index}>
              <td>{item.ID}</td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
