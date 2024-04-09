import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import UserLogIn from "./components/User/LogIn.js";
import AboutUs from "./components/AboutUs/About.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";
import Homeremedy from "./components/Homeremedy/Homeremedy.js";
import Yoga from "./components/Yoga/Yoga.js";
import Product from "./components/Product/Product.js";
import Disease from "./components/Disease/Disease.js";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeremedy" element={<Homeremedy />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/product" element={<Product />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserLogIn />} />
          <Route path="/forgetpassword" element={<UserForgetPassword />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;