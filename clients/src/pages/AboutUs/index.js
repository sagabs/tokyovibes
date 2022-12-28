import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Navbars from "../../components/navbar/navbar";
import "./style.css";

const AboutUs = () => {
  return (
    <>
      <Navbars />
      <Container fluid md={6} className="d-grid justify-content-center">
        <Row className="mt-5 content-sec">
          <Col>
            <div className="mains">
              <div className="text-center title">Tentang Kami</div>
              <p className="mains-text">Tokyo Vibes TV adalah toko penjualan action figure anime Jepang dan platform konten media yang menyajikan informasi tentang anime dan manga.</p>
              <p className="mains-text">Di sini Anda dapat menjadi reseller action figure dengan harga yang menarik, so menunggu apalagi segera daftarkan dirimu dan jadilah pebisnis untuk menaikkan pendapatan kamu!</p>
              <div className="hiragana">ありがとうございました</div>
            </div>
            <Row className="mb-5 card-sec">
              <Col>
                <div className="card text-center">
                  <img src={require("../../assets/img/link.png")} className="icon-pic" alt="dfgerah"></img>
                  <div className="card-body">
                    <h5 className="card-title">Seller yang Sudah Bergabung</h5>
                    <h3 className="card-title">90K++</h3>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card text-center">
                  <img src={require("../../assets/img/actionfigure.png")} className="icon-pic" alt="dfgerah"></img>
                  <div className="card-body">
                    <h5 className="card-title">Koleksi Action Figure</h5>
                    <h3 className="card-title">4.6K++</h3>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card text-center">
                  <img src={require("../../assets/img/city.png")} className="icon-pic" alt="dfgerah"></img>
                  <div className="card-body">
                    <h5 className="card-title">Offline Store</h5>
                    <h3 className="card-title">15 Kota</h3>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="member justify-content-center my-3">
              <div className="member-content">
                <div className="member-title">Meet Our Power Rangers</div>
                <div className="member-pic">
                  <img src={require("../../assets/img/megazord.png")} alt={"Megazord"}></img>
                </div>
                <div className="team-member">Afif Fatur Rahman - Bagas Alim Santoso - Fikri Aulia Parlindungan Lubis - Khalil Attalla Firdia</div>
                <div className="team-member"> Gerhana Abi Widatama - Reynaldi Irfan</div>
              </div>
            </div>
            <div className="footer text-center">
              Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With{" "}
              <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With{" "}
              <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill /> Made With <Icon.BalloonHeartFill />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
