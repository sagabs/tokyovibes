import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import Styles from "./navbar.module.css";
import { Cart3 } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import "../styles/Modal.css";

const Navigat = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className={Styles.navbar} sticky="top">
        <Container fluid>
          <Row className={Styles.rownav}>
            <Col xs={9}></Col>
            <Col>
              <div className="justify-content-around d-flex">
                <li>
                  <Link to="about">Tentang Kami</Link>
                </li>
                <li>
                  <Link to="/register">Daftar</Link>
                </li>
                <li></li>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className={Styles.rownav}>
            <Col xs={1}>
              <div className="text-center">
                <Link to="/">
                  <img src={Logo} height={"75"} width={"75"} ></img>
                </Link>
              </div>
            </Col>
            <Col className="align-self-center" xs={8}>
              <Form>
                <Form.Control type="search" placeholder="Search" className={Styles.search} aria-label="Search" />
              </Form>
            </Col>
            <Col className="align-self-center">
              <Cart3 size={25} color={"#D91E1E"} />
              <button style={{ marginLeft: "25px" }} onClick={handleShow}>
                Request Figure
              </button>
            </Col>
          </Row>
        </Container>
        <Modal centered className="modals" show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="d-grid text-center modal-body">
              <div className="title">Request Barang</div>
              <div className="text">Untuk request barang bisa dilakukan melalui chat.</div>
              <div className="button">
                <a href="https://wa.me/6288221500153">
                  <img style={{ width: "125px" }} src={require("../../assets/img/whatsapp.png")} alt="WhatsApp Logo"></img>
                  <div className="modal-button">
                    <span>Chat Penjual</span>
                  </div>
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Navbar>
    </>
  );
};

export default Navigat;
