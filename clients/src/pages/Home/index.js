import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../../components/navbar/navbar";
import { API_URL } from "../../utils/constants";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ReactLoading from "react-loading";
import { SettingsPromo, SettingsSpSell } from "../../components/SettingCarouselHome";
import ReactPaginate from "react-paginate";
import { rupiahLocale } from "../../utils/localeString";

const Home = () => {
  const [productpromo, setProductpromo] = useState([
    {
      id: "",
      name: "",
      price: 0,
      stock: 0,
      spesification: {},
      description: "",
    },
  ]);

  const [productspecialsell, setProductspecialsell] = useState([
    {
      id: "",
      name: "",
      price: 0,
      stock: 0,
      spesification: {},
      description: "",
    },
  ]);

  const [product, setProduct] = useState([
    {
      id: "",
      name: "",
      price: 0,
      stock: 0,
      spesification: {},
      description: "",
    },
  ]);

  const [allProduct, setAllProduct] = useState([
    {
      id: "",
      name: "",
      price: 0,
      stock: 0,
      spesification: {},
      description: "",
    },
  ]);

  const [params, setParams] = useState("");
  const [filteredAllProduct, setFilteredAllProduct] = useState([]);
  const [paginateAllProduct, setPaginateAllProduct] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const limit = 12;

  const [pageSearchCount, setPageSearchCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const resultpromo = await axios.get(API_URL + "products?categorysell=promo");
      setProductpromo(resultpromo.data);

      const resultspecialsell = await axios.get(API_URL + "products?categorysell=specialsell");
      setProductspecialsell(resultspecialsell.data);

      const result = await axios.get(API_URL + `products?_page=1&_limit=${limit}`);
      setProduct(result.data);

      const allData = await axios.get(API_URL + `products`);
      setAllProduct(allData.data);

      const total = allData.data.length;
      setPageCount(Math.ceil(total / limit));
    };
    fetchData();
  }, []);

  const fetchAllProduct = async (currentPage) => {
    const result = await axios.get(API_URL + `products?_page=${currentPage}&_limit=${limit}`);
    return result.data;
  };

  const handleClickPaginate = async (data) => {
    let currentPage = data.selected + 1;
    const paginateData = await fetchAllProduct(currentPage);
    setProduct(paginateData);
  };

  const getParams = (s) => {
    setParams(s);

    if (s !== undefined || s !== "") {
      const filteredAllProduct = allProduct.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(s.toLowerCase());
      });
      setFilteredAllProduct(filteredAllProduct);

      const total = filteredAllProduct.length;
      setPageSearchCount(Math.ceil(total / limit));

      const paginateSearchProduct = filteredAllProduct.slice(0, limit)
      setPaginateAllProduct(paginateSearchProduct);
    } else {
      setFilteredAllProduct(product);
    }
  };

  const fetchSearchProduct = async (currentPage) => {
    const data = filteredAllProduct.slice((currentPage - 1) * limit, limit * currentPage)
    return data;
  };

  const handleClickSearchPaginate = async (data) => {
    let currentPage = data.selected + 1;
    const paginateData = await fetchSearchProduct(currentPage);
    setPaginateAllProduct(paginateData);
  };

  return (
    <>
      <Navbar searchParams={getParams} />
      {product[0]?.img ? (
        params.length > 1 ? (
          <div>
            {
              paginateAllProduct.length > 0 ? (
                <>
                  <div style={{ margin: 20, verticalAlign: "middle" }}>
                    <h2 className="mb-3 mt-2" style={{ marginLeft: 90 }}>
                      List Action Figure
                    </h2>
                    <div className="d-flex flex-wrap justify-content-center ">
                      {paginateAllProduct.map((item, index) => (
                        <div className="mb-4 cardProductAll">
                          <Link to={`/details/${item.id}`} className="linkCard" draggable={false}>
                            <Card className="item1" style={{ width: "17rem", border: "none", borderRadius: 20, background: "#3E3E3E", padding: 0 }}>
                              {item?.img ? <Card.Img variant="top" height={"260"} src={require(`../../assets/img/${item?.img}`)} style={{ borderRadius: 15, padding: 0 }} /> : <span>Loading...</span>}{" "}
                              <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                                <div>{item.name}</div>
                                <div className="mt-1">Hololive</div>
                                <div className="mt-1" style={{ fontWeight: "700" }}>
                                  {item.price}
                                </div>
                                <div className="mt-1 mb-1">Terjual 500++</div>
                              </div>
                            </Card>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageSearchCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handleClickSearchPaginate}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
                </>
              ) : (
                <>
                  <div style={{ margin: 20, verticalAlign: "middle" }}>
                    <h2 className="mb-3 mt-2" style={{ marginLeft: 90 }}>
                      List Action Figure
                    </h2>
                    <div className="d-flex flex-wrap justify-content-center ">
                      Tidak dapat menemukan barang yang anda cari.
                    </div>
                  </div>
                </>
              )
            }
          </div>
        ) : (
          <div>
            <div className="containerPromo">
              <h2 className=" my-3">Promo</h2>
              <Slider {...SettingsPromo}>
                {productpromo.map((item, index) => (
                  <div className="d-flex justify-content-center mb-2">
                    <Link to={`/details/${item.id}`} className="linkCard" draggable={false}>
                      <Card style={{ width: "35rem", height: "15rem", paddingTop: 0, borderRadius: 20, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                        <Row className=" h-100">
                          <Col xs={7} className="align-self-center p-3">
                            <Card.Body style={{ maxWidth: "100%", maxHeight: "100%", padding: "0px 0px 0px 0px" }}>
                              <div className="text">
                                <Card.Title style={{ textAlign: "center" }}>{item.name}</Card.Title>
                              </div>
                              <Card.Text className="textPromo" style={{ textAlign: "center" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                              <Card.Text style={{ textAlign: "center", textDecoration: "line-through", color: "red" }}>
                                <b>Rp. {rupiahLocale(item.price)}</b>
                              </Card.Text>
                              <Card.Text style={{ textAlign: "center" }}>
                                <b>Rp. {rupiahLocale(item.price * (1 - item.promo / 100))}</b>
                              </Card.Text>
                            </Card.Body>
                          </Col>
                          <Col style={{ paddingLeft: 20, paddingRight: 5 }} className="align-self-center">
                            {item?.img ? <Image src={require(`../../assets/img/${item?.img}`)} alt={"Gambar1"} height={200} width={200} style={{ borderRadius: 20 }}></Image> : <span>Loading...</span>}
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
            <div style={{ margin: 30, verticalAlign: "middle" }}>
              <div style={{ marginLeft: 60, marginRight: 60 }}>
                <h2 className="my-5">Special Hololive Sell</h2>
                <Slider {...SettingsSpSell}>
                  {productspecialsell.map((item, index) => (
                    <Col style={{ padding: 0 }}>
                      <div className="d-flex justify-content-center mb-4">
                        <Link to={`/details/${item.id}`} className="linkCard" draggable={false}>
                          <Card className="item1" style={{ width: "17rem", border: "none", borderRadius: 20, background: "#3E3E3E", padding: 0 }}>
                            {item?.img ? <Card.Img variant="top" height={"260"} src={require(`../../assets/img/${item?.img}`)} style={{ borderRadius: 15, paddingRight: 0, paddingLeft: 0 }} /> : <span>Loading ...</span>}
                            <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                              <div className="items-name text">{item.name}</div>
                              <div className="mt-1">Hololive</div>
                              <div className="mt-1" style={{ fontWeight: "700" }}>
                                Rp{rupiahLocale(item.price)}
                              </div>
                              <div className="mt-1 mb-1">Terjual 500++</div>
                            </div>
                          </Card>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Slider>
              </div>
            </div>

            <div style={{ margin: 20, verticalAlign: "middle" }}>
              <h2 className="mb-3 mt-2" style={{ marginLeft: 90 }}>
                List Action Figure
              </h2>
              <div className="d-flex flex-wrap justify-content-center ">
                {product.map((item, index) => (
                  <div className="mb-4 cardProductAll">
                    <Link to={`/details/${item.id}`} className="linkCard" draggable={false}>
                      <Card className="item1" style={{ width: "17rem", border: "none", borderRadius: 20, background: "#3E3E3E", padding: 0, margin: "0px 5px" }}>
                        {item?.img ? <Card.Img variant="top" height={"260"} src={require(`../../assets/img/${item?.img}`)} style={{ borderRadius: 15, padding: 0 }} /> : <span>Loading...</span>}{" "}
                        <div style={{ margin: "10px 20px 10px 20px", color: "white" }}>
                          <div className="items-name text">{item.name}</div>
                          <div className="mt-1">Hololive</div>
                          <div className="mt-1" style={{ fontWeight: "700" }}>
                            {rupiahLocale(item.price)}
                          </div>
                          <div className="mt-1 mb-1">Terjual 500++</div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handleClickPaginate}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        )
      ) : (
          <div className="vh-100" style={{ marginTop: -120, paddingTop: 400 }}>
            <div className="d-flex justify-content-center">
              <ReactLoading type="spin" color="#0000FF" height={"5%"} width={"5%"} />
            </div>
          </div>
      )}
    </>
  );
};

export default Home;