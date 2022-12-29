import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Productex from "../../assets/productex.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import swal from "sweetalert";
import { DashCircle, Trash, PlusCircle } from "react-bootstrap-icons";

import { API_URL } from "../../utils/constants";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    stock: 0,
    spesification: {},
    description: "",
  });

  const [amount, setAmount] = useState(1);

  const [isLoggedin, setIsLoggedin] = useState();

  useEffect(() => {
    const isLoggedinLS = localStorage.getItem("isLoggedin");
    isLoggedinLS ? setIsLoggedin(true) : setIsLoggedin(false);

    const fetchData = async () => {
      const result = await axios.get(API_URL + "products/" + params.id);
      setProduct(result.data);
    };

    fetchData();
  }, []);

  const addCart = () => {
    if (isLoggedin === true) {
      const userId = parseInt(localStorage.getItem("userId"));
      axios
        .get(API_URL + `carts?product.id=${product.id}&userid=${userId}`)
        .then((res) => {
          if (res.data.length === 0) {
            const cart = {
              userid: userId,
              amount: amount,
              totalPrice: product.price * (1 - product.promo / 100) * amount,
              product: product,
              checked: false,
            };

            axios
              .post(API_URL + "carts", cart)
              .then((res) => {
                swal("Sukses", "Sukses Masuk Keranjang " + product.name, "success");
                navigate("/carts");
              })
              .catch((error) => {
                console.log("Error yaa ", error);
              });
          } else {
            const cart = {
              userid: userId,
              amount: res.data[0].amount + amount,
              totalPrice: res.data[0].totalPrice + product.price,
              product: product,
              checked: false,
            };

            axios
              .put(API_URL + "carts/" + res.data[0].id, cart)
              .then((res) => {
                swal("Sukses", "Sukses Masuk Keranjang " + product.name, "success");
                navigate("/carts");
              })
              .catch((error) => {
                console.log("Error yaa ", error);
              });
          }
        })
        .catch((error) => {
          console.log("Error yaa ", error);
        });
    } else {
      localStorage.setItem("historyLink", `/details/${product.id}`);
      swal("Gagal", "Silahkan login terlebih dahulu untuk lanjut belanja", "error");
      navigate("/login");
    }
  };

  const buyNow = () => {
    if (isLoggedin === true) {
      const totalPrice = product.price * amount;
      const totalPromo = totalPrice * (1 - product.promo / 100);

      const data = {
        carts: [
          {
            amount: amount,
            totalPrice: totalPrice,
            product: product,
          },
        ],
        totalsummary: {
          sumAmount: amount,
          sumPrice: totalPrice,
          sumPromo: totalPromo,
          asal: "now",
        },
      };

      navigate("/checkout", { state: { dataProps: data } });
    } else {
      localStorage.setItem("historyLink", `/details/${product.id}`);
      swal("Gagal", "Silahkan login terlebih dahulu untuk lanjut belanja", "error");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className={Styles.main}>
        <div className={Styles.col1}>{product.img ? <img className={Styles.productex} src={require(`../../assets/img/${product.img}`)} alt="background gundam"></img> : <span>Loading....</span>}</div>
        <div className={Styles.col2}>
          <div className={Styles.col2row1}>
            <div className={Styles.col2names}>{product.name}</div>
            <div className={Styles.col2price}>Rp{product.price.toLocaleString("id-ID")}</div>
          </div>
          <div className={Styles.col2row1}>
            <div className={Styles.col2name}>Detail Barang :</div>
            <div className={Styles.col2list}>
              <div className={Styles.col2data}>
                <div className={Styles.col2datakey}>Kondisi</div>
                <div className={Styles.col2datavalue}>: {product.spesification.condition}</div>
              </div>
              <div className={Styles.col2data}>
                <div className={Styles.col2datakey}>Berat</div>
                <div className={Styles.col2datavalue}>: {product.spesification.weight}g</div>
              </div>
            </div>
          </div>
          <div className={Styles.col2row1}>
            <div className={Styles.col2name}>Keterangan :</div>
            <div className={Styles.col2ket}>{product.description}</div>
          </div>
          <div>
            <div className={Styles.reviewTitle}>Ulasan dari Pembeli</div>
            <div className={Styles.userBuyer}>
              <img src={require("../../assets/img/lionelmessi.jpg")} alt="Lionel Messi"></img>
              <span>Cristiano Ronaldo, S.Pd</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida purus metus, consequat volutpat diam consequat vitae. Integer convallis lobortis urna et pharetra. Quisque eu posuere lorem. Suspendisse congue eleifend
              urna et tincidunt. Aliquam aliquam placerat mollis. Praesent eu venenatis velit. Proin ullamcorper feugiat erat, vitae ultricies orci molestie in. Pellentesque est diam, vestibulum quis dignissim sed, sodales quis ex.{" "}
            </div>
          </div>
        </div>
        <div className={Styles.col3}>
          <div className={Styles.col3box}>
            <div className={Styles.col3list}>
              <div className={Styles.col3data}>
                <div className={Styles.col3datakey}>Warna</div>
                <div className={Styles.col3datavalue}>: {product.spesification.color}</div>
              </div>
              <div className={Styles.col3data}>
                <div className={Styles.col3datakey}>Total stok</div>
                <div className={Styles.col3datavalue}>: {product.stock}</div>
              </div>
              <Row style={{ height: "100%", marginTop: "20px" }}>
                <Col xs={20} className="d-flex justify-content-between">
                  <DashCircle size={20} color={"red"} onClick={() => (amount === 1 ? setAmount(1) : setAmount(amount - 1))} />
                  <span>{amount}</span>
                  <PlusCircle size={20} color={"green"} onClick={() => setAmount(amount + 1)} />
                </Col>
              </Row>
              <Button className={Styles.buynow} onClick={buyNow}>
                Beli Sekarang
              </Button>
              <Button className={Styles.addcart} onClick={addCart}>
                Tambah Keranjang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
