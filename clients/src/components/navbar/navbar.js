import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart3 } from "react-bootstrap-icons";
import "./navbar.css";
import "../styles/Modal.css";

const Navbars = () => {
  const Profile = "C Ronaldo";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar collapseOnSelect expands="sm" className="navbars ">
        <Container className="ml-auto navlinks">
          <Nav className="justify-content-end " style={{ width: "100%" }}>
            <Nav.Link>
              <button className="button-request" style={{ color: "#fff", fontWeight: "400" }} onClick={handleShow}>
                Request Figure
              </button>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#fff", fontWeight: "400" }}>
              Tentang Kami
            </Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: "#fff", fontWeight: "400" }}>
              Daftar
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: "#fff", fontWeight: "400" }}>
              Masuk
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <img className="profile-nav" src={require("../../assets/img/lionelmessi.jpg")} alt="profile nav"></img>
              <span className="name-nav">{Profile}</span>
            </Nav.Link>
          </Nav>
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
      <Navbar className="nav-bottoms">
        <Container>
          <Nav className="searchable d-flex align-items-center justify-content-center">
            <Link to="/" className="mx-5">
              <Navbar.Brand>
                <img className="logo" src={require("../../assets/logo.png")} alt="Navigation Pic"></img>
                <span className="tokyoVibes justify-content-center align-items-center">東京バイブス</span>
              </Navbar.Brand>
            </Link>
            <Form className="mx-4 search">
              <Form.Control type="search" placeholder="Search" className="search" aria-label="Search" />
            </Form>
            <Link to="/carts">
              <Cart3 className="Cart" color={"#8b0500"} />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
