import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./styles/Modal.css";

const RequestModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal centered className="modals" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="d-grid text-center modal-body">
            <div className="title">Request Barang</div>
            <div className="text">Untuk request barang bisa dilakukan melalui chat.</div>
            <div className="button">
              <a href="https://wa.me/6288221500153">
                <img style={{ width: "125px" }} src={require("../assets/img/whatsapp.png")} alt="WhatsApp Logo"></img>
                <div className="modal-button">
                  <span>Chat Penjual</span>
                </div>
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestModal;
