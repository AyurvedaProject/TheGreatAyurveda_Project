import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserDoctor } from "react-icons/fa6";
import './DoctorDashboard.css'
import { Link, Outlet } from "react-router-dom";


const DoctorDashboard = () => {
    const [doctorConsult, setDoctorConsult] = useState({ "id": 10, "qualification": "BAMS (Bachelor of Ayurvedic Medicine and Surgery)", "experience": 5, "gender": "male", "language": "English", "clinicAddress": "asdfasdasd", "doctorimage": "C:\\fakepath\\Screenshot 2024-02-21 000352.png", "specialization": "asdfasdf", "doctorId": 16, "createdAt": "2024-05-10T09:12:55.000Z", "updatedAt": "2024-05-10T09:12:55.000Z", "doctor": { "id": 16, "doctorName": "raj", "email": "raj@gmail.com", "password": "$2a$10$qsCHKQbmzOYgn6j42yIx..7Wbk2i2hgnMlQNYeJWh5QIOAqt7/Yp.", "contactNumber": "8767656545", "registrationNumber": "124352", "createdAt": "2024-05-10T06:48:19.000Z", "updatedAt": "2024-05-10T06:48:19.000Z" } });

    useEffect(() => {
        axios.post("http://localhost:3005/doctor/doctorProfile", { id: localStorage.getItem("doctorId") })
            .then(response => {
                setDoctorConsult(response.data.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);


    return <>

        <div >
            <div className="container">
                <div className="row ">
                    <div className="col-3">
                        <div>
                            <div className="doctor-profile container border shadow-lg p-3 mb-5 bg-body rounded-3 mt-5 mb-4">
                                <div className='row mt-3 mb-2 '>
                                    <div className="doctor-imgs d-flex justify-content-center align-item-center  rounded-top-3 pb-3 ">
                                        <img src={doctorConsult.doctorimage} alt="Doctor Image" className="doctor-image rounded-circle" />
                                    </div>

                                    <div className=' profile-info mt-2 ms-5 d-flex justify-content-center align-item-center flex-column'>
                                        <h1 className="fs-5 ">{doctorConsult.doctor.doctorName}</h1>
                                        <div className='doctor-details'>
                                            <div>
                                                <FaUserDoctor style={{ fontSize: "14px" }} />
                                                <span style={{ margin: "15px", fontSize: "14px" }}>{doctorConsult.specialization}</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className=" d-flex justify-content-center align-item-center">
                                        <ul className="mt-2 list-group " style={{ listStyle: "none" }}>
                                            <li className="border shadow-lg p-3  bg-body rounded px-5 ">Dashboard</li>
                                            <li className="border shadow-lg p-3  bg-body rounded px-5 ">Appointments</li>
                                            <Link to="patientInformation">
                                                <li className="border shadow-lg p-3  bg-body rounded  px-5">My Patients</li>
                                            </Link>
                                            <Link to="doctorconsultation">
                                                <li className="border shadow-lg p-3  bg-body rounded  px-5">Consult</li>
                                            </Link>
                                            <li className="border shadow-lg p-3  bg-body rounded px-5">Profile Setting</li>
                                            <li className="border shadow-lg p-3  bg-body rounded px-5">LogOut</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default DoctorDashboard;