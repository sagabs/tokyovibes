import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbars from "../../components/navbar/navbar";
import "./style.css";
const Profile = () => {
  const point = 321;
  const nominal = 1392346;
  const saldo = nominal.toLocaleString("id-ID");
  const profileName = "Mbappe Al-Kadzab";
  return (
    <>
      <Navbars />
      <Container className="mt-4">
        <Row>
          <Col className="left-row" sm={3}>
            <div>
              <div>
                <img className="profile" src={require("../../assets/img/lionelmessi.jpg")} alt="profil pic"></img>
                <span className="profile-name">{profileName}</span>
              </div>
              <table style={{ width: "100%" }} className="table-saldo ">
                <tr>
                  <td className="d-flex">
                    <img className="rupiah-icons align-self-center d-flex" src={require("../../assets/img/dollars.png")} alt="rupiah icons"></img>
                    <span className="mx-2 d-flex align-self-center fw-bold">Saldo</span>
                  </td>
                  <td>
                    <span className="justify-content-end d-flex fw-bold">Rp. {saldo}</span>
                  </td>
                </tr>
                <tr>
                  <td className="d-flex">
                    <img className="rupiah-icons align-self-center d-flex" src={require("../../assets/img/points.png")} alt="rupiah icons"></img>
                    <span className="mx-2 d-flex align-self-center">Point</span>
                  </td>
                  <td>
                    <span className="justify-content-end d-flex">{point}</span>
                  </td>
                </tr>
              </table>
              {/* <Row>
                <Col>
                  <div>
                    <img className="rupiah-icons" src={require("../../assets/img/rupiah.png")} alt="rupiah icons"></img>
                  </div>

                  <div>
                    <img className="dana-icons" src={require("../../assets/img/dana.png")} alt="rupiah icons"></img>
                  </div>
                </Col>
                <Col>
                  <span className=" saldo-title">Saldo</span>
                  <span className=" saldo-title">Dana</span>
                </Col>
                <Col>
                  <div>
                    <span className="text-right">Rp. {saldo}</span>
                  </div>
                  <div>
                    <span className="text-right">Rp. {saldo}</span>
                  </div>
                </Col>
              </Row> */}
              <Link to="tracks" >
                <div className="menu-profile">
                  <img className="my-order" src={require("../../assets/img/box.png")} alt="Pesanan Saya"></img>
                  <span className="">Daftar Transaksi</span>
                </div>
              </Link>
              <div className="menu-profile">
                <img className="setting" src={require("../../assets/img/pengaturan.png")} alt="Pengaturan"></img>
                <span className="">Pengaturan</span>
              </div>
              <div className="menu-profile">
                <img className="logout" src={require("../../assets/img/signout.png")} alt="Keluar"></img>
                <span className="">Keluar</span>
              </div>
            </div>
          </Col>
          <Col sm={8} className="right-row">
            <div className="m-2">
              <h2> Informasi Profil</h2>
              <p className="mx-4">Kelola data diri dan informasi lainnya untuk mengamankan akun Anda.</p>
            </div>
            <Row>
              <Col sm={3} className="foto-profile">
                <div>
                  <img className="pic-profile" src={require("../../assets/img/lionelmessi.jpg")} alt="profil pic"></img>
                  <button className="choose-pic">Pilih Foto Profil</button>
                  <p>Ukuran file: maksimal 10 Megabytes. Ekstensi file: .JPG .JPEG .PNG</p>
                </div>
              </Col>
              <Col sm={7} className="biodata">
                <table className="bio-table">
                  <tr className=" ">
                    <td className=" text-r ">Nama</td>
                    <td className="">Mbappe Al-Kadzab</td>
                    <td className="">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="  text-r">Tanggal Lahir</td>
                    <td className=" ">1 Januari 2010</td>
                    <td className="  ">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="  text-r">Jenis Kelamin</td>
                    <td className=" ">Pria</td>
                    <td className="   ">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="  text-r">Email</td>
                    <td className=" ">messi@gmail.com</td>
                    <td className="  ">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className=" text-r">Nomor Handphone</td>
                    <td className=" ">+6281234567890</td>
                    <td className=" ">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <td className=" text-r">Alamat</td>
                    <td className=" ">Jalan Petamburan, Tanah Abang</td>
                    <td className=" ">
                      <button className="change-button">
                        <img src={require("../../assets/img/ubah.png")} alt="ubah" className="mx-2"></img>Ubah
                      </button>
                    </td>
                  </tr>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
