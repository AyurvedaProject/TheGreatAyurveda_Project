import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [diseases, setDiseases] = useState([]);
    const [diseases2, setDiseases2] = useState("");
    const [searchdiseases, setsearchdiseases] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/category/list")
            .then(response => {
                setDiseases(response.data.categories)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const Solution = (disease) => {
        let categoryName = disease.categoryName;
        axios.post("http://localhost:3005/category/data", { categoryName })
            .then(response => {
                navigate("/disease", { state: response.data.categories });
            }).catch(err => {
                console.log(err);
            })
    }

    const Search = (data) => {
        axios.post("http://localhost:3005/category/search", { data })
            .then(response => {
                setsearchdiseases(response.data)
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios.get("http://localhost:3005/cart/fetchCartItems/${userId}")
            .then(response => {
                for (let product of response.data.data) {
                    product.qty = 1;
                    cartItemList.push(product);
                }
                setCartItemList([...cartItemList]);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const viewcart = () => {
        navigate("/ViewCart");
    }
    let searchinput = document.getElementById("dropdownMenuButton1");
    const searchSolution = () => {
        if (searchdiseases[0]) {
            searchinput.value = searchdiseases[0].categoryName;
            Solution(searchdiseases[0])
        }
    }

    return (
        <div className="headernav" style={{ height: "130px" }}>
            <div className="fixed-top">
                <nav className="navbar-m navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid navbar-collapse">
                        <span className="navbar-brand">
                            <img src="./images/A2.png" height={60} width={100} alt="Avatar Logo" style={{}} />
                        </span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{}} id="mynavbar">
                            <form className="header-sch me-auto d-flex bg-light position-relative" role="button" style={{ borderRadius: "50px", marginLeft: "17vw", width: "45%" }}>
                                <input className="form-control me-2 form-control no-border" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onChange={(event) => { Search(event.target.value); setDiseases2(event.target.value); }} style={{ borderRadius: "50px", border: "none" }} type="text" placeholder="What are you looking for ?" />
                                <button className="btnn text-white" onClick={() => searchSolution()} style={{ borderRadius: "50px" }} type="button">Search</button>
                                {(diseases2) ? <ul class="dropdown-menu m-2" style={{ width: "45%" }} aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        {searchdiseases.map((disease, i) => <span key={i}>
                                            <span className="dropdown-item" onClick={() => { Solution(disease); searchinput.value = disease.categoryName; }} style={{ margin: ".5vw" }}>{disease.categoryName}</span>
                                        </span>)}
                                    </li>
                                </ul> : <ul class="dropdown-menu m-2" style={{ width: "0!importent", display: "none", height: "0" }} aria-labelledby="dropdownMenuButton1">
                                    {/* <span>hello</span> */}
                                </ul>}
                            </form>
                            <ul className="navbar-nav navv d-flex align-items-sta" style={{}}>
                                {(sessionStorage.getItem('userExist') == 1) ?
                                    <li className="nav-list nav-item dropdown me-5">
                                        <div className="nav-link d-flex align-items-center dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="login-icon"></div>
                                            <span className="login-text">Profile</span>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none" }} to="/">
                                                    <div className="dropdown-item d-flex align-items-center bg-white" style={{ color: "var(--green)" }}>
                                                        <div className="login-user"></div>
                                                        <span className="login-texth ms-2">MyProfile</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li> <hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none" }} to="/">
                                                    <div className="dropdown-item d-flex align-items-center bg-white" style={{ color: "var(--green)" }}>
                                                        <div className="login-orders"></div>
                                                        <span className="login-texth ms-2">Orders</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li> <hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none", cursor: "pointer" }} to="/">
                                                    <div className="dropdown-item d-flex align-items-center bg-white" style={{ color: "var(--green)" }}>
                                                        <div className="login-cart"></div>
                                                        <span className="login-texth ms-2">Cart</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li> <hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none" }} onClick={() => sessionStorage.setItem('userExist', 0)}>
                                                    <div className="dropdown-item d-flex align-items-center bg-white" style={{ color: "var(--green)" }}>
                                                        <div className="login-logout"></div>
                                                        <span className="login-texth ms-2">Logout</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <li className="nav-list nav-item dropdown me-5">
                                        <div className="nav-link d-flex align-items-center dropdown-toggle loginheader" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="login-icon"></div>
                                            <span className="login-text">Login</span>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none" }} to="/user">
                                                    <div className="dropdown-item d-flex align-items-center bg-white">
                                                        <div className="login-user"></div>
                                                        <span className="login-texth ms-2" style={{ color: "var(--green)" }}>User</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link style={{ color: "var(--green)", textDecoration: "none" }} to="/doctorlogin">
                                                    <div className="dropdown-item d-flex align-items-center bg-white" style={{ color: "var(--green)" }}>
                                                        <div className="login-doctor"></div>
                                                        <span className="login-texth ms-2">Doctor</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                }
                                <li onClick={() => viewcart()} style={{ cursor: "pointer" }} className="nav-item d-flex align-items-center loginheader">
                                    <div className="cart-icon" style={{ fontSize: "19px" }}></div>
                                    <span className="cart-text">Cart</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "var(--green)" }}>
                    <div className="container-fluid d-flex justify-content-end">
                        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="text-white">Menu</span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="container-fluid nav-li navbar-nav nav-justified navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/">Home</Link></li>
                                <li className="nav-item btn-group dropdown">
                                    <span className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Disease</span>
                                    <ul className="dropdown-menu">
                                        <li className="d-flex flex-wrap justify-content-between dropdownlist" style={{ width: "60vw" }}>
                                            {diseases.map((disease, i) => <span key={i}>
                                                <span className="dropdown-item dlivalu loginheader bg-white" onClick={() => { Solution(disease); searchinput.value = ""; }} style={{ width: "200px", margin: ".5vw", cursor: "pointer" }}>{disease.categoryName}</span>
                                            </span>)}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/product">Products</Link></li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/yoga">Yoga</Link></li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/homeremedy">Homeremedies</Link></li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/aboutUs">About Us</Link></li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/doctorconsult">Doctor</Link></li>
                                <li className="nav-item loginheader"><Link className="nav-link" style={{ color: "var(--white)" }} to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </div >
        </div >
    );
};

export default Header;     