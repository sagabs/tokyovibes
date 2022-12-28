import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CountdownTimer from "../../components/countdownTimer";
import "./style.css";

const Payment = () => {
  const OneDayInMS = 1 * 24 * 60 * 60 * 1000;
  const NowInMs = new Date().getTime();
  const dateTimeAfterOneDays = NowInMs + OneDayInMS;

  const location = useLocation()
  const { dataProps } = location.state
  const [DataPembayaran, setDataPembayaran] = useState(dataProps)
  const [Rekening, setRekening] = useState()
  const [Logo, setLogo] = useState()

  const atasNamaRekening = "PT. Tokoh Aksi Makmur";
  const tagihan = dataProps.total.toLocaleString("id-ID");

  useEffect(() => {
    if (dataProps.metodeBayar === "Sinarmas") {
      setRekening("1234-0098-9987773")
      setLogo("logosimas")
    } else if (dataProps.metodeBayar === "Mandiri") {
      setRekening("1234-0098-1000-2034")
      setLogo("logomandiri")
    } else if (dataProps.metodeBayar === "BCA") {
      setRekening("774-100323942")
      setLogo("logobca")
    }
  }, [])

  const caraPembayaran = [
    { description: "Masukkan nomor PIN ATM", key: 0 },
    { description: "Pilih Menu Transfer", key: 1 },
    { description: "Masukkan Nomor Rekening", key: 2 },
    { description: "Masukkan Jumlah Tagihan", key: 3 },
    { description: "Simpan Bukti Transfer", key: 4 },
  ];
  return (
    <Container fluid md={6} className="d-flex justify-content-center">
      <Row className="payment-page mt-5">
        <Col>
          <div className="d-grid text-center my-3 justify-content-center">
            <div>
              <div className="boldText title">Waktu Pembayaran</div>
            </div>
            <div>
              <div className="boldText date-title">
                <CountdownTimer targetDate={dateTimeAfterOneDays} />
              </div>
            </div>
          </div>
          <div className="payment-section ">
            <div className="payment-info mb-4">
              <Row className="mb-2">
                <Col>
                  <div className="boldText">Pembayaran Transfer</div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <div>
                    <img src={require("../../assets/img/logosimas.png")} alt={"Logo Bank Sinarmas"} className="imageBankLogo"></img>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <div>Nomor Rekening</div>
                  <div className="boldText">{rekening}</div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(rekening);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={require("../../assets/img/copy.png")} alt={"Salin"} className="copy"></img>
                    <span className="boldText salin ">Salin</span>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <div>Rekening Atas Nama</div>
                  <div className="boldText">{atasNamaRekening}</div>
                </Col>
                <Col>
                  <div className="d-none"></div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <div>Total Tagihan</div>
                  <div className="boldText">{tagihan}</div>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(tagihan);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={require("../../assets/img/copy.png")} alt={"Salin"} className="copy"></img>
                    <span className="boldText salin">Salin</span>
                  </div>
                </Col>
              </Row>
            </div>
            <Button className="buttonPay" style={{ backgroundColor: "#9b0e09", border: "0 none", borderRadius: "2rem" }}>
              Cek Status Pembayaran
            </Button>
          </div>

          <div className="payment-section mb-5">
            <div className="boldText mb-2">Cara Pembayaran Lewat ATM Bank Sinarmas</div>
            <ol>
              {caraPembayaran.map((cara) => {
                return <li key={cara.key}>{cara.description}</li>;
              })}
            </ol>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Payment;