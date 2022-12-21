import Carousel from "react-multi-carousel";
import { Card, Button, Col, Row } from "react-bootstrap"
import "react-multi-carousel/lib/styles.css";
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
            slidesToSlide: 2
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
            <h2>Promo</h2>
            <Carousel responsive={responsive}>
                <div style={{ margin: 20 }}>
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
                                <img src={require("../../assets/img/gambar1.jpg")} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }}>
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
                                <img src={require("../../assets/img/gambar1.jpg")} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }}>
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
                                <img src={require("../../assets/img/gambar1.jpg")} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }}>
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
                                <img src={require("../../assets/img/gambar1.jpg")} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div style={{ margin: 20 }}>
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
                                <img src={require("../../assets/img/gambar1.jpg")} height={200} width={200} style={{ borderRadius: 20 }}></img>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Carousel>;
        </div>
    )
}

export default home;