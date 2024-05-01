import "./Homeremedy.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
const Homeremedy = () => {
    const [homeremedies, setHomeremedies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/homeremedy/homeremedylist")
            .then(response => {
                setHomeremedies(response.data.HomeRemedyList)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const navigate = useNavigate();
    const ViewMore = (remedy) => {
        navigate("/ViewMore", { state: remedy });
    }
    return (<>
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {homeremedies.map((remedy, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5">
                            <div className="remede-img m-1"><img src={remedy.imageUrl} alt="..." onClick={() =>ViewMore(remedy)} style={{ height: "100%", width: '100%' }} /></div>
                            <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center text-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{remedy.remedyName.slice(0, 25)}</span>
                                <span className="d-flex flex-wrap m-2">{remedy.description.slice(0, 80)}</span>
                                <button className="btnn text-white m-2" onClick={() =>ViewMore(remedy)}>View More</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </>);
};

export default Homeremedy;