import "./Home.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { FaPlay } from "react-icons/fa";
const Home = () => {

    const [homeremedies, setHomeremedies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/homeremedy/homeremedylist")
            .then(response => {
                setHomeremedies(response.data.HomeRemedyList)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/product/productlist")
            .then(response => {
                setProducts(response.data.productList)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [yoga, setYoga] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/yoga/yogalist")
            .then(response => {
                setYoga(response.data.YogaList);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const navigate = useNavigate();
    const getStart = (yogaa) => {
        navigate("/getstart", { state: yogaa });
    }

    const viewmore = (remedy) => {
        navigate("/viewmore", { state: remedy });
    }

    const ProductView = (product) => {
        navigate("/ProductView", { state: product });
    }
    return (<>
        <Header />
        <div className="home">
            <div className="home-contain ">
                {/* -------------------- */}
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/home1.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/home2.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/HistoryImage.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* -------------------- */}
                <div className="home-homeremedies text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Home Remedies</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3">
                            {homeremedies.map((remedy, index) => <div key={index}>
                                {index < 10 ? <div className="remede-box d-flex flex-column align-items-center justify-content-start">
                                    <div className="remede-img m-1"><img src={remedy.imageUrl} alt="remedy" onClick={() => viewmore(remedy)} style={{ height: "100%", width: '100%' }} /></div>
                                    <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">{remedy.remedyName.slice(0, 25)}</span>
                                        <span className="d-flex flex-wrap m-2">{remedy.description.slice(0, 80)}</span>
                                        <button onClick={() => viewmore(remedy)} className="btnn text-white m-2">View More</button>
                                    </div>
                                </div> : ""}
                            </div>)}
                        </div>
                        <Link to="/homeremedy"><div className="remede-arrow p-4"></div></Link>
                    </div>
                </div>
                <div className="home-products text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Products</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3 mt-2">
                            {products.map((product, index) => <div key={index}>
                                {index < 10 ? <div className="remede-box d-flex flex-column align-items-center justify-content-center">
                                    <div className="remede-img m-1"><img src={product.imageUrl} onClick={() => ProductView(product)} alt="Product" style={{ height: "100%", width: '100%' }} /></div>
                                    <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">{product.title.slice(0, 25)}</span>
                                        <span className="fs-5 fw-bold ms-2 me-2" style={{ color: "var(--green)" }}>{product.price} Rs</span>
                                        <span className="d-flex flex-wrap m-2">{product.description.slice(0, 100)}</span>
                                        <div className="w-100 d-flex align-items-center justify-content-center">
                                            {products.map((r, i) => <div key={i} className="d-flex">
                                                {i < product.rating ? <span className="product-reting text-center m-2"></span> : ""}
                                            </div>)}
                                        </div>
                                        <div className="d-flex justify-content-evenly w-100">
                                            <button className="btnn addtocart-btn text-white m-2">Add To cart</button>
                                            <button className="btnn buynow-btn text-white m-2">Buy Now</button>
                                        </div>
                                    </div>
                                </div> : ""}
                            </div>)}
                        </div>
                        <Link to="/product"><div className="remede-arrow p-4"></div></Link>
                    </div>
                </div>
                <div className="home-yoga text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Yoga</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3">
                            {yoga.map((yogaa, index) => <div key={index}>
                                {index < 10 ? <div className="remede-box d-flex flex-column align-items-center justify-content-start">
                                    <div className="remede-img m-1"><img src={yogaa.imageUrl} alt="Yoga" style={{ height: "100%", width: '100%' }} /></div>
                                    <FaPlay className="youtube-icon" size={30} onClick={() => getStart(yoga)} />
                                    <div className="remede-value m-1 d-flex flex-column justify-content-evenly h-100 align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">{yogaa.yogaName.slice(0, 25)}</span>
                                        <span className="d-flex flex-wrap m-2">{yogaa.benefits.slice(0, 110)}</span>
                                        <button className="btnn text-white m-2" onClick={() => getStart(yogaa)}>Get Start</button>
                                    </div>
                                </div> : ""}
                            </div>)}
                        </div>
                        <Link to="/yoga"><div className="remede-arrow p-4"></div></Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Home;
