import React from 'react'
import Styles from './index.module.css'
import Navbar from '../../components/navbar/navbar'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/logo.png";
import { DashCircle, Trash, PlusCircle } from 'react-bootstrap-icons';
import {useState, useEffect } from "react";

const Keranjang = () => {
  const [total, setTotal] = useState({totalbarang: 0, totalharga: 0});
  
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { jumlah } = total;

    const res = value.split(',', 2)

    if(checked){
      setTotal({
        totalbarang: total.totalbarang + Number(res[0]),        
        totalharga: total.totalharga + Number(res[0]*res[1])        
      })
    }

    else{
      setTotal({
        totalbarang: total.totalbarang - Number(res[0]),        
        totalharga: total.totalharga - Number(res[0]*res[1]) 
      })
    }
  }

  const data = [
    {
      "gambar":"tes",
      "namaBarang":"Gawr Gura",
      "kategori":"Hololive gen EN",
      "harga":100000,
      "jumlah":20
    },
    {
      "gambar":"tes",
      "namaBarang":"Anjay Mabar",
      "kategori":"Nasi Goreng",
      "harga":200000,
      "jumlah":10
    },
    {
      "gambar":"tes",
      "namaBarang":"Pokemon Air Tenang Sunyi",
      "kategori":"Pokemon",
      "harga":10002,
      "jumlah":30
    }
  ]

  return (
    <>
    <Navbar />
    <Container fluid>
      <Row>
        <Col className={Styles.child1} xs={7}>
          <Container>
            <h3>Keranjang</h3>
            <Container className='d-flex justify-content-between p-0'>
              <p style={{margin:"0", color:"green"}}>Pilih Semua</p>
              <p style={{margin:"0", color:"red"}}>Hapus Semua</p>
            </Container>
            <hr style={{margin:"0"}}/>
          </Container>
          <Container className='mt-2'>
            {data?.map((item, index) => (
              <Card key={index} className={Styles.card}>
              <Row>
                <Col className="py-2 ps-4" xs={3}>
                  <Card.Img style={{height:"150px", width:"150px", maxWidth: "100%"}} src={Logo}/> 
                </Col>
                <Col>
                  <Card.Body styles>
                    <Row Row className='py-1'>
                      <Col xs={11}><Card.Title style={{margin:"0"}}>{item.namaBarang}</Card.Title></Col>
                      <Col>
                        <Form.Check aria-label="option 1" 
                        id={index} name="barang" 
                        value={[item.jumlah, item.harga]}
                        onChange={handleChange}/>
                      </Col>   
                    </Row>
                    <Row className='py-3'>
                      <Card.Text styles={{margin:"0"}}>{item.kategori}</Card.Text>
                    </Row>
                    <Row style={{height:"100%"}}>
                      <Col><span style={{margin:"0"}}>{item.harga}</span></Col>
                      <Col xs={4} className='d-flex justify-content-between'>
                        <Trash size={20} color={"red"}/>
                        <hr/>
                        <DashCircle size={20} color={"red"}/>
                        <span>{item.jumlah}</span>
                        <PlusCircle size={20} color={"green"}/>
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
                <hr style={{margin:"15px 0px"}}></hr>
              </Container>
              <Container>
                <Row style={{paddingBottom:"15px"}}>
                  <Col><span className={Styles.font}>Total Barang</span></Col>
                  <Col><span className={Styles.font}>{total.totalbarang}</span></Col>
                </Row>
                <Row>
                  <Col><span className={Styles.font}>Total Harga</span></Col>
                  <Col><span className={Styles.font}>Rp. {total.totalharga}</span></Col>
                </Row>
                <hr style={{margin:"15px 0px"}}></hr>
                <Row>
                  <Button variant="success" style={{borderRadius:"20px"}}>Bayar</Button>
                </Row>
            </Container>
          </Card>
        </Col>
      </Row>   
    </Container>
    </>
  )
}


export default Keranjang