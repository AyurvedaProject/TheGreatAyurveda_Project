import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function ProductView() {
    const { state } = useLocation();

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
    const back = () => {
        navigate(-1)
    }

    return <>
        <div class="card container-fluid my-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={state.imageUrl} class="p-1 img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body m-0 p-0">
                        <h5 class="card-title m-0 p-0 fs-5">{state.title}</h5>
                        <p className="m-0 px-0 pt-3 card-text" style={{ color: "var(--green)" }}>{state.price} Rs [Inclusive of all Taxes]</p>
                        <p className="m-0 px-0 pt-3 card-text"><small className="text-muted">{state.description}</small></p>
                        <div className="m-0 p-0 pt-3 gap-2 d-flex justify-content-start flex-wrap">
                            <button onClick={() => addToCart(state.id)} className="btnn addtocart-btn text-white">Add To cart</button>
                            <button className="btnn buynow-btn text-white">Buy Now</button>
                            <button onClick={back} className="btnn text-white">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}
