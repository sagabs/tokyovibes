import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Form from "react-bootstrap/Form";
import Gundambg from "../../assets/gundambg.png";

import { API_URL } from "../../utils/constants";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';


const Register = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    password: "",
    c_password: ""
  })

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: uuidv4(),
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobilePhone: userDetails.mobilePhone,
      email: userDetails.email,
      password: userDetails.password
    }

    //console.log(userDetails)

    if (userDetails.password !== userDetails.c_password) {
      alert("Konfirmasi password belum benar")
    } else {
      axios
        .post(API_URL + "users", data)
        .then((res) => {
          alert("Sukses Daftar Akun")
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
            <h4>Daftar</h4>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control 
                id="firstName"
                type="text" 
                placeholder="Masukkan Nama Depan"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control
                id="lastName" 
                type="text" 
                placeholder="Masukkan Nama Belakang"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nomor Handphone</Form.Label>
              <Form.Control
                id="mobilePhone" 
                type="text" 
                placeholder="Masukkan nomor telepon"
                onChange={handleChange} 
              />
            </Form.Group>
            <Form.Group className={Styles.inputform}>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                id="email"
                type="email" 
                placeholder="Masukkan email"
                onChange={handleChange} 
              />
            </Form.Group>
            <Form.Group
              className={Styles.inputform}
            >
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                id="password" 
                type="password" 
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className={Styles.inputform}
            >
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control
                id="c_password" 
                type="password" 
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button className={Styles.daftar} type="submit">
              Daftar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
