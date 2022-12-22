import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Productex from "../../assets/productex.png";
import Button from "react-bootstrap/Button";

import { API_URL } from "../../utils/constants";
import axios from "axios";

const ProductDetails = () => {
    const [data, setData] = useState({ 
        id: "",
        name: "",
        price: "",
        stock: "",
        spesification: {},
        description: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(API_URL + "products/1")
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div className={Styles.main}>
            <div className={Styles.col1}>
                <img className={Styles.productex} src={Productex} alt="background gundam"></img>
            </div>
            <div className={Styles.col2}>
                <div className={Styles.col2row1}>
                    <div className={Styles.col2name}>{data.name}</div>
                    <div className={Styles.col2price}>Rp. {data.price}</div>
                </div>
                <div className={Styles.col2row1}>
                    <div className={Styles.col2name}>Detail Barang :</div>
                    <div className={Styles.col2list}>
                        <div className={Styles.col2data}>
                            <div className={Styles.col2datakey}>Kondisi</div>
                            <div className={Styles.col2datavalue}>: {data.spesification.condition}</div>
                        </div>
                        <div className={Styles.col2data}>
                            <div className={Styles.col2datakey}>Berat</div>
                            <div className={Styles.col2datavalue}>: {data.spesification.weight}g</div>
                        </div>
                    </div>
                </div>
                <div className={Styles.col2row1}>
                    <div className={Styles.col2name}>Keterangan :</div>
                    <div className={Styles.col2ket}>{data.description}</div>
                </div>
            </div>
            <div className={Styles.col3}>
                <div className={Styles.col3box}>
                    <div className={Styles.col3list}>
                        <div className={Styles.col3data}>
                            <div className={Styles.col3datakey}>Warna</div>
                            <div className={Styles.col3datavalue}>: {data.spesification.color}</div>
                        </div>
                        <div className={Styles.col3data}>
                            <div className={Styles.col3datakey}>Total stok</div>
                            <div className={Styles.col3datavalue}>: {data.stock}</div>
                        </div>
                        <Button className={Styles.buynow} type="submit">
                            Beli Sekarang
                        </Button>
                        <Button className={Styles.addcart} type="submit">
                            Tambah Keranjang
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;