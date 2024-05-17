import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
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

    const addToCart = (productId) => {
        if (localStorage.getItem('userId')) {
            axios.post("http://localhost:3005/cart/addToCart", { userId: localStorage.getItem("userId"), productId, quantity: 1 })
                .then(response => {
                    toast.success(response.data.message);
                }).catch(err => {
                    toast.danger("Already added this product");
                });
        }
        else {
            toast.error("please SignIn and add items in your cart");
        }
    }

    const navigate = useNavigate();
    const ViewMore = (remedy) => {
        navigate("/ViewMore", { state: remedy });
    }
    const ProductView = (product) => {
        navigate("/ProductView", { state: product });
    }
    const getStart = (yoga) => {
        navigate("/getstart", { state: yoga });
    }

    return (<>
        <ToastContainer />
        <div className="home">
            <div className="home-contain ">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/home1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/home2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <h3 className="text-center fw-bold my-4">Homeremedy</h3>
                <div className="container-fluid text-center gap-5 d-flex flex-nowrap overflow-auto overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    {homeremedies.map((remedy, index) => <div key={index} className="mb-4 mt-1 card shadow" id="view_hover" style={{ width: "20rem", flex: "0 0 auto" }}>
                        <img src={remedy.imageUrl} style={{ height: "220px", cursor: "pointer" }} onClick={() => ViewMore(remedy)} className="ms-1 remede-img card-img-top p-1" alt="..." />
                        <i className="youtube-icon bg-white text-dark w-25 view" >ViewMore</i>
                        <div className="card-body m-0 p-1 px-3">
                            <h4 className="card-title fs-6 fw-bold p-0 m-0">{remedy.remedyName.slice(0, 30)}</h4>
                            <p className="card-text p-0 m-0 mt-3" style={{ fontSize: "0.7rem" }}>{remedy.description.slice(0, 80)}</p>
                            <button className="fs-6 btnn text-white my-3" onClick={() => ViewMore(remedy)}>View More</button>
                        </div>
                    </div>)}
                </div>
                <h3 className="text-center fw-bold mb-4 u">Medicine</h3>
                <div className="container-fluid text-center gap-5 d-flex flex-nowrap overflow-auto overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    {products.map((product, index) => <div key={index} className="mb-4 mt-1 card shadow" id="view_hover" style={{ width: "20rem", flex: "0 0 auto" }}>
                        <img src={product.imageUrl} style={{ height: "220px", cursor: "pointer" }} onClick={() => ProductView(product)} className="ms-1 remede-img card-img-top p-1" alt="..." />
                        <i className="youtube-icon bg-white text-dark w-25 view" >ViewMore</i>
                        <div className="card-body m-0 p-1 px-3">
                            <h4 className="card-title fs-6 fw-bold p-0 m-0">{product.title.slice(0, 25)}</h4>
                            <h4 className="card-title fs-6 fw-bold p-0 m-0 mt-3" style={{ color: "var(--green)" }}>{product.price} Rs</h4>
                            <p className="card-text p-0 m-0 mt-3" style={{ fontSize: "0.7rem" }}>{product.description.slice(0, 100)}</p>
                            <div className="d-flex justify-content-around p-0 my-3">
                                <button style={{ fontSize: ".8rem" }} className="btnn addtocart-btn p-0 m-0 py-2 px-0" onClick={() => addToCart(product.id)}>Add To cart</button>
                                <button style={{ fontSize: ".8rem" }} className="btnn buynow-btn text-white m-0 p-0 py-2 px-0">Buy Now</button>
                            </div>
                        </div>
                    </div>)}
                </div>
                <h3 className="text-center fw-bold mb-4">Yoga</h3>
                <div className="container-fluid text-center d-flex gap-5 flex-nowrap overflow-auto overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    {yoga.map((yogaa, index) => <div key={index} className="mb-4 mt-1 card shadow" id="view_hover" style={{ width: "20rem", flex: "0 0 auto" }}>
                        <img src={yogaa.imageUrl} style={{ height: "220px", cursor: "pointer" }} onClick={() => getStart(yogaa)} className="ms-1 remede-img card-img-top p-1" alt="..." />
                        <FaPlay className="youtube-icon p-2 view" onClick={() => getStart(yogaa)} />
                        <div className="card-body m-0 p-1">
                            <h4 className="card-title fs-6 fw-bold p-0 m-0">{yogaa.yogaName.slice(0, 28)}</h4>
                            <p className="card-text p-0 m-0 mt-3" style={{ fontSize: "0.9rem" }}>{yogaa.benefits.slice(0, 100)}</p>
                            <button className="fs-6 btnn text-white my-3" onClick={() => getStart(yogaa)}>Get Start</button>
                        </div>
                    </div>)}
                </div>
                <div className="box d-flex flex-nowrap overflow-auto overflow-x-scroll" style={{ scrollbarWidth: "none" }}>
                    <div className="border bg-info box-items" style={{ width: "20rem", flex: "0 0 auto" }}></div>
                </div>
            </div>
        </div>
    </>);
};

export default Home;