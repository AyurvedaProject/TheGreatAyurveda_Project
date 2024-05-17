import { useLocation, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import "./Appointment.css";
import { PiSunHorizon } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css'
import { MdOutlineNightlight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx"
import axios from "axios";

const Appointment = () => {
    const { state } = useLocation();
    // console.log(state)
    const navigate = useNavigate();
    const back = () => {
        navigate("/");
        navigate("/doctorConsult");
    }
    const currentDate = new Date();
    const onSelectedDay = (d) => {

    }

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
        // console.log(selectedTime);
    };
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDate, setSelectedDate] = useState("");


    const handleDateSelection = (date) => {
        setSelectedDate(date);
        // console.log(date);
    };
    //   alert(state.doctorId);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            phone: phone,
            email: email,
            age: age,
            gender: selectedOption,
            appointmentTime: selectedTime,
            appointmentDate: selectedDate,
            doctorId: state.doctorId
        };

        try {
            if (name && phone && email && age && selectedOption && selectedTime && selectedDate) {
                axios.post('http://localhost:3005/doctor/doctorAppointment', formData).then(res => {
                    // console.log('Appointment booked successfully:', res.data);
                    alert("Appointment booked successfully")
                }).catch(err => {
                    console.log("hello", err)
                });
            } else {
                alert("Please fill all the fields");
            }

            setName('');
            setPhone('');
            setAge('');
            setSelectedOption('');
            setSelectedTime('');
            setSelectedDate('');
        } catch (error) {
            // Handle errors
            console.error('Error booking appointment:', error);
        }

    };



    return (
        <>

            <div className="doctor-consult container rounded my-5 shadow-lg p-0 bg-body rounded">
                <RxCross2 className="closeicon text-white mt-2" onClick={back} />
                <h1 className="fs-3 text-center text-white p-2" style={{ background: "var(--green)" }}>Schedule Appointment</h1>
                <div className='m-2 py-2 row alldata'>
                    <div className='col-4'>

                        <div className="doctor-img">
                            <img src={state.doctorimage} alt="Doctor Image" className="doctor-images rounded-circle border-3" />
                        </div>
                    </div>
                    <div className='col-8 profile-info'>
                        <h1>{state.doctor.doctorName}</h1>
                        <div className='doctor-detail'>
                            <div><FaUserDoctor /><span style={{ margin: "15px" }}>{state.specialization}</span></div>
                            <div><MdWorkHistory /><span style={{ margin: "15px" }}>{state.experience} years of experience</span></div>
                            <div><FaGraduationCap /><span style={{ margin: "15px" }}>{state.qualification}</span></div>
                            <div><LiaLanguageSolid /><span style={{ margin: "15px" }}>{state.language}</span></div>
                            <div className="contact-info">
                                <div className="address">
                                    <IoLocationOutline /><span style={{ margin: "15px" }}>{state.clinicAddress}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calender"> <ReactHorizontalDatePicker
                    selectedDay={handleDateSelection}
                    enableScroll={true}
                    enableDays={180}
                /></div>

                <div className="timing-slots">
                    <div>
                        <div className="shift">
                            <span><PiSunHorizon /></span>
                            <span>Morning</span>
                            <br></br>
                        </div>
                        <div className="time mb-2 mt-2">
                            <span onClick={() => handleTimeSelection("10:00 AM")} className={selectedTime === "10:00 AM" ? "selected-time" : ""}>10:00 AM</span>
                            <span onClick={() => handleTimeSelection("10:30 AM")} className={selectedTime === "10:30 AM" ? "selected-time" : ""}>10:30 AM</span>
                            <span onClick={() => handleTimeSelection("11:00 AM")} className={selectedTime === "11:00 AM" ? "selected-time" : ""}>11:00 AM</span>
                            <span onClick={() => handleTimeSelection("11:30 AM")} className={selectedTime === "11:30 AM" ? "selected-time" : ""}>11:30 AM</span>
                            <span onClick={() => handleTimeSelection("12:00 AM")} className={selectedTime === "12:00 AM" ? "selected-time" : ""}>12:00 AM</span>




                        </div>
                    </div>

                    <div>
                        <div className="shift">
                            <span><FiSun /></span>
                            <span>Afternoon</span>
                        </div>
                        <div className="time mb-2 mt-2">
                            <div className="time mb-2 mt-2">
                                <span
                                    onClick={() => handleTimeSelection("12:00 PM")}
                                    className={selectedTime === "12:00 PM" ? "selected-time" : ""}
                                >
                                    12:00 PM
                                </span>
                                <span
                                    onClick={() => handleTimeSelection("12:30 PM")}
                                    className={selectedTime === "12:30 PM" ? "selected-time" : ""}
                                >
                                    12:30 PM
                                </span>
                                <span
                                    onClick={() => handleTimeSelection("01:00 PM")}
                                    className={selectedTime === "01:00 PM" ? "selected-time" : ""}
                                >
                                    01:00 PM
                                </span>
                                <span
                                    onClick={() => handleTimeSelection("01:30 PM")}
                                    className={selectedTime === "01:30 PM" ? "selected-time" : ""}
                                >
                                    01:30 PM
                                </span>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="shift">
                            <span><MdOutlineNightlight /></span>
                            <span>Evening</span>
                        </div>
                        <div className="time mb-2 mt-2">
                            <span onClick={() => handleTimeSelection("05:00 PM")}>05:00 PM</span>
                            <span onClick={() => handleTimeSelection("05:30 PM")}>05:30 PM</span>
                            <span onClick={() => handleTimeSelection("06:00 PM")}>06:00 PM</span>
                            <span onClick={() => handleTimeSelection("06:30 PM")}>06:30 PM</span>
                            <span onClick={() => handleTimeSelection("07:00 PM")}>07:00 PM</span>
                            <span onClick={() => handleTimeSelection("0:30 PM")}>07:30 PM</span>
                        </div>
                    </div>

                </div>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="mx-3 col-md-8 form-data">
                                <div className="form-group"><br></br><label htmlFor="name">Name<span> *</span></label>
                                    <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Phone">Phone<span> *</span></label>
                                    <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="Phone" name="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" title="Please enter a 10 digit phone number." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email<span> *</span></label>
                                    <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Please enter a valid email address." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Age">Age<span> *</span></label>
                                    <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="Age" name="Age" value={age} onChange={(e) => setAge(e.target.value)} required min="1" max="100" title="Please enter a valid age between 1 and 100." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender<span> *</span></label><br></br><br></br>
                                    <label htmlFor="Gender">
                                        male
                                        <input
                                            type="radio"
                                            className=" ms-2"
                                            value="male"
                                            checked={selectedOption === 'male'}
                                            onChange={handleOptionChange}
                                        />

                                    </label>
                                    <label className=" ms-4">
                                        female
                                        <input
                                            type="radio"
                                            className=" ms-2"
                                            value="female"
                                            checked={selectedOption === 'female'}
                                            onChange={handleOptionChange}
                                        />

                                    </label>
                                    <label className=" ms-4">
                                        other
                                        <input
                                            type="radio"
                                            className=" ms-2"
                                            value="other"
                                            checked={selectedOption === 'other'}
                                            onChange={handleOptionChange}
                                        />

                                    </label>

                                </div>

                                <div>

                                    <button onClick={handleSubmit} type="submit" className="btnnn text-white mb-3 ms-3  mt-4 ">Book Appointment</button>


                                </div>
                            </div>
                            <div />
                        </div>
                    </div>
                </form>

            </div>

        </>
    );
}

export default Appointment;
