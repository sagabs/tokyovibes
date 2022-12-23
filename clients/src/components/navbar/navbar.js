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
        <Container fluid>
          <Row className={Styles.rownav}>
            <Col xs={9}>
            </Col>
            <Col >
              <div className='justify-content-around d-flex'>
                <span>Tentang Kami</span>
                <a href='#'>
                  <span>Daf</span>
                  <span className={Styles.spanTar}>tar</span>
                </a>
                <span className={Styles.spanTar}>Masuk</span>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className={Styles.rownav}>
            <Col xs={1}>
              <div className='text-center'>
                <Navbar.Brand href="#home">
                  <img src={Logo} height={"75"} width={"75"}></img>
                </Navbar.Brand>
              </div>
            </Col>
            <Col className='align-self-center' xs={8}>

              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={Styles.search}
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col className='align-self-center'>
              <Cart3 size={25} color={"#D91E1E"} />
              <a href='#' style={{ marginLeft: "25px" }}>Request Figure</a>

            </Col>
          </Row>

        </Container>
      </Navbar >
    )
  }
}
