import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function ViewMore() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const instructions = state.instructions.split(",");
    const back = () => {
        navigate("/homeremedy")
    }

    return <>
        <Header />
        <div className="mt-3 mb-4">
            <div className="d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap">
                <div className="d-flex flex-column" style={{ height: "400px", width: "600px" }}>
                    <img className=" shadow-lg border" alt="Homeremedy_image" src={state.imageUrl} style={{ height: "100%", width: '100%' }} />
                    <span className="text-center fs-2 mt-3 mb-3" >{state.remedyName}</span>
                </div>
                <div className="ms-4 d-flex flex-column" style={{ width: "600px" }}>
                    <span className="fs-4">Homeremedy {state.remedyName}</span>
                    <span className="mt-2 fs-6">{state.description}</span>
                    <span className="mt-2 fs-4"> Ingredients of {state.remedyName}</span>
                    <span className="mt-2">{state.ingredients}</span>
                    <span className="mt-2 fs-4"> Instructions of {state.remedyName}</span>
                    {instructions.map((data, index) => <div key={index}>
                        <span className="mt-2">{instructions[index]}</span><br />
                    </div>)}
                    <span className="mt-2 fs-4">caution of {state.remedyName}</span>
                    <span className="mt-2">{state.caution}</span>
                    <button onClick={back} className="btnn text-white mt-3">Back</button>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}