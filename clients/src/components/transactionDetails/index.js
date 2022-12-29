import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./index.module.css";
import Productex from "../../assets/productex.png";
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { API_URL } from "../../utils/constants";
import axios from "axios";

const TransactionDetails = (props) => {
    const [DataTrx, setDataTrx] =  useState(props.data);

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

    return (
    <>
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <Container className="100vw">
					<Col>
						<Container>
							<Container>
								<Row><span> Detail Produk</span></Row>
								<Row>
									<Carousel responsive={responsive} showDots={true} arrows={false}>
									{DataTrx.carts.map((item, index)=>(
										<Container>
											<Col>	
												<img src={require(`../../assets/img/${item.product.img}`)} alt="Pesanan Saya"/>
											</Col>
											<Col>
												<Container>
													<Row><span>{item.product.name}</span></Row>
													<Row></Row>
													<Row></Row>
												</Container>
											</Col>
										</Container>
									))}
									</Carousel>
								</Row>
							</Container>
						</Container>	
					</Col>
					<Col></Col>
				</Container>	
      </Modal.Body>
    </Modal>
        {/* <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={Styles.main}>
                    <div className={Styles.body}>
                        <div className={Styles.invoice}>No. Invoice : ADS4W35FD</div>
                    <div className={Styles.details}>
                        <div className={Styles.productdelivery}>
                            <div className={Styles.product}>
                                <div className={Styles.producttitle}>
                                    Detail Product
                                </div>
                                <Carousel responsive={responsive} showDots={true} arrows={false}>
                                    {transaction.carts.map((item, index) =>
                                    (
                                        <>
                                            <div className={Styles.productdetails}>
                                                <img className={Styles.productex} src={Productex} alt="background gundam"></img>
                                                <div className={Styles.productdetailsdata}>
                                                    <div className={Styles.productname}> {item.product.name} </div>
                                                    <div className={Styles.productcategory}> Anime </div>
                                                    <div className={Styles.productprice}>
                                                        <div className={Styles.productquantity}> {item.amount} x Rp. {item.product.price} </div>
                                                        <div className={Styles.totalprice}>Total : Rp. {item.totalPrice}</div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </>
                                    ))}
                                </Carousel>
                            </div>
                            <div className={Styles.delivery}>
                                <div className={Styles.deliverytitle}>
                                    Info Pengiriman
                                </div>
                                <div> No Resi : 1720712497 </div>
                                <div> Nama Penerima : Hasanudin </div>
                                <div> Kurir : JNE </div>
                                <div> Alamat : Jl. Sudirman No. 33 RT.009/RW.007 </div>
                            </div>
                        </div>
                        <div className={Styles.paymentcontact}>
                            <div className={Styles.payment}>
                                <div className={Styles.paymenttitle}>
                                    Pembayaran
                                </div>
                                <div> Metode : COD </div>
                                <hr></hr>
                                <div> Barang : Rp. 1000000 </div>
                                <div> Ongkir : Rp. 30000 </div>
                                <br></br>
                                <div className={Styles.totalpayment}> Total Pembayaran : Rp. 1030000 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
        </Modal> */}
        </>
    )
}

export default TransactionDetails;
