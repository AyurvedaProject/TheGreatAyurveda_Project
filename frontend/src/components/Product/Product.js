import "./Product.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/product/productlist")
            .then(response => {
                setProducts(response.data.productList)
            }).catch(err => {
                console.log(err);
            })
    }, []);
      
    const addToCart = (productId) => {
        axios.post("http://localhost:3005/cart/addToCart", { userId: localStorage.getItem("userId"), productId,quantity:1 })
        .then(response => { 
                toast.success(response.data.message);
            }).catch(err => {
                toast.danger("Already added this product");
            });
    }
 

    const navigate = useNavigate();
    const ProductView = (product) => {
        navigate("/ProductView", { state: product });
    }

  
    return (<>    
    <ToastContainer />
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {products.map((product, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5 text-center">

                            <div className="remede-img m-1"><img src={product.imageUrl} alt="..." style={{ height: "100%", width: '100%' }} /></div>
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

                                    <button className="btnn addtocart-btn text-white m-2"onClick={() => addToCart(product.id)}  >Add To cart</button>
                                    <button className="btnn buynow-btn text-white m-2">Buy Now</button>

                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </>);
};

export default Product;
