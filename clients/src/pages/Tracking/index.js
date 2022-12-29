import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "./style.css";
import Navbars from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import TrxDetails from "../../components/transactionDetails"

const Tracking = () => {

  const [currentCard, setCurrentCard] = useState("all");
	const [getStatus, setgetStatus] =  useState("")
	const [userId, setuserId] = useState(parseInt(localStorage.getItem("userId")));
	const [Status, setStatus] =  useState("")
	const [DataTracking, setDataTracking] = useState([])
	const [ShowDetail, setShowDetail] =  useState(false)
	const [ModalData, setModalData] = useState()
   

    useEffect(() => {
				const fetchData = async () => {
					const res = await axios.get(API_URL+`transactions?userid=8${getStatus}`)
					setDataTracking(res.data)
					console.log(DataTracking)
				};
				fetchData();
    }, [getStatus]);

    const checkStatus = (e) => {
      if (e === "Sudah Bayar") {
      return (
        <div>
          <span className="spanFilter1">Dibayar</span>
        </div>
      );
    } else if (e === "Dikirim") {
      return (
        <div>
          <span className="spanFilter2">Dikirim</span>
        </div>
      );
    } else if (e === "Diterima") {
      return (
        <div>
          <span className="spanFilter3">Diterima</span>
        </div>
      );
    } else if (e === "Belum Bayar") {
      return (
        <div>
          <span className="spanFilter3">Belum Bayar</span>
        </div>
      );
    }
  };

	const handleBtns = (e) => {
    let word = e.target.value;
    setCurrentCard(word);
		if(word === "Sudah Bayar"){
			setgetStatus("&&status=Sudah Bayar")
		}else if(word === "Dikirim"){
			setgetStatus("&&status=Dikirim")
		}else if(word === "Diterima"){
			setgetStatus("&&status=Diterima")
		}else{
			setgetStatus("")
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
          <Col xs={3} className="">
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
          <Col xs={6} className="box2">
            <Row className="contentButton">
              <div className="justify-content-between d-flex">
                <Button className="btnFilter" onClick={handleBtns} value="all">
                  Semua
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="Sudah Bayar">
                  Dibayar
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="Dikirim">
                  Dikirim
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="Diterima">
                  Diterima
                </Button>
                <Button className="btnFilter" onClick={handleBtns} value="dinilai">
                  Dinilai
                </Button>
              </div>
            </Row>
            <Row>
              <Col className="contentTransaksi my-4">
                {DataTracking[0]? DataTracking.map((item, index) => (
                  <Card key={index} className="cards" style={{ marginBottom: "1rem" }}
									onClick={() => {
										setModalData(item);
										setShowDetail(true);
									}} 
									>
                    <Row key={item.id}>
                      <Col className="imgColTransaksi" xs={2}>
                        {/* <img src={item.carts.product.img? require(`../../assets/img/${item.carts.product.img}`) : require("../../assets/img/gambar2.png")} className="imgTransaksi" draggable={false} width={160} height={160} alt="pictures" /> */}
                        <img src={require("../../assets/img/gambar2.png")} className="imgTransaksi" draggable={false} width={160} height={160} alt="pictures" />
                      </Col>
                      <Col className="cardColTransaksi">
                        <Row>
                          <Col>
                            <div className="id mb-1">ID: 081254961298</div>
                            <div className="product-name mb-1">{item.status}</div>
                            <div>{checkStatus(item.status)}</div>
														<Button variant="success" size="sm" onClick={() => {
															setModalData(item);
															setShowDetail(true);
														}} >
                  						Pilih Semua
                						</Button>
                            <Col style={{ textAlign: "end" }}></Col>
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{ textAlign: "end" }}>
                            <div className="product-price">{item.status}</div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                )) : <div>tes</div>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
		{
			ModalData?<TrxDetails
			show={ShowDetail}
			onHide={() => setShowDetail(false)}
			data={ModalData} 
			/>
			: <div>tes</div>
		}	
    </>
  );
};

export default Tracking;
