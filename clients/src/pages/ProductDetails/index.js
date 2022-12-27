import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Productex from "../../assets/productex.png";
import Button from "react-bootstrap/Button";

import { API_URL } from "../../utils/constants";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const ProductDetails = () => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: 0,
        stock: 0,
        spesification: {},
        description: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(API_URL + "products/1")
            setProduct(result.data);
        };

        fetchData();
    }, []);

    const addCart = () => {
        axios
            .get(API_URL + "carts?product.id=" + product.id)
            .then((res) => {
                if (res.data.length === 0) {
                    const cart = {
                        id: uuidv4(),
                        amount: 1,
                        totalPrice: product.price,
                        product: product
                    }

                    axios
                        .post(API_URL + "carts", cart)
                        .then((res) => {
                            alert("Sukses Masuk Keranjang " + product.name)
                        })
                        .catch((error) => {
                            console.log("Error yaa ", error);
                        });
                } else {
                    const cart = {
                        amount: res.data[0].amount + 1,
                        totalPrice: res.data[0].totalPrice + product.price,
                        product: product
                    }

                    axios
                        .put(API_URL + "carts/" + res.data[0].id, cart)
                        .then((res) => {
                            alert("Sukses Masuk Keranjang " + product.name)
                        })
                        .catch((error) => {
                            console.log("Error yaa ", error);
                        });
                }
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
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
                            <Button className={Styles.buynow}>
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
    )
}

export default ProductDetails;