import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import ChatBot from '../ChatBot/ChatBot.js'; 
import "./DoctorConsult.css";
import { useNavigate } from "react-router-dom";

const DoctorConsult = () => {
    const [doctorConsult, setDoctorConsult] = useState([]);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3005/doctor/doctorconsult")
            .then(response => {
                console.log(response.data.result);
                setDoctorConsult(response.data.result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const consult = (doctor) => {
        navigate("/Consult", { state: doctor });

    }
    

    const appointment = (doctor) => {
        navigate("/Appointment", { state: doctor });
    }

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    }

    return (
        <>
            <Header />
            <div className={`container ${isChatbotOpen ? "blur" : ""}`}>
                <AiOutlineMessage size={40} className='chatbot' onClick={toggleChatbot} />
                {doctorConsult.map((doctor, index) => (
                    <div key={index}>
                        <div className="doctor-profile container border shadow-lg p-3 mb-5 bg-body rounded mt-5 mb-4">
                            <div className='row mt-4 mb-2 alldata'>
                                <div className='col-md-3'>
                                    <div className="doctor-img ">
                                        <img src={doctor.doctordetail.doctorImage} alt="Doctor Image" className="doctor-image rounded-circle" />
                                    </div>
                                </div>
                                <div className='col-md-7 profile-info mt-4'>
                                    <h1>{doctor.doctorName}</h1>
                                    <div className='doctor-details'>
                                        <div>
                                            <FaUserDoctor />
                                            <span style={{ margin: "15px" }}>{doctor.doctordetail.specialization}</span>
                                        </div>
                                        <div>
                                            <MdWorkHistory />
                                            <span style={{ margin: "15px" }}>{doctor.doctordetail.experience} years of experience</span>
                                        </div>
                                        <div>
                                            <FaGraduationCap />
                                            <span style={{ margin: "15px" }}>{doctor.doctordetail.qualification}</span>
                                        </div>
                                        <div>
                                            <LiaLanguageSolid />
                                            <span style={{ margin: "15px" }}>{doctor.doctordetail.language}</span>
                                        </div>
                                        <div className="contact-info">
                                            <div className="address">
                                                <IoLocationOutline />
                                                <span style={{ margin: "15px" }}>{doctor.doctordetail.clinicAddress}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2 mt-4 buttons'>
                                    <button className="btnn addtocart-btn m-2" onClick={() => consult(doctor)}>Consult</button>
                                    <button className="btnn text-white m-2" onClick={() => appointment(doctor)}>Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isChatbotOpen && <ChatBot style={{ zIndex: 1 }} />} {/* Ensure ChatBot z-index is lower than buttons */}
            <Footer />
        </>
    );
};

export default DoctorConsult;