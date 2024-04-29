import { useLocation } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './ProductViewMore.css';
export default function ProductView() {
    const { state } = useLocation();
    const rat = [1, 2, 3, 4, 5]
    return <>
        <Header />
        <div className="rmm mt-3 mb-4">
            <div className="rmm remedydata d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap">
                <div className="remedydata d-flex flex-column border shadow-lg" style={{ height: "450px", width: "560px" }}>
                    <img src={state.imageUrl} alt="Product" style={{ height: "100%", width: '99%' }} />
                    <span className="rmm text-center fs-6 mt-3 mb-3" >{state.title}</span>
                </div>
                <div className="rmm remedydata  ms-4 d-flex flex-column" style={{ width: "600px" }}>
                    <span className="rmm remedydata fs-7">Homeremedy {state.title}</span>
                    <span className="rmm  fs-5 fw-bold ms-2 me-2" style={{ color: "var(--green)" }}>{state.price} Rs [Inclusive of all Taxes]</span>
                    <div className="d-flex">
                        {rat.map((r, i) => <div key={i} className="d-flex ">
                            {i < state.rating ? <span className="product-reting text-center"></span> : ""}
                        </div>)}
                    </div>
                    <span className="rmm remedydata mt-2 fs-6 ">{state.description}</span>
                    <div className="rmm d-flex justify-content-start">
                        <button className="btnn addtocart-btn text-white m-2">Add To cart</button>
                        <button className="btnn buynow-btn text-white m-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}