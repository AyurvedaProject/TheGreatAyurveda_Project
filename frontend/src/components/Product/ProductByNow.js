import { useLocation } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function BuyNow() {
    const { state } = useLocation();
    const rat = [1, 2, 3, 4, 5]
    return <>
        <Header />
        <div className="mt-3 mb-4">
            <div className="d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap">
                <div className="d-flex flex-column border shadow-lg" style={{ height: "450px", width: "560px" }}>
                    <img src={state.imageUrl} alt="Product" style={{ height: "100%", width: '100%' }} />
                    <span className="text-center fs-3 mt-3 mb-3" >{state.title}</span>
                </div>
                <div className="ms-4 d-flex flex-column" style={{ width: "600px" }}>
                    <span className="fs-3">Homeremedy {state.title}</span>
                    <span className="fs-5 fw-bold ms-2 me-2" style={{ color: "var(--green)" }}>{state.price} Rs [Inclusive of all Taxes]</span>
                    <div className="d-flex">
                        {rat.map((r, i) => <div key={i} className="d-flex ">
                            {i < state.rating ? <span className="product-reting text-center"></span> : ""}
                        </div>)}
                    </div>
                    <span className="d-flex flex-wrap m-2 fs-5">{state.description}</span>
                    <div className="d-flex justify-content-start">
                        <button className="btnn addtocart-btn text-white m-2">Add To cart</button>
                        <button className="btnn buynow-btn text-white m-2" onClick={() => BuyNow(state)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}