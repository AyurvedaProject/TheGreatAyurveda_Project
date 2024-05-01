import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ReactPLayer from 'react-player/youtube';
import './Yoga.css';
export default function GetStart() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const back = () => {
        navigate(-1);
    }

    return <>
        <div className=" mt-3 mb-3">
            <div className=" d-flex align-items-start justify-content-center m-5 mt-2 p-3">
                <div className="d-flex flex-column">
                    <ReactPLayer url={state.videoUrl} muted volume={0.8} />
                    <span className="fs-2 text-center" >{state.yogaName}</span>
                    <br />
                </div>
                <div className="remede-value ms-4 d-flex flex-column">
                    <span className="fs-4">Benefits of {state.yogaName}</span>
                    <span className="mt-2">{state.benefits}</span>
                    <span className="fs-4 mt-2">Instructions of {state.yogaName}</span>
                    <span className="mt-2">{state.instructions}</span>
                    <button onClick={back} className="btnn text-white mt-3">Back</button>
                </div>
            </div>
        </div>
    </>
}