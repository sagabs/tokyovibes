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

    comparePassword = (password, c_password) => {
        return password === c_password
    }

    submitData(event) {
        event.preventDefault();

        const { password, c_password } = this.state;

        const data = {
            id: uuidv4(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobilePhone: this.state.mobilePhone,
            email: this.state.email,
            password: this.state.password
        }

        if (!this.comparePassword(password, c_password)) {
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
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="Nama depan anda" 
                        onChange={this.inputFirstName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nama belakang anda" 
                        onChange={this.inputLastName}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobilePhone">
                    <Form.Label>Nomor Handphone</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Nomor handphone anda"
                        onChange={this.inputMobilePhone}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        required type="email" 
                        placeholder="Email anda" 
                        onChange={this.inputEmail}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required 
                        type="password" 
                        placeholder="Password"
                        onChange={this.inputPassword}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
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
