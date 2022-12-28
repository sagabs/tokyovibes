import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "./style.css";
import Navbars from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

const Tracking = () => {
  const dataDummy = [
    { id: 1, nama: "HololiveEN", status: "bayar", total: 5000000 },
    { id: 2, nama: "HololiveID gawr", status: "dikirim", total: 2000000 },
    { id: 3, nama: "HololiveEN Ollie", status: "diterima", total: 4100000 },
  ];

  const [cards, setCards] = useState(dataDummy);
  const [currentCard, setCurrentCard] = useState("all");

  const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "all") {
      setCards(dataDummy);
    } else {
      const filtered = dataDummy.filter((item) => {
        return item.status === currentCard || item.status.includes(currentCard);
      });
      setCards(filtered);
    }
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
          <Col>
            <h2>Daftar Transaksi</h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={4} className="">
            <div className="contentLeft">
              <Link to="/profile">
                <div>
                  <img className="profiles" src={require("../../assets/img/killua.jpg")} alt="profil pic"></img>
                  <span className="profile-names text-center d-grid">Uzumaki Yeager</span>
                </div>
              </Link>
              <Link to="/">
                <div className="menu-profile">
                  <img className="my-order" src={require("../../assets/img/alamat.png")} alt="Pesanan Saya"></img>
                  <span className="">Home</span>
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
          <Col xs={8} className="box2">
            <Row className="contentButton">
              <div className="justify-content-between d-flex">
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
                  <Card key={index} className="cards" style={{ marginBottom: "1rem" }}>
                    <Row key={item.id}>
                      <Col className="imgColTransaksi" xs={2}>
                        <img src={require("../../assets/img/gambar2.png")} className="imgTransaksi" draggable={false} width={160} height={160} alt="pictures" />
                      </Col>
                      <Col className="cardColTransaksi">
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
                            <div className="product-price">Rp{item.total.toLocaleString("id-ID")}</div>
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
