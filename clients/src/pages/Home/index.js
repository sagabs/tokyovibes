import Carousel from "react-multi-carousel";
import { Card, Container, Col, Row } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css";
import "./style.css"
function home() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <h2 style={{ marginLeft: 40 }}>Promo</h2>
            {/* //Carousel 1 */}
            <Carousel responsive={responsive} showDots={true} keyBoardControl={true} arrows={false} autoPlay={true} infinite={true}>
                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }} className="d-flex justify-content-center">
                    <Card style={{ width: '35rem', height: '15rem', borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row>
                            <Col xs={7}>
                                <Card.Body style={{ marginTop: 7 }}>
                                    <Card.Title style={{ textAlign: "center" }}>Card Title</Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                        <b>Rp. 500.000</b>
                                    </Card.Text>
                                    <Card.Text style={{ textAlign: "center" }}>
                                        <b>Rp. 400.000</b>
                                    </Card.Text>
                                </Card.Body>

                            </Col>
                            <Col style={{ marginTop: 20, marginRight: 10, paddingLeft: 15 }}>
                                <img src={require("../../assets/img/gambar1.jpg")} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Carousel>

            <div style={{ margin: 20 }}>
                <h2 className="mb-5 mt-2" >Special Hololive Sell</h2>
                <div >
                    <Carousel responsive={responsive2} >
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>

                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Carousel>
                </div>
            </div >

            <div style={{ margin: 20, verticalAlign: "middle" }}>
                <h2 className="mb-5 mt-2" style={{ marginLeft: 10 }}>List Action Figure</h2>
                <Row className="mb-5" >
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-5" >
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={{ padding: 0 }}>
                        <div className="d-flex justify-content-center mb-4"  >
                            <Card className="item1" style={{ width: '17rem', border: "none", borderRadius: 20, background: "#3E3E3E", }}>
                                <Card.Img variant="top" height={"260"} src={require("../../assets/img/gambar1.jpg")} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} />
                                <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                    <div>Gawr Gura</div>
                                    <div className="mt-1">Hololive</div>
                                    <div className="mt-1" style={{ fontWeight: "700" }}>Rp. 500</div>
                                    <div className="mt-1 mb-1">Terjual 500++</div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default home;