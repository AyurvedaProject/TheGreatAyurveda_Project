import { useState } from "react";
import "./DoctorVarification.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorVarication = () => {
  const [qualification, setQualification] = useState(" ");
  const [experience, setExperience] = useState("  ");
  const [language, setLanguage] = useState("   ");
  const [specialization, setSpecialization] = useState("    ");
  const [clinicAddress, setClinicAddress] = useState("     ");
  const [doctorImage, setDoctorImage] = useState("      ");

  const [qualificationValue, setQualificationValue] = useState("");
  const [experienceValue, setExperienceValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [specializationValue, setSpecializationValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [clinicAddressValue, setClinicAddressValue] = useState("");
  const [doctorImageValue, setDoctorImageValue] = useState("");

  const navigate = useNavigate();
  const adddoctordetails = () => {
    if (qualification === experience && experience === language && language === specialization && specialization === clinicAddress && clinicAddress === doctorImage) {
      axios.post("http://localhost:3005/doctor/addDoctordetail", { qualification: qualificationValue, experience: experienceValue, language: languageValue, specialization: specializationValue, gender: genderValue, clinicAddress: clinicAddressValue, doctorimage: doctorImageValue, doctorId: (localStorage.getItem("doctorId")) })
        .then(response => {
          if (response.status === 200) {
            toast.success("data add Successfully....");
            navigate("/doctorDashboard");
          }
        }).catch(err => {
          console.log(err);
          toast.error("data add fail...");
        })
    } else {
      toast.info("Please fill the all details");
    }
  }

  return (
    <>
      <ToastContainer />
      <h1 className="text-center mt-2 mb-2">Doctor Varification</h1>
      <div className="container mt-3 p-3 mb-3 border">
        <div className="row">
          <div className="col-md-6">Qualification
            <select name="qualification" onClick={(event) => { event.target.value === "" ? setQualification("Qualification is requeired") : setQualification(""); setQualificationValue(event.target.value); }} className="form-control" id="qualification">
              <option value="BAMS (Bachelor of Ayurvedic Medicine and Surgery)">BAMS (Bachelor of Ayurvedic Medicine and Surgery)</option>
              <option value="MD (Ayurveda)">MD (Ayurveda)</option>
              <option value="MS (Ayurveda)">MS (Ayurveda)</option>
              <option value="PG Diploma Courses">PG Diploma Courses</option>
              <option value="Ph.D. in Ayurveda">Ph.D. in Ayurveda</option>
            </select>
            <small className="text-danger">{qualification}</small>
          </div>
          <div className="col-md-6">Experience
            <input type="text" className="form-control" placeholder="Enter Experience" required onChange={(event) => { event.target.value === "" ? setExperience("Experience is requeired") : !event.target.value.match("^[0-9]+$") ? setExperience("Only digit is allow") : !event.target.value.match("^[0-9]{1,1}$") ? setExperience("experience invelid") : setExperience(""); setExperienceValue(event.target.value); }}></input>
            <small className="text-danger">{experience}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">Language
            <select name="language" className="form-control" id="language" onClick={(event) => { event.target.value === "" ? setLanguage("Qualification is requeired") : setLanguage(""); setLanguageValue(event.target.value); }}>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Hindi,English">Hindi,English</option>
            </select>
            <small className="text-danger">{language}</small>
          </div>
          <div className="col-md-6 mt-3">Specialization
            <input type="text" className="form-control" placeholder="Specialization" required onChange={(event) => { event.target.value === "" ? setSpecialization("Specialization is requeired") : !event.target.value.match("^[a-z A-Z]+$") ? setSpecialization("Only character is allow") : !event.target.value.match("^[a-z A-Z]{5,50}$") ? setSpecialization("Specialization must be at least 5 character") : setSpecialization(""); setSpecializationValue(event.target.value); }}></input>
            <small className="text-danger">{specialization}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3 genderClass">Gender
            <label htmlFor="male" className="ms-2">male</label>
            <input type="radio" name="gender" id="male" value="male" onClick={(event) => setGenderValue(event.target.value)}></input>
            <label htmlFor="female" className="ms-2">female</label>
            <input type="radio" name="gender" id="female" value="female" onClick={(event) => setGenderValue(event.target.value)}></input>
            <label htmlFor="other" className="ms-2">other</label>
            <input type="radio" name="gender" id="other" value="other" onClick={(event) => setGenderValue(event.target.value)}></input>
            <br></br>
          </div>
          <div className="col-md-6 mt-3">Doctor Image
            <input type="file" required className="form-control" onChange={(event) => { event.target.value === "" ? setDoctorImage("Doctor image is requeired") : setDoctorImage(""); setDoctorImageValue(event.target.value); }}></input>
            <small className="text-danger">{doctorImage}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">Clinic Address
            <textarea className="form-control" type="text" placeholder="Enter clinic Address" required onChange={(event) => { event.target.value === "" ? setClinicAddress("Clinic Address is requeired") : !event.target.value.match("[A-Za-z0-9]") ? setClinicAddress("Only character and digit is allow") : !event.target.value.match("^[A-Za-z0-9]{10,70}$") ? setClinicAddress("Clinic Address must be at least 10 character") : setClinicAddress(""); setClinicAddressValue(event.target.value); }}></textarea>
            <small className="text-danger">{clinicAddress}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button type="submit" onClick={() => adddoctordetails()} className="btnn text-white mt-3">Verify</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorVarication;
