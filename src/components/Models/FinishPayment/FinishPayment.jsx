import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function FinishPayment({ onClose }) {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate("/Home");
  };
  return (
    <>
      <Modal show={true} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanh Toán Thành Công</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cảm ơn bạn vì đã mua hàng!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Hoàn tất
          </Button>
          <Button variant="primary" onClick={handleGoToHomePage}>
            Về Trang chủ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FinishPayment;
