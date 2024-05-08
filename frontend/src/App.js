import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import UserForgetPassword from "./components/user/ForgetPassword.js";
import UserLogIn from "./components/user/LogIn.js";
import DoctorForgetPassword from "./components/DoctorLogin/ForgetPassword.js";
import DoctorLogIn from "./components/DoctorLogin/LogIn.js";
import AboutUs from "./components/AboutUs/About.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";
import Homeremedy from "./components/Homeremedy/Homeremedy.js";
import Yoga from "./components/Yoga/Yoga.js";
import Product from "./components/Product/Product.js";
import GetStart from "./components/Yoga/yogadescription.js";
import Disease from "./components/Disease/Disease.js";
import DoctorConsult from "./components/DoctorConsult/DoctorConsult.js";
import ViewMore from "./components/Homeremedy/HomeremedyDescription.js";
import Consult from "./components/Consult/Consult.js";
import Appointment from "./components/Appointment/Appointment.js";
import ChatBot from "./components/ChatBot/ChatBot.js";
import Viewcart from "./components/Product/Viewcart.js";
import Checkout from "./components/Product/CheckOut.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import PaymentSuccess from "./components/Product/paymentsuccess.js";
import ProductView from "./components/Product/ProductViewMore.js";
import  DoctorConsultation  from "./components/Doctor/DoctorConsultation/DoctorConsultation.js";
import PatientInformation from "./components/Doctor/Patients/Patients.js";
import DoctorDashboard from "./components/Doctor/DoctorDashboard/DoctorDashboard.js";
import { DoctorDetailsForm } from "./components/Doctor/DoctorDetailsForm/DoctorDetailsForm.js";
import Buynow from "./components/Product/BuyNow.js";


function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeremedy/" element={<Homeremedy />} />
          <Route path='/ViewMore' element={<ViewMore />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserLogIn />} />
          <Route path="/forgetpassword" element={<UserForgetPassword />} />
          <Route path="/doctorlogin" element={<DoctorLogIn />} />
          <Route path="/doctorforgetpassword" element={<DoctorForgetPassword />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Chatbot" element={<ChatBot />} />
          <Route path="/Checkout" element={<Checkout />} />
          {/* <Route path="/appointmentDetails" element={<AppointmentDetails/>} /> */}
          <Route path="doctorDashboard" element={<DoctorDashboard/>} >
          <Route path="doctorconsultation" element={<DoctorConsultation/>}/>
          <Route path="patientInformation" element={<PatientInformation/>}/>
          </Route>


          <Route path="/viewcart" element={<Viewcart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
          
          <Route path="/header" element={<Header />} />

          
<Route path="/doctorDetailsFrom" element={<DoctorDetailsForm/>}/>
          <Route path="/doctorConsultation" element={<DoctorConsultation />} />
          <Route path="/Buynow" element={<Buynow/>} />
          {/* <Route path="/search/:term" element={<SearchItem/>} /> */}
          {/* <Route path="/appointmentDetails" element={<AppointmentDetails />} /> */}

        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
