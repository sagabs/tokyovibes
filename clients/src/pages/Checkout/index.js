import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./style.css"
import Header from '../../components/navbar/navbar'
import axios from 'axios'
import Carousel from "react-multi-carousel";
import { API_URL } from '../../utils/constants'

const Checkout = () => {

    const [productdiskon, setproductdiskon] = useState()
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [product, setProduct] = useState([{
        amount: 0,
        totalPrice: 0,
        product: {
            id: 0,
            name: "",
            price: 0,
            stock: 0,
            spesification: {
                condition: "",
                color: "",
                weight: 0
            },
            description: ""
        },
        checked: ""
    }])

    const [producttotal, setProducttotal] = useState([{
        sumAmmount: 0,
        sumPrice: 0,
        sumPromo: 0,
        id: 0
    }])

    const pendiskonan = (data) => {
        let diskon1 = 0;
        data.forEach(item => {
            // diskon1 = diskon1 + (item.price * (item.promo / 100))
            diskon1 = diskon1 + (item?.totalPrice * (item?.product.promo / 100))
        })
        return diskon1
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(API_URL + "carts")
            setProduct(result.data);

            const resulttotal = await axios.get(API_URL + "CartSummary/1")
            setProducttotal(resulttotal.data);
        };
        const newdiskon = pendiskonan(product)
        setproductdiskon(newdiskon)
        fetchData();
        // pendiskonan();
    }, [product, productdiskon])

    return (
        <div>
            <Header />
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs={8} >
                        <div style={{ paddingRight: 100 }}>
                            <Carousel responsive={responsive} showDots={true} arrows={false}>
                                {product.map((item, index) => (
                                    <Row>
                                        <Col xs={4}>
                                            <div className='text-center' >
                                                <img src={require("../../assets/img/gambar2.png")} className='imgCheckout' height={200} width={200} alt={"Image Checkout"} draggable="false"></img>
                                            </div>
                                        </Col>
                                        <Col className='align-self-center ps-0'>
                                            <div className='mb-1'>
                                                <b>{item.product.name}</b>
                                            </div>
                                            <Row>
                                                <Col xs={9}>Hololive En</Col>
                                                <Col style={{ textAlign: "end", paddingRight: 52 }}> x{item.amount}</Col>
                                            </Row>
                                            {/* <div className='mb-1'>Hololive En
                                                
                                                    <span className='text-end'>x{item.amount}</span>
                                            </div> */}
                                            <p style={{ margin: 0, textAlign: "end", paddingRight: 40 }}>Rp. {item.product.price} </p>
                                            {/* <div>Harga {item.totalPrice * item.product.promo / 100}</div> */}
                                            <p hidden></p>
                                        </Col>
                                    </Row>
                                ))}
                            </Carousel>
                        </div>
                        <div>
                            <Card className="mt-5 cardCheckoutlg">
                                <Card.Body>
                                    <Card.Title>Alamat</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dignissim consectetur feugiat sed varius posuere. Tortor feugiat facilisi a, nam semper proin ut.
                                    </Card.Text>
                                    <div className='text-end'>
                                        <Button className='btn btn-danger btn-sm btnUbahAlamat' >Ubah Alamat</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Row className="mt-5 ">
                            <Col>
                                <Card className="cardCheckout">
                                    <Card.Body>
                                        <Card.Title>Metode Pembayaran</Card.Title>
                                        <input type={"radio"} name="checkPembayaran" value={"BankSinarmas"} />
                                        <label>Bank Sinarmas</label><br />
                                        <input type={"radio"} name="checkPembayaran" value={"Mandiri"} />
                                        <label>Mandiri</label><br />
                                        <input type={"radio"} name="checkPembayaran" value={"BCA"} />
                                        <label>BCA</label>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="cardCheckout">
                                    <Card.Body>
                                        <Card.Title>Metode Pengiriman</Card.Title>
                                        <input type={"radio"} name="checkPengiriman" value={"Ninja"} />
                                        <label>Ninja</label><br />
                                        <input type={"radio"} name="checkPengiriman" value={"JNT"} />
                                        <label>JNT</label><br />
                                        <input type={"radio"} name="checkPengiriman" value={"JNE"} />
                                        <label>JNE</label>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem', borderColor: "red", borderRadius: 15 }}>
                            <Card.Body>
                                <Card.Title className='mt-3 detailTransaksiText'>Detail Transaksi</Card.Title>
                                <br />
                                <Row>
                                    <Col>
                                        Total Barang
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. {producttotal.sumPrice}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        Total Ongkos Kirim
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 18.000
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        Asuransi Pengiriman
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 400
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Biaya Admin
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 600
                                    </Col>
                                </Row>
                                <hr className='hrCheckout' />
                                <Row>
                                    <Col>
                                        Promo
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        -Rp. {productdiskon}
                                    </Col>
                                </Row>
                                <hr className='hrCheckout' />
                                <Row>
                                    <Col style={{ fontWeight: "700" }}>
                                        Total
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 370.000
                                    </Col>
                                </Row>
                                <Link to="/payment"><Button className='w-100 mt-5 mb-4 btnUbahAlamat'>Bayar Sekarang</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout
