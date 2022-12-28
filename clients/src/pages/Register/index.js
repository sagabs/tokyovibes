import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Form from "react-bootstrap/Form";
import Gundambg from "../../assets/gundambg.png";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobilePhone: "",
    email: "",
    password: "",
    c_password: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const data = {
      id: uuidv4(),
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      address: userDetails.address,
      mobilePhone: userDetails.mobilePhone,
      email: userDetails.email,
      password: userDetails.password,
    };

    if (userDetails.password !== userDetails.c_password) {
      alert("Konfirmasi password belum benar");
    } else {
      axios
        .post(API_URL + "users", data)
        .then((res) => {
          alert("Sukses Daftar Akun");
        })
        .catch((error) => {
          console.log("Error yaa", error);
        });
    }
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.child1}>
        <img className={Styles.gundambg} src={Gundambg} alt="background gundam"></img>
      </div>
      <div className={Styles.child2}>
        <div className={Styles.regis}>
          <div className={Styles.logoanddaftar}>
            <img className={Styles.logo} src={Logo} alt="logo" />
            <h3 style={{ fontWeight: "700" }}>Daftar</h3>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control id="firstName" type="text" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Nama depan tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control id="lastName" type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Alamat</Form.Label>
              <Form.Control id="address" type="text" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Alamat tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Nomor Handphone</Form.Label>
              <Form.Control id="mobilePhone" type="text" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Nomor handphone tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Email</Form.Label>
              <Form.Control id="email" type="email" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Email tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control id="password" type="password" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Kata sandi tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control id="c_password" type="password" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Konfirmasi kata sandi tidak boleh kosong.</Form.Control.Feedback>
            </Form.Group>
            <Button className={Styles.daftar} type="submit">
              DAFTAR
            </Button>

            <Link to="/login" className={Styles.masuk} style={{ textDecoration: "none" }}>
              <p className={Styles.masuk}>Sudah Punya Akun? Masuk</p>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
