import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import "./style.css"
import Header from '../../components/navbar/navbar'

const checkout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs={8}>
                        <Row>
                            <Col xs={3}>
                                <div >
                                    <img src={require("../../assets/img/gambar2.png")} className='imgCheckout' height={200} width={200} />
                                </div>
                            </Col>
                            <Col className='align-self-center'>
                                <div className='mb-1'>
                                    <b>Gawr Gura</b>
                                </div>
                                <div className='mb-1'>Hololive En</div>
                                <b>Rp. 500.000</b>
                            </Col>
                        </Row>
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
                                        Rp. 469.000
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={8}>
                                        Total Ongkos Kirim
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 60.000
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
                                        Rp. 500
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        Promo
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        -Rp. 25.000
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col style={{ fontWeight: "700" }}>
                                        Total
                                    </Col>
                                    <Col style={{ textAlign: "end" }}>
                                        Rp. 370.000
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default checkout
