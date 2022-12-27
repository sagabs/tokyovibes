import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Productex from "../../assets/productex.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DashCircle, Trash, PlusCircle } from 'react-bootstrap-icons';

import { API_URL } from "../../utils/constants";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    stock: 0,
    spesification: {},
    description: "",
  });

  const [amount, setAmount] = useState(1);

  const [isLoggedin, setIsLoggedin] = useState()

  useEffect(() => {
    const isLoggedinLS = localStorage.getItem('isLoggedin');
    isLoggedinLS ? setIsLoggedin(true) : setIsLoggedin(false);

    const fetchData = async () => {
      const result = await axios.get(API_URL + "products/2");
      setProduct(result.data);
    };

    fetchData();
  }, []);

  const reduceAmount = () => {
    if(amount === 1) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
    }
  }

  const addCart = () => {
    if(isLoggedin === true) {
      axios
      .get(API_URL + "carts?product.id=" + product.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            id: uuidv4(),
            amount: amount,
            totalPrice: product.price,
            product: product,
          };

          axios
            .post(API_URL + "carts", cart)
            .then((res) => {
              alert("Sukses Masuk Keranjang " + product.name);
            })
            .catch((error) => {
              console.log("Error yaa ", error);
            });
        } else {
          const cart = {
            amount: res.data[0].amount + amount,
            totalPrice: res.data[0].totalPrice + product.price,
            product: product,
          };

          axios
            .put(API_URL + "carts/" + res.data[0].id, cart)
            .then((res) => {
              alert("Sukses Masuk Keranjang " + product.name);
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
      localStorage.setItem('historyLink', "/details");
      alert("Silahkan login terlebih dahulu untuk lanjut belanja")
      navigate("/login")
    }
  };

  const buyNow = () => {
    if(isLoggedin === true) {
      const data = {
        carts: [
          {
            amount: amount,
            totalPrice: product.price * amount,
            product: product
          }
        ],
        totalSummary: {
          sumAmount: amount,
          sumPrice: product.price * amount,
          asal: "now"
        }
      }
  
      navigate("/checkout", { state: { dataProps: data } })
    } else {
      localStorage.setItem('historyLink', "/details");
      alert("Silahkan login terlebih dahulu untuk lanjut belanja")
      navigate("/login")
    }

    // const data = {
    //   carts: [
    //     {
    //       amount: amount,
    //       totalPrice: product.price * amount,
    //       product: product
    //     }
    //   ],
    //   totalSummary: {
    //     sumAmount: amount,
    //     sumPrice: product.price * amount,
    //     asal: "now"
    //   }
    // }

    // navigate("/checkout", { state: { dataProps: data } })
  }


  return (
    <>
      <Navbar />
      <div className={Styles.main}>
        <div className={Styles.col1}>
          <img className={Styles.productex} src={Productex} alt="background gundam"></img>
        </div>
        <div className={Styles.col2}>
          <div className={Styles.col2row1}>
            <div className={Styles.col2name}>{product.name}</div>
            <div className={Styles.col2price}>Rp. {product.price}</div>
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
              <Row style={{ height: "100%", marginTop: "20px"}}>
                <Col xs={20} className='d-flex justify-content-between'>
                  <DashCircle size={20} color={"red"} onClick={() => reduceAmount()} />
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
