import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.js";
import UserLogIn from "./components/User/LogIn.js";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import Home from "./components/Home/Home.js";
import Disease from "./components/Disease/Disease.js";
import Product from "./components/Product/Product.js";
import Viewcart from "./components/Product/Viewcart.js";
import Checkout from "./components/Product/CheckOut.js";
import ProductView from "./components/Product/ProductViewMore.js";
import Yoga from "./components/Yoga/Yoga.js";
import GetStart from "./components/Yoga/yogadescription.js";
import Homeremedy from "./components/Homeremedy/Homeremedy.js";
import ViewMore from "./components/Homeremedy/HomeremedyDescription.js";
import AboutUs from "./components/AboutUs/About.js";
import Contact from "./components/Contact/Contact.js";
import Consult from "./components/Consult/Consult.js";
import Appointment from "./components/Appointment/Appointment.js";
import DoctorLogIn from "./components/DoctorLogin/LogIn.js";
import DoctorForgetPassword from "./components/DoctorLogin/ForgetPassword.js";
import DoctorConsult from "./components/DoctorConsult/DoctorConsult.js";
import DoctorConsultation from "./components/Doctor/DoctorConsultation/DoctorConsultation.js";
import DoctorDashboard from "./components/DoctorModule/Doctor/DoctorDashboard/DoctorDashboard.js";
import Footer from "./components/Footer/Footer.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import DoctorVarication from "./components/DoctorModule/Doctor/DoctorVarification/DoctorVarification/DoctorVarification.js";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path="/viewcart" element={<Viewcart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/homeremedy/" element={<Homeremedy />} />
          <Route path='/ViewMore' element={<ViewMore />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/user" element={<UserLogIn />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/forgetpassword" element={<UserForgetPassword />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/doctorDashboard" element={<DoctorDashboard />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
          <Route path="/doctorlogin" element={<DoctorLogIn />} />
          <Route path="/doctorforgetpassword" element={<DoctorForgetPassword />} />
          <Route path="/doctorConsultation" element={<DoctorConsultation />} />
          <Route path="/doctorvarication" element={<DoctorVarication />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
