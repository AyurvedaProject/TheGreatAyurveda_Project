import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer border" style={{ backgroundColor: "var(--green)", color: "var(--white)", width: "99vw" }}>
                <div className="footer-inner m-1 ms-3 me-3">
                    <div className="footer-top d-flex justify-content-between flex-wrap">
                        <div className="footer-customersupport  d-flex flex-column p-3">
                            <h3 className="footer-h3">Customer Support</h3>
                            <small className="footer-values links ps-3">Contact Us</small>
                            <small className="footer-values links ps-3">FAQ</small>
                            <small className="footer-values links ps-3">Track Order</small>
                            <small className="footer-values links ps-3">Return & Exchange</small>
                            <small className="footer-values links ps-3">Shipping Location</small>
                        </div>
                        <div className="footer-aboutus d-flex flex-column p-3">
                            <h3 className="footer-h3">About Us</h3>
                            <small className="footer-values links ps-3">Our Story</small>
                            <small className="footer-values links ps-3">Blogs</small>
                            <small className="footer-values links ps-3">Ingredients Index</small>
                            <small className="footer-values links ps-3">Hotel & Spa</small>
                            <small className="footer-values links ps-3">Media</small>
                        </div>
                        <div className="footer-account  d-flex flex-column p-3">
                            <h3 className="footer-h3">Your Account</h3>
                            <small className="footer-values links ps-3">My Account</small>
                        </div>
                        <div className="footer-privacypolicy">
                            <div className="footer-privacypolicy-top d-flex flex-column p-3">
                                <h3 className="footer-h3">Privacy and Terms</h3>
                                <small className="footer-values links ps-3">Privacy Policy</small>
                                <small className="footer-values links ps-3">Terms & Conditions</small>
                            </div>
                            <div className="footer-privacypolicy d-flex justify-content-evenly flex-wrap social-icons">
                                <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark footer-icon icon-google"></div>
                                <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark footer-icon icon-facebook"></div>
                                <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark footer-icon icon-git"></div>
                                <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark footer-icon icon-linkedin"></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex align-items-center flex-wrap">
                        <div className="footer-logo ms-3"></div>
                        <div className="footer-text d-flex flex-wrap ms-3">
                            <h6>Worldwide Copyright © The Great Ayurveda  (brand owners of The Great Ayurveda). All rights reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
