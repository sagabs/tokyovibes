import React from 'react'
import Button from 'react-bootstrap/Button';
import Bg from '../../assets/bg.png'
import Logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './index.module.css'
import Form from 'react-bootstrap/Form';

// const myStyle={
//   backgroundImage:`url(${Bg})`,
//   minHeight:'100vh',
//   minWidth:'100vw',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

const Register = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.child1}>tes</div>
      <div className={Styles.child2}>
        <div className={Styles.regis}>
          <img className={Styles.logo} src={Logo} alt="logo" />
          <h4>
            Daftar
          </h4>
          <Form>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nama Depan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Depan" />
            </Form.Group>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nama Belakang</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Belakang" />
            </Form.Group>
            <Form.Group className={Styles.inputform} required>
              <Form.Label>Nomor Handphone</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nomor telepon" />
            </Form.Group>
            <Form.Group className={Styles.inputform} controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" />
            </Form.Group>
            <Form.Group className={Styles.inputform} controlId="formBasicPassword">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className={Styles.inputform} controlId="formBasicPassword">
              <Form.Label>Konfirmasi Kata Sandi</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button className={Styles.daftar} type="submit">Daftar</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register


