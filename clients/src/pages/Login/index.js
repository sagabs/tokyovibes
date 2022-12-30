import { Form, Button, Container, Col, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const Login = () => {
  const navigate = useNavigate();

  const [link, setLink] = useState();

  useEffect(() => {
    const linkLS = localStorage.getItem("historyLink");
    linkLS ? setLink(linkLS) : setLink("/");
  }, []);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(API_URL + "users?email=" + userDetails.email)
      .then((res) => {
        if (res.data.length === 0) {
          swal("Gagal", "Akun belum terdaftar", "error");
        } else {
          if (res.data[0].password !== userDetails.password) {
            swal("Gagal", "Email atau password salah", "error");
          } else {
            localStorage.removeItem("historyLink");
            localStorage.setItem("isLoggedin", true);
            localStorage.setItem("userId", res.data[0].id);
            localStorage.setItem("userName", res.data[0].firstName + " " + res.data[0].lastName);
            localStorage.setItem("alamat", res.data[0].address);
            swal("Sukses", "Berhasil masuk", "success");
            navigate(link);
          }
        }
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

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
            <Form className="loginform" onSubmit={handleSubmit}>
              <div className="TokyoLogo">
                <img src={require("../../assets/img/TokyoVibesLogo.png")} alt={"Tokyo Vibes Logo"}></img>
              </div>
              <h3 className="masuk">Masuk</h3>
              <Form.Group className="formgroup">
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" className="form-input" type="email" required onChange={handleChange} />
              </Form.Group>

              <Form.Group className="formgroup">
                <Form.Label>Kata Sandi</Form.Label>
                <Form.Control id="password" type="password" required onChange={handleChange} />
              </Form.Group>
              <p className="lupa-sandi">Lupa Kata Sandi?</p>
              <Button className="loginbutton w-100" type="submit">
                MASUK
              </Button>
              <Link to="/register">
                <p className="mb-4 daftar">Belum punya akun? Daftar</p>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
