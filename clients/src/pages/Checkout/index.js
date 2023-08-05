import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../components/navbar/navbar";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { API_URL } from "../../utils/constants";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const address = localStorage.getItem("alamat");
  const userId = parseInt(localStorage.getItem("userId"));
  const location = useLocation();
  const { dataProps } = location.state;
  const [checkoutData, setCheckoutData] = useState(dataProps);
  const [DetailLainnya, setDetailLainnya] = useState({
    ongkir: 0,
    total: 0,
    metodeBayar: "",
    alamat: address,
    kurir: "",
    namaTerima: "",
    noResi: "",
  });
  const date = new Date();

  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const tempTotal = checkoutData.totalsummary.sumPromo + 1000 + DetailLainnya.ongkir;
    setDetailLainnya((DetailLainnya) => ({ ...DetailLainnya, total: tempTotal }));
  }, [DetailLainnya.ongkir]);

  const changePembayaran = (data) => {
    setDetailLainnya((DetailLainnya) => ({ ...DetailLainnya, metodeBayar: data }));
  };

  const changePengiriman = (nama, harga) => {
    setDetailLainnya((DetailLainnya) => ({ ...DetailLainnya, kurir: nama, ongkir: harga }));
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.text}
    </Tooltip>
  );

  const ubahAlamat = () => {
    swal({
      title: "Masukkan Alamat Baru",
      text: "Alamat yang diinputkan akan menjadi alamat pengiriman!",
      icon: "info",
      content: "input",
      buttons: ["Tidak jadi", "Ubah"],
    }).then((value) => {
      if (value) {
        setDetailLainnya((DetailLainnya) => ({ ...DetailLainnya, alamat: value }));
        swal("Sukses!", "Alamat berhasil diubah!", "success");
      }
    });
  };

  const BayarSekarang = () => {
    if (DetailLainnya.kurir === "" || DetailLainnya.metodeBayar === "") {
      swal("Eror!", "Pilih kurir atau metode pembayaran terlebih dahulu!", "error");
    } else {
      if (checkoutData.asal === "carts") {
        checkoutData.carts.forEach((data) => {
          axios.delete(API_URL + "carts/" + data.id).catch((error) => {
            console.log("error ya" + error);
          });
        });
        axios
          .get(API_URL + `cartsummary?userid=${userId}`)
          .then(result => {
            const data = {
              userid: userId,
              sumAmount: 0,
              sumPrice: 0
            }
            axios
              .put(API_URL + `cartsummary/` + result.data[0].id, data)
              .catch(error => {
                console.log("error ya" + error)
              })
          })
      }

      const userName = localStorage.getItem("userName");
      const randNumber = Math.floor(Math.random() * 900000000) + 100000000

      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).toLocaleDateString();

      const data = {
        noInv: randNumber,
        date: today,
        userid: userId,
        carts: checkoutData.carts,
        totalsummary: checkoutData.totalsummary,
        status: "Belum Bayar",
        ongkir: DetailLainnya.ongkir,
        total: DetailLainnya.total,
        metodeBayar: DetailLainnya.metodeBayar,
        alamat: DetailLainnya.alamat,
        kurir: DetailLainnya.kurir,
        namaTerima: userName,
        noResi: "",
      };
      axios
        .post(API_URL + "transactions", data)
        .then((res) => {
          const id = res.data.id;
          swal("Sukses!", "Silahkan melakukan pembayaran!", "success");
          navigate("/payment", { state: { dataProps: data, idTrx: id } });
        })
        .catch((error) => {
          console.log("error" + error);
        });
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col xs={8}>
            <div style={{ paddingRight: 100 }}>
              <Carousel responsive={responsive} showDots={true} arrows={false}>
                {checkoutData.carts.map((item, index) => (
                  <Row>
                    <Col xs={4}>
                      <div className="text-center">
                        {item.product.img ? <img className="imgCheckout" height={200} width={200} src={require(`../../assets/img/${item.product.img}`)} alt={"Icons Checkout"} draggable="false"></img> : <span>Loading....</span>}
                      </div>
                    </Col>
                    <Col className="align-self-center ps-0">
                      <div className="mb-1">
                        <b>{item.product.name}</b>
                      </div>
                      <Row>
                        <Col xs={9}>Hololive En</Col>
                        <Col style={{ textAlign: "end", paddingRight: 52 }}> x{item.amount}</Col>
                      </Row>
                      {item.product.promo ? (
                        <div style={{ margin: 0, textAlign: "end", paddingRight: 40 }}>
                          <span style={{ textDecoration: "line-through", color: "red" }}>Rp.{item.product.price} </span>
                          <span style={{ marginRight: "10px" }}></span>
                          <span>Rp.{item.product.price * (1 - item.product.promo / 100)}</span>
                        </div>
                      ) : (
                        <p style={{ margin: 0, textAlign: "end", paddingRight: 40 }}>Rp. {item.product.price} </p>
                      )}
                      <p hidden></p>
                      <hr style={{ margin: "1rem 0" }} />
                      <div style={{ margin: 0, display: "flex", justifyContent: "space-between", paddingRight: 40 }}>
                        <span style={{ fontWeight: 650 }}>Subtotal </span>
                        <span style={{ fontWeight: 650 }}>Rp.{item.product.price * (1 - item.product.promo / 100) * item.amount}</span>
                      </div>
                    </Col>
                  </Row>
                ))}
              </Carousel>
            </div>
            <div>
              <Card className="my-5 cardCheckoutlg">
                <Card.Body className="my-1">
                  <Card.Title>
                    <div className="card-titles">
                      <img src={require("../../assets/img/alamat.png")} alt="alamat penerima"></img>
                      <span>Alamat Penerima</span>
                    </div>
                  </Card.Title>
                  <Card.Text className="mt-3" style={{ paddingLeft: 40 }}>{DetailLainnya.alamat}</Card.Text>
                  <div className="text-start">
                    <Button
                      className="btn btn-danger btn-sm btnUbahAlamat"
                      onClick={() => {
                        ubahAlamat();
                      }}
                    >
                      Ubah Alamat
                    </Button>
                  </div>
                </Card.Body>
                <hr style={{ width: "100%" }} />
                <Card.Body className="my-1 element-pembayaran">
                  <div className="d-flex align-items-center text-end justify-content-between w-100">
                    <Card.Title>
                      <div className="card-titles">
                        <img src={require("../../assets/img/pembayaran.png")} alt="alamat penerima"></img>
                        <span>Metode Pembayaran</span>
                      </div>
                    </Card.Title>
                    <Dropdown>
                      <Dropdown.Toggle className="dr-down-toggle" variant="reds" id="dropdown-basic">
                        {DetailLainnya?.metodeBayar ? DetailLainnya.metodeBayar : <span>Pilih Pembayaran</span>}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => changePembayaran("Sinarmas")}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/logosimas.png")} alt="simas pic"></img>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => changePembayaran("Mandiri")}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/logomandiri.png")} alt="mandiri pic"></img>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => changePembayaran("BCA")}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/logobca.png")} alt="bca pic"></img>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
                <hr style={{ width: "100%" }} />
                <Card.Body className="my-1">
                  <div className="d-flex align-items-center text-end justify-content-between w-100">
                    <Card.Title>
                      <div className="card-titles">
                        <img src={require("../../assets/img/delivery.png")} alt="alamat penerima"></img>
                        <span>Metode Pengiriman</span>
                      </div>
                    </Card.Title>
                    <Dropdown>
                      <Dropdown.Toggle className="dr-down-toggle " variant="reds" id="dropdown-basic">
                        {DetailLainnya?.kurir ? DetailLainnya.kurir : <span>Pilih Kurir</span>}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => changePengiriman("Ninja", 15000)}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/sicepat.png")} alt="bca pic"></img>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="border" onClick={() => changePengiriman("JNT", 20000)}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/jnt.jpg")} alt="bca pic"></img>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => changePengiriman("JNE", 25000)}>
                          <div className="item-pics">
                            <img src={require("../../assets/img/jne.png")} alt="bca pic"></img>
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <Card style={{ width: "auto", borderColor: "red", borderRadius: 15, margin: 0 }}>
              <Card.Body>
                <Card.Title className="mt-3 detailTransaksiText">Detail Transaksi</Card.Title>
                <br />
                <Row>
                  <Col>Total Barang</Col>
                  <Col style={{ textAlign: "end" }}>Rp. {checkoutData.totalsummary.sumPrice}</Col>
                </Row>
                <Row>
                  <Col xs={8}>Total Ongkos Kirim</Col>
                  <Col style={{ textAlign: "end" }}>Rp. {DetailLainnya.ongkir}</Col>
                </Row>
                <Row>
                  <Col xs={8}>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 150 }} overlay={renderTooltip({ text: "Proteksi barang dari segala gangguan" })}>
                      <span>Asuransi Pengiriman</span>
                    </OverlayTrigger>
                  </Col>
                  <Col style={{ textAlign: "end" }}>Rp. 400</Col>
                </Row>
                <Row>
                  <Col>
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 150 }} overlay={renderTooltip({ text: "Agar kami semakin semangat meningkatkan pelayanan :)" })}>
                      <span>Biaya Admin</span>
                    </OverlayTrigger>
                  </Col>
                  <Col style={{ textAlign: "end" }}>Rp. 600</Col>
                </Row>
                <div className="hrCheckout" />
                <Row>
                  <Col>Promo</Col>
                  <Col style={{ textAlign: "end" }}>- Rp. {checkoutData.totalsummary.sumPrice - checkoutData.totalsummary.sumPromo}</Col>
                </Row>
                <div className="hrCheckout" />
                <Row>
                  <Col style={{ fontWeight: "700" }}>Total</Col>
                  <Col style={{ textAlign: "end" }}>Rp. {DetailLainnya.total}</Col>
                </Row>
                <Button className="w-100 mt-5 mb-4 btnUbahAlamat" onClick={BayarSekarang}>
                  Bayar Sekarang
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
