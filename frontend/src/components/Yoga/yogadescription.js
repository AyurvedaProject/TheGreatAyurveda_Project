import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import ReactPLayer from 'react-player/youtube';
export default function GetStart() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const back = () => {
        navigate(-1);
    }

    return <>
        <div className="rmm mt-3 mb-4 ">
            <div className=" rmm d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap ">
                <div className="rmm d-flex flex-column ">
                    <div className="rmm remedyimg" style={{ height: "400px", width: "600px" }}>
                        <ReactPLayer url={state.videoUrl} style={{ height: "100%", width: '100%' }} volume={0.8} />
                    </div>
                    <span className="rmm text-center fs-2 mt-3 mb-3 " >{state.yogaName}</span>
                </div>
                <div className="rmm remedydata ms-4 d-flex flex-column " style={{ width: "600px" }}>
                    <span className="rmm fs-4">Benefits of {state.yogaName}</span>
                    <span className="rmm mt-2">{state.benefits}</span>
                    <span className="rmm mt-2 fs-4">Instructions of {state.yogaName}</span>
                    <span className="rmm mt-2">{state.instructions}</span>
                    <button onClick={back} className="btnn text-white m-2">Back</button>
                </div>
            </div>
        </div>
    </>
}