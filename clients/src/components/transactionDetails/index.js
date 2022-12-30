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
import { Whatsapp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constants";
import axios from "axios";

const TransactionDetails = (props) => {
    const [DataTrx, setDataTrx] =  useState(props.data);
		const [Dots, setDots] =  useState(false)
		const navigate = useNavigate();

		useEffect(() => {
			setDataTrx(props.data)
			const fetchData = async () => {
				if(props.data.carts.length >  1){
					setDots(true)
				}else{
					setDots(false)
				}
			};
			fetchData();
		}, [props.data, Dots]);

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

		const BayarSekarang = () =>{
			navigate("/payment", { state: { dataProps: DataTrx, idTrx: DataTrx.id } });
		}

    return (
    <>
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter" fullscreen="sm-down" size="xl">
      <Modal.Body>
        <Row>
					<Container className="d-flex justify-content-between">
						<h5>No. Invoice: {DataTrx.noInv? DataTrx.noInv : "123180142"}</h5>
						<p>{DataTrx.date? DataTrx.date : "17 Agustus 1945"}</p>
					</Container>
					<Col xs={7}>
						<Container className="shadow py-3 mb-4 bg-white rounded">
							<Container>
								<Row className="mb-2"><h4> Detail Produk</h4></Row>
								<hr style={{margin:"0", padding:"0", marginBottom:"10px"}}/>
								<Row>
									<Carousel responsive={responsive} showDots={Dots}  arrows={false}> 
									{DataTrx.carts.map((item, index)=>(
										<Row>
											<Col xs={4}style={{paddingRight:"0"}}>	
												<img className="shadow-sm p-1 mb-3 bg-white rounded" src={require(`../../assets/img/${item.product.img}`)} width={100} height={100} alt="Pesanan Saya"/>
											</Col>
											<Col xs={8} style={{padding:"0"}} className="d-flex flex-column justify-content-center">
												<Container style={{padding:"0"}} cl>
													<Row><h5>{item.product.name}</h5></Row>
													<Row><span>{item.product.category}</span></Row>
													<Row>
														<Col xs={8}><span>{item.amount} * {item.product.price*(1-(item.product.promo/100))}</span></Col>
														<Col xs={4}><span>{item.amount*item.product.price*(1-(item.product.promo/100))}</span></Col>
													</Row>
												</Container>
											</Col>
										</Row>
									))}
									</Carousel>
								</Row>
							</Container>
						</Container>
						<Container className="shadow p-3 mb-2 bg-white rounded">
							<Row className="mb-2"><h4>Info Pengiriman</h4></Row>
							<hr style={{margin:"0", padding:"0", marginBottom:"10px"}}/>
							<Row>
								<Col xs={3}>
								<p style={{marginBottom:5, fontWeight:500}}>No. Resi</p>
								<p style={{marginBottom:5, fontWeight:500}}>Nama Penerima</p>
								<p style={{marginBottom:5, fontWeight:500}}>Kurir</p>
								<p style={{marginBottom:5, fontWeight:500}}>Alamat</p>
								</Col>
								<Col xs={1}>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
								</Col>
								<Col xs={8}>
									<p style={{marginBottom:5}}>{DataTrx.noResi? DataTrx.noResi : "Belum bayar"}</p>
									<p style={{marginBottom:5}}>{DataTrx.namaTerima? DataTrx.namaTerima : "Seseorang"}</p>
									<p style={{marginBottom:5}}>{DataTrx.kurir}</p>
									<p style={{marginBottom:5}}>{DataTrx.alamat}</p>
								</Col>
							</Row>
						</Container>	
					</Col>
					<Col xs={5}>
						<Container className="shadow px-3 py-2 bg-white rounded">
							<h4>Pembayaran</h4>
							<hr style={{margin:"0", padding:"0", marginBottom:"10px"}}/>
							<Row>
								<Col xs={3}>
									<p style={{marginBottom:5, fontWeight:500}}>Transfer</p>
									<p style={{marginBottom:5, fontWeight:500}}>Barang</p>
									<p style={{marginBottom:5, fontWeight:500}}>Ongkir</p>
									<p style={{marginBottom:5, fontWeight:500}}>Lain-lain</p>
								</Col>
								<Col xs={1}>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
									<p style={{marginBottom:5, fontWeight:500}}>:</p>
								</Col>
								<Col xs={8}>
									<p style={{marginBottom:5}}>{DataTrx.metodeBayar}</p>
									<p style={{marginBottom:5}}>Rp. {DataTrx.total-DataTrx.ongkir-1000}</p>
									<p style={{marginBottom:5}}>Rp. {DataTrx.ongkir}</p>
									<p style={{marginBottom:5}}>Rp. 1000</p>			
								</Col>								
							</Row>
							<hr style={{margin:"0", padding:"0", marginBottom:"10px"}}/>
							<Row>
								<Col xs={4}><p style={{marginBottom:5, fontWeight:500}}>Total</p></Col>
								<Col xs={8}><p style={{marginBottom:5}}>Rp. {DataTrx.total}</p></Col>
							</Row>
						</Container>
						<Container className="d-flex flex-column align-items-center">
							{DataTrx.status==="Belum Bayar" ? 
							<Button style={{width:"200px"}} className="mt-3" variant="outline-success" onClick={BayarSekarang}>Cara Bayar</Button> : null} 
							<Button href="https://wa.me/6288221500153" className="mt-3" style={{width:"200px", backgroundColor:"#12C824", border:"none"}}><Whatsapp size={25} className="me-2"/>Chat Penjual</Button>
						</Container>
					</Col>
				</Row>	
      </Modal.Body>
    </Modal>
  </>
    )
}

export default TransactionDetails;
