import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/logo.png";
import Styles from "./navbar.module.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Cart3 } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class navbar extends Component {
  render() {
    return (
      <Navbar className={Styles.navbar} sticky="top">
        <Container className="d-flex justify-content-start" style={{ position: "sticky" }}>
          <Row xs="auto">
            <Col>Tentang Kami</Col>
            <Col>Daftar</Col>
            <Col>Masuk</Col>
          </Row>
        </Container>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={Logo} className={Styles.logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className={Styles.search}
                aria-label="Search"
              />
            </Form>
            <Cart3 size={25} color={"#D91E1E"} />
            <p style={{ marginTop: "25px", marginLeft: "25px" }}>Request Figure</p>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
  }
}
