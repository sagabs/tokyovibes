import React from 'react'
import Styles from './index.module.css'
import Navbar from '../../components/navbar/navbar'
import Card from 'react-bootstrap/Card';

const Keranjang = () => {
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
    <div className={Styles.main}>
        <div className={Styles.child1}>
            <div>
                <h3 className="mb-3">Keranjang</h3>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <span>Pilih Semua</span>
                    <span style={{justifyContent:"flex-end"}}>Hapus Semua</span>
                </div>
                <hr style={{margin:"0"}}></hr>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          </Card.Body>
          </Card>
           </div>
        </div>
        <div className={Styles.child2}>tes</div>
    </div>
    </>
  )
}


export default Keranjang