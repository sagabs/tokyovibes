import React from "react";
import Styles from "./index.module.css";
import Navbar from "../../components/navbar/navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/logo.png";
import { DashCircle, Trash, PlusCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constants";

const Keranjang = () => {
  const [total, setTotal] = useState({});
  const [DataKeranjang, setDataKeranjang] = useState([]);
  const [RangkumBelanja, setRangkumBelanja] = useState({});
  const [count, setCount] = useState(0);
  const [TempCartSum, setTempCartSum] = useState({ totalBarang: 0, totalHarga: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(API_URL + "carts");
      setDataKeranjang(res.data);

      const res2 = await axios.get(API_URL + "CartSummary");
      setRangkumBelanja(res2.data[0]);
    };
    fetchData();
  }, [total, count]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    const res = value.split(",", 2);
    console.log(e);

    const getCart = () => {
      return axios.get(API_URL + "carts?id=" + res[0]);
    };

    const getRangkuman = () => {
      return axios.get(API_URL + "cartsummary/" + RangkumBelanja.id);
    };

    Promise.all([getCart(), getRangkuman()]).then((result) => {
      const cart = result[0];
      const cartsummary = result[1];

      if (checked) {
        const data = {
          amount: cart.data[0].amount,
          totalPrice: cart.data[0].totalPrice,
          product: cart.data[0].product,
          checked: true,
        };
        const data2 = {
          sumAmmount: cartsummary.data.sumAmmount + cart.data[0].amount,
          sumPrice: cartsummary.data.sumPrice + cart.data[0].totalPrice,
        };
        axios.put(API_URL + "carts/" + res[0], data);

        axios
          .put(API_URL + "cartsummary/" + RangkumBelanja.id, data2)
          .then((response) => {
            alert("Berhasil menambahkan ke rangkuman belanja");
          })
          .catch((error) => {
            console.log("Error yaa ", error);
          });
        setTotal(data2.sumAmmount);
      } else {
        const data = {
          amount: cart.data[0].amount,
          totalPrice: cart.data[0].totalPrice,
          product: cart.data[0].product,
          checked: false,
        };
        const data2 = {
          sumAmmount: cartsummary.data.sumAmmount - cart.data[0].amount,
          sumPrice: cartsummary.data.sumPrice - cart.data[0].totalPrice,
        };
        axios.put(API_URL + "carts/" + res[0], data);

        axios
          .put(API_URL + "cartsummary/" + RangkumBelanja.id, data2)
          .then((response) => {
            alert("Berhasil mengurangi ke rangkuman belanja");
          })
          .catch((error) => {
            console.log("Error yaa ", error);
          });
        setTotal(data2.sumAmmount);
      }
    });
  };

  const reduceAmount = (id, price) => {
    console.log(id, price);

    const getCart = () => {
      return axios.get(API_URL + "carts?id=" + id);
    };

    const getRangkuman = () => {
      return axios.get(API_URL + "cartsummary/" + RangkumBelanja.id);
    };
    Promise.all([getCart(), getRangkuman()]).then((result) => {
      const cart = result[0];
      const cartsummary = result[1];

      if (cart.data[0].amount === 1) {
        deleteCart(id, cart.data[0].totalPrice, cart.data[0].amount, cart.data[0].checked);
      } else {
        const data = {
          amount: cart.data[0].amount - 1,
          totalPrice: cart.data[0].totalPrice - cart.data[0].product.price,
          product: cart.data[0].product,
          checked: cart.data[0].checked,
        };
        const data2 = {
          sumAmmount: cartsummary.data.sumAmmount - 1,
          sumPrice: cartsummary.data.sumPrice - cart.data[0].product.price,
        };
        axios.put(API_URL + "carts/" + id, data).catch((error) => {
          console.log("Error yaa ", error);
        });

        if (cart.data[0].checked) {
          axios.put(API_URL + "cartsummary/" + RangkumBelanja.id, data2).catch((error) => {
            console.log("Error yaa ", error);
          });
        }
      }
      setCount(count + 1);
    });
  };

  const addAmount = (id, price) => {
    console.log(id, price);

    const getCart = () => {
      return axios.get(API_URL + "carts?id=" + id);
    };

    const getRangkuman = () => {
      return axios.get(API_URL + "cartsummary/" + RangkumBelanja.id);
    };
    Promise.all([getCart(), getRangkuman()]).then((result) => {
      const cart = result[0];
      const cartsummary = result[1];

      const data = {
        amount: cart.data[0].amount + 1,
        totalPrice: cart.data[0].totalPrice + cart.data[0].product.price,
        product: cart.data[0].product,
        checked: cart.data[0].checked,
      };
      const data2 = {
        sumAmmount: cartsummary.data.sumAmmount + 1,
        sumPrice: cartsummary.data.sumPrice + cart.data[0].product.price,
      };
      axios.put(API_URL + "carts/" + id, data).catch((error) => {
        console.log("Error yaa ", error);
      });

      if (cart.data[0].checked) {
        axios.put(API_URL + "cartsummary/" + RangkumBelanja.id, data2).catch((error) => {
          console.log("Error yaa ", error);
        });
      }
      setCount(count + 1);
    });
  };

  const deleteCart = (id, totalPrice, amount, checked) => {
    axios
      .delete(API_URL + "carts/" + id)
      .then((res) => {
        if (checked) {
          axios.get(API_URL + "cartsummary/" + RangkumBelanja.id).then((res) => {
            const data = {
              sumAmmount: res.data.sumAmmount - amount,
              sumPrice: res.data.sumPrice - totalPrice,
            };
            axios.put(API_URL + "cartsummary/" + RangkumBelanja.id, data).catch((error) => {
              console.log("Error yaa ", error);
            });
          });
        }
        setCount(count + 1);
        alert("Berhasil menghapus barang dari keranjang");
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  const deleteAll = () => {
    axios
      .get(API_URL + "carts/")
      .then((res) => {
        res.data.forEach((data) => {
          axios.delete(API_URL + "carts/" + data.id);
          const data2 = {
            sumAmmount: 0,
            sumPrice: 0,
          };
          axios.put(API_URL + "cartsummary/" + RangkumBelanja.id, data2);
        });
        alert("Berhasil mengosongkan keranjang");
        setCount(count + 1);
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  const selectAll = () => {
    let total_barang = 0;
    let total_price = 0;
    axios
      .get(API_URL + "carts/")
      .then((result) => {
        total_barang = result.data.reduce((total_harga, data) => total_harga + data.amount, 0);
        total_price = result.data.reduce((total_harga, data) => total_harga + data.totalPrice, 0);
        result.data.forEach((res) => {
          if (!res.checked) {
            const data = {
              amount: res.amount,
              totalPrice: res.totalPrice,
              product: res.product,
              checked: true,
            };
            axios.put(API_URL + "carts/" + res.id, data).catch((error) => {
              console.log("Error yaa ", error);
            });
          }
        });
        const data2 = {
          sumAmmount: total_barang,
          sumPrice: total_price,
        };
        axios
          .put(API_URL + "cartsummary/" + RangkumBelanja.id, data2)
          .then((response) => {
            alert("Berhasil memilih semua di keranjang");
          })
          .catch((error) => {
            console.log("Error yaa ", error);
          });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
    setCount(count + 1);
  };

  return (
    <>
      <Navbar />
      <Container fluid className="p-4">
        <Row>
          <Col className={Styles.child1} xs={7}>
            <Container>
              <h3 className="mb-3">Keranjang</h3>
              <Container className="d-flex justify-content-between p-0">
                <Button variant="success" size="sm" onClick={selectAll}>
                  Pilih Semua
                </Button>
                <Button variant="danger" size="sm" onClick={deleteAll}>
                  Hapus Semua
                </Button>
              </Container>
              <hr style={{ margin: "1.15rem 0", width: "100%" }} />
            </Container>
            <Container className="mt-2">
              {DataKeranjang?.map((item, index) => (
                <Card key={index} className={Styles.card}>
                  <Row>
                    <Col className="py-2 ps-4" xs={3}>
                      <Card.Img style={{ height: "150px", width: "150px", maxWidth: "100%" }} src={Logo} />
                    </Col>
                    <Col>
                      <Card.Body styles>
                        <Row Row className="py-1">
                          <Col xs={11}>
                            <Card.Title style={{ margin: "0" }}>{item.product.name}</Card.Title>
                          </Col>
                          <Col>
                            <Form.Check aria-label="option 1" id={index} name="barang" defaultChecked={item.checked} value={[item.id, item.amount, item.product.price]} onChange={handleChange} />
                          </Col>
                        </Row>
                        <Row className="py-3">
                          <Card.Text styles={{ margin: "0" }}>{item.product.category}</Card.Text>
                        </Row>
                        <Row style={{ height: "100%" }}>
                          <Col>
                            <span style={{ margin: "0" }}>Rp. {item.product.price}</span>
                          </Col>
                          <Col xs={4} className="d-flex justify-content-between">
                            <Trash size={20} color={"red"} onClick={() => deleteCart(item.id, item.totalPrice, item.amount, item.checked)} />
                            <DashCircle size={20} color={"red"} onClick={() => reduceAmount(item.id, item.product.price)} />
                            <span>{item.amount}</span>
                            <PlusCircle size={20} color={"green"} onClick={() => addAmount(item.id, item.product.price)} />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Container>
          </Col>
          <Col className={Styles.rangkumanBelanjaMain}>
            <Card body className={Styles.rangkumanBelanja}>
              <Container>
                <h5>Rangkuman Belanja</h5>
                <hr style={{ margin: "15px 0px" }}></hr>
              </Container>
              <Container>
                <Row style={{ paddingBottom: "15px" }}>
                  <Col>
                    <span className={Styles.font}>Total Barang</span>
                  </Col>
                  <Col>
                    <span className={Styles.font}>{RangkumBelanja.sumAmmount}</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className={Styles.font}>Total Harga</span>
                  </Col>
                  <Col>
                    <span className={Styles.font}>Rp. {RangkumBelanja.sumPrice}</span>
                  </Col>
                </Row>

                <Row>
                  <Button variant="success" style={{ borderRadius: "1em", marginTop: "1rem", fontWeight: "500", fontSize: "1.325rem" }}>
                    Bayar
                  </Button>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Keranjang;
