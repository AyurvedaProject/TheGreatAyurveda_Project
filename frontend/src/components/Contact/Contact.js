import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [failureMessage, setFailureMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add code to send the form data to your backend using AJAX

        // For demonstration purpose, just showing success message
        setSuccessMessage('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };
    return <>
        <section className="contact" style={{ width: "99vw" }}>

            <div className="contact-img">
                <div className="contact-img-main"></div>
            </div>
            


            <div className="text-overlay">
                <h1>Contact Us Today!</h1>
                <h2>Let's get fit and healthy together</h2>
            </div>

            <div className="container mt-4">
                <div className='row'>
                    <div className="col-md-6">
                        <h2>Make An Enquiry</h2>
                        <p>Hi please feel to contact us if you have any queries to us</p>
                        <div className="contact-form mt-4">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name<span> *</span></label>
                                                <input type="text" className="form-control form-control-sm custom-input custom-input mb-3" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email<span> *</span></label>
                                                <input type="email" className="form-control form-control-sm custom-input custom-input mb-3" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="Phone">Phone<span> *</span></label>
                                                <input type="tel" className="form-control form-control-sm custom-input mb-3" id="Phone" name="Phone" value={formData.phone} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="subject">Subject<span> *</span></label>
                                                <input type="text" className="form-control form-control-sm custom-input mb-3" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message<span> *</span></label>
                                                <textarea className="form-control form-control-sm custom-input mb-5" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                                            </div>
                                        </div>

                                    </div>
                                    <button type="submit" className="btn btn-primary custom-button mb-3">Send Query</button>
                                </div>

                            </form>
                            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                            {failureMessage && <div style={{ color: 'red' }}>{failureMessage}</div>}
                        </div>
                    </div>
                    <div className='col-md-4 ms-1'>
                        <h2>For Quick Enquiry</h2>
                        <p>We are happy to serve you at any time.....</p>
                        <div className='quick-enquiry'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4 mt-4'>
                                        <div className="support"></div>
                                    </div>
                                    <div className='col-md-8 mt-4 contactNo'>

                                        <p>+91 9109817209 , +91 7489896419, +91  8827142011</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12 ms-4 mt-4'></div>
                                        <p >OUR ADDRESS<br></br>
                                            Old Rajmohalla, Raj Mohalla South, Raj Mohalla, Indore, Madhya Pradesh 452002</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <br></br>
    </>
}
export default Contact;