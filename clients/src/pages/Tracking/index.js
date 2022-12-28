import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './style.css'

const Tracking = () => {

    const dataDummy = [
        { id: 1, nama: "HololiveEN", status: "bayar", total: 5000000 },
        { id: 2, nama: "HololiveID gawr", status: "dikirim", total: 2000000 },
        { id: 3, nama: "HololiveEN Ollie", status: "diterima", total: 4100000 }
    ]

    const [cards, setCards] = useState(dataDummy);
    const [currentCard, setCurrentCard] = useState("all");

    const handleBtns = (e) => {
        let word = e.target.value;
        setCurrentCard(word);
    };

    useEffect(() => {
        if (currentCard === "all") {
            setCards(dataDummy);
        } else {
            const filtered = dataDummy.filter((item) => {
                return (
                    item.status === currentCard || item.status.includes(currentCard)
                );
            });
            setCards(filtered);
        }
    }, [currentCard]);

    const checkStatus = (e) => {
        if (e === "bayar") {
            return (
                <div>
                    12 Agustus 1990
                    <span className='spanFilter1'> Bayar</span>
                </div>
            )
        } else if (e === "dikirim") {
            return (
                <div>
                    12 Agustus 1990
                    <span className='spanFilter2'> Dikirim</span>
                </div>
            )
        } else if (e === "diterima") {
            return (
                <div>
                    12 Agustus 1990
                    <span className='spanFilter3'> Diterima</span>
                </div>
            )
        }
    }


    return (
        <>
            <div>
                <Row className='mt-3'>
                    <Col xs={3}>
                    </Col>
                    <Col>
                        <h2>Daftar Transaksi</h2>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3}>
                        <div className='contentLeft'>
                            <p className='text-center'>Ichigaya Naruto</p>
                            <div className='text-center'>
                                <img src={require('../../assets/img/produk1.jpg')} height={100} width={100} className='rounded-circle center-block' /> <br />
                                <div className='mt-3'>
                                    <a href='#' >Home</a> <br />
                                </div>
                                <div className='mt-3'>
                                    <a href='#'>Profil Saya</a> <br />
                                </div>
                                <div className='mt-3'>
                                    <a href='#'>Pengaturan</a><br />
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xs={8} className='box2'>
                        <Container >
                            <Row className='contentButton'>
                                <div className='justify-content-between d-flex'>
                                    <Button className='btnFilter' onClick={handleBtns} value="all">Semua </Button>
                                    <Button className='btnFilter' onClick={handleBtns} value="bayar" >Bayar </Button>
                                    <Button className='btnFilter' onClick={handleBtns} value="dikirim" >Dikirim </Button>
                                    <Button className='btnFilter' onClick={handleBtns} value="diterima" >Diterima </Button>
                                    <Button className='btnFilter' onClick={handleBtns} value="dinilai" >Dinilai </Button>
                                </div>
                            </Row>
                            <Row>
                                <div className='contentTransaksi mt-4'>
                                    {cards.map((item, index) =>
                                    (<>
                                        <Row key={item.id}>
                                            <Col className='imgColTransaksi' xs={2} >
                                                <img src={require("../../assets/img/gambar2.png")} className="imgTransaksi" draggable={false} width={160} height={160} />
                                            </Col>
                                            <Col className='cardColTransaksi'>
                                                <Row>
                                                    <Col>
                                                        {checkStatus(item.status)}
                                                    </Col>
                                                    <Col style={{ textAlign: "end" }}>
                                                        <div>
                                                            Nomor : 081254961298
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <div>
                                                            {item.nama}
                                                        </div>
                                                    </Col>
                                                    <Col style={{ textAlign: "end" }}>
                                                        <div>
                                                            Rp. {item.total}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </>
                                    ))}
                                </div>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Tracking;
