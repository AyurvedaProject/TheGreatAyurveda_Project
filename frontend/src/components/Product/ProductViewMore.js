import { useLocation, useNavigate } from "react-router-dom"
import './ProductViewMore.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function ProductView() {
    const { state } = useLocation();

    const addToCart = (productId) => {
        axios.post("http://localhost:3005/cart/addToCart", { userId: localStorage.getItem("userId"), productId, quantity: 1 })
            .then(response => {
                toast.success(response.data.message);
            }).catch(err => {
                toast.danger("Already added this product");
            });
    }

    const navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }

    return <>
        <div className="rmm mt-3 mb-4">
            <div className="rmm remedydata d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap">
                <div className="remedydata d-flex flex-column border shadow-lg" style={{ height: "450px", width: "560px" }}>
                    <img src={state.imageUrl} alt="Product" style={{ height: "100%", width: '99%' }} />
                    <span className="rmm text-center fs-6 mt-3 mb-3" >{state.title}</span>
                </div>
                <div className="rmm remedydata gap-3 ms-4 d-flex flex-column" style={{ width: "600px" }}>
                    <span className="rmm remedydat fs-4 fw-bold">{state.title}</span>
                    <span className="rmm fs-5 fw-bold" style={{ color: "var(--green)" }}>{state.price} Rs [Inclusive of all Taxes]</span>
                    <span className="rmm remedydata">{state.description}</span>
                    <div className="rmm gap-2 d-flex justify-content-start">
                        <button onClick={() => addToCart(state.id)} className="btnn addtocart-btn text-white">Add To cart</button>
                        <button className="btnn buynow-btn text-white">Buy Now</button>
                    </div>
                    <button onClick={back} className="btnn text-white">Back</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}
