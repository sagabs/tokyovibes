import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../components/navbar/navbar";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { API_URL } from "../../utils/constants";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { dataProps } = location.state;
  const [checkoutData, setCheckoutData] = useState(dataProps);
  const [DetailLainnya, setDetailLainnya] = useState({
    ongkir: 0,
    total: 0,
    metodeBayar: "",
    alamat: "Jln percobaan",
    kurir: "",
    namaTerima: "",
    noResi: "",
  });

  const navigate = useNavigate();
  //const [productdiskon, setproductdiskon] = useState()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      }
      const userId = parseInt(localStorage.getItem("userId"));
      const userName = parseInt(localStorage.getItem("userName"));

      const data = {
        userid: userId,
        carts: checkoutData.carts,
        totalsummary: checkoutData.totalsummary,
        status: "belum bayar",
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
              <Card className="mt-5 cardCheckoutlg">
                <Card.Body>
                  <Card.Title>Alamat</Card.Title>
                  <Card.Text>{DetailLainnya.alamat}</Card.Text>
                  <div className="text-end">
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
              </Card>
              <Card>
                <Card.Body>
                  <div className="cardCheckout">
                    <Row>
                      <Col>
                        <Card.Title>Metode Pembayaran</Card.Title>
                      </Col>
                      <Col className="pembayaran d-grid align justify-content-end">
                        <input type={"radio"} name="checkPembayaran" onClick={() => changePembayaran("Sinarmas")} />
                        <label>Bank Sinarmas</label>
                        <br />
                        <input type={"radio"} name="checkPembayaran" onClick={() => changePembayaran("Mandiri")} />
                        <label>Mandiri</label>
                        <br />
                        <input type={"radio"} name="checkPembayaran" onClick={() => changePembayaran("BCA")} />
                        <label>BCA</label>
                      </Col>
                    </Row>
                  </div>

                  <div className="cardCheckout">
                    <Card.Title>Metode Pengiriman</Card.Title>
                    <input type={"radio"} name="checkPengiriman" onClick={() => changePengiriman("Ninja", 15000)} />
                    <label>Ninja (5-6 Hari)</label>
                    <br />
                    <input type={"radio"} name="checkPengiriman" onClick={() => changePengiriman("JNT", 20000)} />
                    <label>JNT (3-4 Hari)</label>
                    <br />
                    <input type={"radio"} name="checkPengiriman" onClick={() => changePengiriman("JNE", 25000)} />
                    <label>JNE (1-2 Hari)</label>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div></div>
            <Row className="mt-5 ">
              <Col xs={11}></Col>
            </Row>
          </Col>
          <Col>
            <Card style={{ width: "20rem", borderColor: "red", borderRadius: 15 }}>
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
                <hr className="hrCheckout" />
                <Row>
                  <Col>Promo</Col>
                  <Col style={{ textAlign: "end" }}>- Rp. {checkoutData.totalsummary.sumPrice - checkoutData.totalsummary.sumPromo}</Col>
                </Row>
                <hr className="hrCheckout" />
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
