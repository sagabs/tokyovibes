import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API_URL } from "../utils/constants";
import axios from "axios";
import swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid';

export default class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            mobilePhone: "",
            email: "",
            password: "",
            c_password: "",
        };

        this.submitData = this.submitData.bind(this);
    }

    inputFirstName = event => {
        this.setState({ firstName: event.target.value });
    };

    inputLastName = event => {
        this.setState({ lastName: event.target.value });
    };

    inputMobilePhone = event => {
        this.setState({ mobilePhone: event.target.value });
    };

    inputEmail = event => {
        this.setState({ email: event.target.value });
    };

    inputPassword = event => {
        this.setState({ password: event.target.value });
    };

    confirmPassword = event => {
        this.setState({ c_password: event.target.value });
    };

    submitData(event) {
        event.preventDefault();

        const { password, c_password } = this.state;
        const matches = password === c_password;

        const data = {
            id: uuidv4(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobilePhone: this.state.mobilePhone,
            email: this.state.email,
            password: this.state.passwordS
        }

        if (!matches) {
            alert("Konfirmasi password belum benar")
        } else {
            axios
                .post(API_URL + "users", data)
                .then((res) => {
                    swal({
                        title: "Daftar Akun!",
                        text: "Sukses Daftar Akun ",
                        icon: "success",
                        button: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    console.log("Error yaa", error);
                });
        }
    }

    render() {
        return (
            <Form onSubmit={this.submitData}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="Nama depan anda" 
                        onChange={this.inputFirstName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nama belakang anda" 
                        onChange={this.inputLastName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobilePhone">
                    <Form.Label>Nomor Handphone</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Nomor handphone anda"
                        onChange={this.inputMobilePhone}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        required type="email" 
                        placeholder="Email anda" 
                        onChange={this.inputEmail}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required 
                        type="password" 
                        placeholder="Password"
                        onChange={this.inputPassword}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Konformasi Password</Form.Label>
                    <Form.Control 
                        required 
                        type="password" 
                        placeholder="Konformasi password" 
                        onChange={this.confirmPassword}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
