import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default function ViewMore() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const instructions = state.instructions.split(",");
    const back = () => {
        navigate(-1)
    }

    return <>
        <div className="rmm mt-3 mb-4 ">
            <div className=" rmm d-flex align-items-start justify-content-evenly m-5 mt-2 p-3 flex-wrap ">
                <div className="rmm d-flex flex-column ">
                    <div className="rmm remedyimg" style={{ height: "400px", width: "600px" }}>
                        <img src={state.imageUrl} alt="..." style={{ height: "100%", width: '100%' }} />
                    </div>
                    <span className="rmm text-center fs-2 mt-3 mb-3 " >{state.remedyName}</span>
                </div>
                <div className="rmm remedydata ms-4 d-flex flex-column " style={{ width: "600px" }}>
                    <span className="rmm fs-4">Homeremedy {state.remedyName}</span>
                    <span className="rmm mt-2 fs-6">{state.description}</span>
                    <span className="rmm mt-2 fs-4"> Ingredients of {state.remedyName}</span>
                    <span className="rmm mt-2 fs-6">{state.ingredients}</span>
                    <span className="rmm mt-2 fs-4"> Instructions of {state.remedyName}</span>
                    {instructions.map((data, index) => <div key={index}>
                        <span className="rmm mt-2 fs-6">{instructions[index]}</span><br />
                    </div>)}
                    <span className="rmm mt-2 fs-4">caution of {state.remedyName}</span>
                    <span className="rmm mt-2 fs-6">{state.caution}</span>
                    <button onClick={back} className="btnn text-white m-2">Back</button>
                </div>
            </div>
        </div>
    </>
}