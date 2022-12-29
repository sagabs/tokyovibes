import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "./style.css";
import Navbars from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const Tracking = () => {
  const dataDummy = [
    { id: 1, nama: "HololiveEN", status: "bayar", total: 5000000 },
    { id: 2, nama: "HololiveID gawr", status: "dikirim", total: 2000000 },
    { id: 3, nama: "HololiveEN Ollie", status: "diterima", total: 4100000 },
  ];

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobilePhone: "",
    email: "",
  });
  const point = 321;
  const nominal = 1392346;
  const saldo = nominal.toLocaleString("id-ID");

  const [cards, setCards] = useState(dataDummy);
  const [currentCard, setCurrentCard] = useState("all");

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (currentCard === "all") {
      setCards(dataDummy);
    } else {
      const filtered = dataDummy.filter((item) => {
        return item.status === currentCard || item.status.includes(currentCard);
      });
      setCards(filtered);
    }
    const fetchData = async () => {
      const userDetails = await axios.get(API_URL + `users?id=${userId}`);
      setUserDetails(userDetails.data[0]);
      console.log(userDetails);
    };
    fetchData();
  }, [currentCard]);

  const checkStatus = (e) => {
    if (e === "bayar") {
      return (
        <div>
          <span className="spanFilter1">Dibayar</span>
        </div>
      );
    } else if (e === "dikirim") {
      return (
        <div>
          <span className="spanFilter2">Dikirim</span>
        </div>
      );
    } else if (e === "diterima") {
      return (
        <div>
          <span className="spanFilter3">Diterima</span>
        </div>
      );
    }
  };

  return (
    <>
      <Navbars />
      <Container>
        <Row className="mt-3">
          <Col xs={4}>
            <Card>
              <div>
                <img className="profile" src={require("../../assets/img/lionelmessi.jpg")} alt="profil pic"></img>
                <span className="profile-name">{userDetails.firstName}</span>
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
              <Link to="/profile/tracks" className="linkCard" >
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
            </Card>
          </Col>
          <Col className="box2">
            <Row className="contentButton">
              <div className="mb-2">
                <h2>Daftar Transaksi</h2>
              </div>
              <div className="justify-content-between d-flex" style={{ paddingRight: 0 }}>
                <Button className="btnFilter" onClick={handleBtns} value="all">
                  Semua
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="bayar">
                  Dibayar
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="dikirim">
                  Dikirim
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="diterima">
                  Diterima
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="dinilai">
                  Dinilai
                </Button>
              </div>
            </Row>
            <Row>
              <Col className="contentTransaksi my-4">
                {cards.map((item, index) => (
                  <Card key={index} style={{ marginBottom: "1rem", paddingTop: 0, margin: "0px 0px 16px 0px", minHeight: 0 }}>
                    <Row key={item.id}>
                      <Col className="imgColTransaksi" xs={2}>
                        <img src={require("../../assets/img/gambar2.png")} className="imgTransaksi" draggable={false} width={160} height={160} alt="pictures" />
                      </Col>
                      <Col className="cardColTransaksi" style={{ paddingRight: 25 }}>
                        <Row>
                          <Col>
                            <div className="id mb-1">ID: 081254961298</div>
                            <div className="product-name mb-1">{item.nama}</div>
                            <div>{checkStatus(item.status)}</div>
                            <Col style={{ textAlign: "end" }}></Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{ textAlign: "end" }}>
                            <div className="product-price">Rp {item.total.toLocaleString("id-ID")}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tracking;
