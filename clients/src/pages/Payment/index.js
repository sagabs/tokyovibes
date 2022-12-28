import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CountdownTimer from "../../components/countdownTimer";
import Navbars from "../../components/navbar/navbar";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import "./style.css";
import axios from "axios";
import swal from 'sweetalert';
import { API_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const OneDayInMS = 1 * 24 * 60 * 60 * 1000;
  const NowInMs = new Date().getTime();
  const dateTimeAfterOneDays = NowInMs + OneDayInMS;

  const location = useLocation()
  const { dataProps, idTrx } = location.state
  const [DataPembayaran, setDataPembayaran] = useState(dataProps)
  const [IdTrans, setIdTrans] = useState(idTrx)
  const [Rekening, setRekening] = useState()
  const [Logo, setLogo] = useState()

  const navigate = useNavigate()

  const atasNamaRekening = "PT. Tokoh Aksi Makmur";
  const tagihan = dataProps.total.toLocaleString("id-ID");

  useEffect(() => {
    if (dataProps.metodeBayar === "Sinarmas") {
      setRekening("1234-0098-9987773")
      setLogo("logosimas")
    } else if (dataProps.metodeBayar === "Mandiri") {
      setRekening("1234-0098-1000-2034")
      setLogo("logomandiri")
    } else if (dataProps.metodeBayar === "BCA") {
      setRekening("774-100323942")
      setLogo("logobca")
    }
  }, [])

  const caraPembayaran = [
    { description: "Masukkan nomor PIN ATM", key: 0 },
    { description: "Pilih Menu Transfer", key: 1 },
    { description: "Masukkan Nomor Rekening", key: 2 },
    { description: "Masukkan Jumlah Tagihan", key: 3 },
    { description: "Simpan Bukti Transfer", key: 4 },
  ];

  const SudahBayar = () => {
    const randNumber = Math.floor(Math.random() * 900000000) + 100000000
    const tempResi = "KGP".concat("",randNumber)
    const data = {
      ...DataPembayaran,
      noResi : tempResi,
      status : "Sudah Bayar"
    }
    axios
    .put(API_URL + `transactions/` + IdTrans, data)
    .then(result => {
      swal("Tunggu ya","Sistem akan memeriksan pembayaran", "info")
      navigate("/profile/tracks")
    })
    .catch(error => {
      console.log("error ya "+ error)
    })
  }
  return (
    <>
      <Navbars />
      <Container fluid md={6} className="d-flex justify-content-center">
        <Row className="payment-page mt-5">
          <Col>
            <div className="d-grid text-center my-3 justify-content-center">
              <div>
                <div className="boldText title">Waktu Pembayaran</div>
              </div>
              <div>
                <div className="boldText date-title">
                  <CountdownTimer targetDate={dateTimeAfterOneDays} />
                </div>
              </div>
            </div>
            <div className="payment-section ">
              <div className="payment-info mb-4">
                <Row className="mb-2">
                  <Col>
                    <div className="boldText">Pembayaran Transfer</div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <div>
                      <img src={Logo ? require(`../../assets/img/${Logo}.png`) : require(`../../assets/img/logosimas.png`)} alt={"Logo Bank"} className="imageBankLogo"></img>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div>Nomor Rekening</div>
                    <div className="boldText">{Rekening}</div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(Rekening);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={require("../../assets/img/copy.png")} alt={"Salin"} className="copy"></img>
                      <span className="boldText salin ">Salin</span>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div>Rekening Atas Nama</div>
                    <div className="boldText">{atasNamaRekening}</div>
                  </Col>
                  <Col>
                    <div className="d-none"></div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div>Total Tagihan</div>
                    <div className="boldText">Rp. {tagihan}</div>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(tagihan);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={require("../../assets/img/copy.png")} alt={"Salin"} className="copy"></img>
                      <span className="boldText salin">Salin</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <button className="buttonPay" style={{ backgroundColor: "#9b0e09", border: "0 none", borderRadius: "2rem" }}>
                Cek Status Pembayaran
              </button>
              <button className="Pay" style={{ backgroundColor: "#fff", border: "2px solid", borderRadius: "2rem"  }} onClick={SudahBayar}>
                Sudah Bayar
              </button>
            </div>

            <div className="payment-section mb-5">
              <div className="boldText mb-2">Cara Pembayaran Lewat ATM Bank Sinarmas</div>
              <ol>
                {caraPembayaran.map((cara) => {
                  return <li key={cara.key}>{cara.description}</li>;
                })}
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;