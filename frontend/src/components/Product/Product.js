import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3005/product/productlist")
            .then(response => {
                setProducts(response.data.productList)
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
                    toast.error("Already added this product");
                });
        }
        else {
            toast.error("please SignIn and add items in your cart");
        }
    }
    const ProductView = (product) => {
        navigate("/ProductView", { state: product });
    }
    const Buynow = (product) => {
        if (localStorage.getItem("userId")) {
            navigate("/Buynow", { state: product });
        }
        else {
            toast.error("please SignIn and add items in your cart");
        }
    }
    return (<>
        <ToastContainer />
        <div className="mt-3 d-flex align-items-top justify-content-evenly gap-5 flex-wrap overflow-hidden" style={{ background: "var(--white)" }}>
            {products.map((product, index) => <div key={index} className="mb-4 mt-1 card shadow" id="view_hover" style={{ width: "18rem" }}>
                <img src={product.imageUrl} style={{ height: "200px", cursor: "pointer" }} onClick={() => ProductView(product)} className="ms-1 remede-img card-img-top p-1" alt="..." />
                <i className="youtube-icon bg-white text-dark w-25 view pt-1" >ViewMore</i>
                <div className="card-body m-0 p-1 px-3">
                    <h4 className="card-title fs-6 fw-bold p-0 m-0">{product.title.slice(0, 25)}</h4>
                    <h4 className="card-title fs-6 fw-bold p-0 m-0" style={{ color: "var(--green)" }}>{product.price} Rs</h4>
                    <p className="card-text p-0 m-0 mt-2" style={{ fontSize: "0.7rem" }}>{product.description.slice(0, 100)}</p>
                    <div className="d-flex justify-content-around p-0 my-2">
                        <button style={{ fontSize: ".8rem" }} className="btnn addtocart-btn p-0 m-0 py-2 px-0" onClick={() => addToCart(product.id)}>Add To cart</button>
                        <button style={{ fontSize: ".8rem" }} className="btnn buynow-btn text-white m-0 p-0 py-2 px-0" onClick={() => Buynow(product)}>Buy Now</button>
                    </div>
                </div>
            </div>)}
        </div>
    </>);
};

export default Product;
