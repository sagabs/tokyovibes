import { Form, Button, Container, Col, Row } from "react-bootstrap";
import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = () => {
  return (
    <Container fluid className="main">
      <Row className="Login">
        <Col className="Col1">
          <div className=" mb-2 section-one">
            <img src={require("../../assets/img/LoginImage.png")} alt={"Dragon Ball Logo"} className="DBallImg"></img>
            <p className="tokyo-text">
              Tokyo Vibes TV adalah toko penjualan action figure anime Jepang dan platform konten media yang menyajikan informasi.
              <br />
              Di sini Anda dapat menjadi reseller action figure dengan harga yang menarik, so menunggu apalagi segera daftarkan dirimu dan jadilah pebisnis untuk menaikkan pendapatan kamu!
            </p>
            <p className=" tokyo-text mt-2">ありがとうございました</p>
          </div>
        </Col>
        <Col className="Col2">
          <div>
            <Form className="loginform">
              <div className="TokyoLogo">
                <img src={require("../../assets/img/TokyoVibesLogo.png")} alt={"Tokyo Vibes Logo"}></img>
              </div>
              <h3 className="masuk">Masuk</h3>
              <Form>
                <Form.Group className="formgroup" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control className="form-input" type="email" />
                </Form.Group>

                <Form.Group className="formgroup" controlId="formBasicPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <p className="lupa-sandi">Lupa Kata Sandi?</p>
                <Button className="loginbutton w-100" type="submit">
                  MASUK
                </Button>
                <p className="mb-4 daftar">Belum punya akun? Daftar</p>
              </Form>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
