import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "./style.css";
import Navbars from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import TrxDetails from "../../components/transactionDetails"

const Tracking = () => {
  const point = 321;
  const nominal = 1392346;
  const saldo = nominal.toLocaleString("id-ID");
  const [currentCard, setCurrentCard] = useState("all");
  const [getStatus, setgetStatus] = useState("")
  const [userId, setuserId] = useState(parseInt(localStorage.getItem("userId")));
  const [DataTracking, setDataTracking] = useState([])
  const [ShowDetail, setShowDetail] = useState(false)
  const [ModalData, setModalData] = useState("")
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobilePhone: "",
    email: "",
  });
	const [nil, setnil] = useState(null)


  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get(API_URL + `transactions?userid=${userId}${getStatus}`)
      setDataTracking(res.data)

      const userDetails = await axios.get(API_URL + `users?id=${userId}`);
      setUserDetails(userDetails.data[0]);
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
    if (word === "Sudah Bayar") {
      setgetStatus("&&status=Sudah Bayar")
    } else if (word === "Dikirim") {
      setgetStatus("&&status=Dikirim")
    } else if (word === "Diterima") {
      setgetStatus("&&status=Diterima")
    } else if (word === "Belum Bayar") {
      setgetStatus("&&status=Belum Bayar")
    } else {
      setgetStatus("")
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
              <div style={{margin:0, border:"1px solid gray"}}/>
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
								<Button className="btnFilter" onClick={handleBtns} value="Belum Bayar">
                  Belum
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
              </div>
            </Row>
            <Row>
              <Col className="contentTransaksi my-4">
                {DataTracking[0] ? DataTracking.map((item, index) => (
                  <Card key={index} style={{ marginBottom: "1rem", paddingTop: 0, margin: "0px 0px 16px 0px", minHeight: 0 }}>
                    <Row key={item.id}>
                      <Col className="imgColTransaksi" xs={2}>
                        <img src={item.carts[0].product.img? require(`../../assets/img/${item.carts[0].product.img}`) : require(`../../assets/img/produk2.jpg`)} className="imgTransaksi" draggable={false} width={160} height={160} alt="pictures" />
                      </Col>
                      <Col className="cardColTransaksi" style={{ paddingRight: 25, paddingLeft: 0 }}>
                        <Row>
                          <Col>
                            <Row>
                              <Col xs={3}>
                                <span>{item?.date ? item?.date : <span>17 Agustus 1945</span>} </span>
                              </Col>
                              <Col>
                                {checkStatus(item.status)}
                              </Col>
                              <Col className="text-end">
                                <div className="mb-1">Invoice: {item?.noInv ? item.noInv : "123180142"}</div>
                              </Col>
                            </Row>
                            <Col>
                              <div className="mb-2" style={{ fontWeight: 600 }}>{item.carts[0].product.name}</div>
                              <div className="mb-2">{item.carts[0].product.category}</div>
                            </Col>
                          </Col>
                        </Row>
                        <Row className="mb-2">
                          <Col>
                            <div>
                              <span style={{ textDecoration: "line-through", color: "red" }}>Rp. {item.carts[0].product.price} </span>
                              <span style={{ margin: "0px 10px" }} />
                              <span>Rp. {item.carts[0].product.price * (1 - (item.carts[0].product.promo / 100))}</span>
                            </div>
                          </Col>
                          <Col style={{ textAlign: "end" }}>
                            <a className="detailTransaksi" onClick={() => {
                              setModalData(item);
                              setShowDetail(true);
                            }}>Lihat Detail Transaksi</a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                )) : 
								<div className="d-flex flex-column align-items-center">
									<p style={{fontWeight:800, color:"red" }}>Tidak Ada Barang BOSH 🤢🤣😍</p>
									<img src={require(`../../assets/img/trxkosong.png`)} draggable={false} width={400} height={400} alt="pictures" />
								</div>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {
        ModalData ? <TrxDetails
          show={ShowDetail}
          onHide={() => setShowDetail(false)}
          data={ModalData}
        />
          : nil
      }
    </>
  );
};

export default Tracking;
