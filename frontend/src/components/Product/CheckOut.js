
import { useLocation } from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react'
// import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import Header from "../Header/Header";
import Viewcart from "./Viewcart";
// import { Outlet } from "react-router-dom";



// import React from 'react';
// import Header from '../Header/Header';

// const Checkout = () => {

    // return <>
        {/* <div className="container-fluid">
            <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="container-fluid mt-3 p-2" style={{border:"1px solid", height:"400px"}}>
                    <h2>Account & Shipping Details</h2>
                    <div className='col-md-12 mt-2'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter your name" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <select className="form-control" id="state" defaultValue="Choose...">
                                        <option>Select State</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Delhi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 mt-2'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <select className="form-control" id="city" defaultValue="Choose...">
                                        <option>Select City</option>
                                        <option>Indore</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile *</label>
                                    <input type="number" className="form-control" id="mobile" placeholder="Mobile number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-12 mt-2'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="address">Address *</label>
                                    <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label htmlFor="landmark">Landmark *</label>
                                    <input type="text" className="form-control" id="landmark" placeholder="Ex-Near ATM, Bank, Shop etc." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6  mt-2'>
                        <div className='row'>
                            <div className="form-group">
                                <label htmlFor="pincode">Pincode *</label>
                                <input type="number" className="form-control" id="pincode" placeholder="Pincode" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
                    <h2>Order Summary</h2>
                    <div className="d-flex justify-content-between">
                        <p>Price (4 items)</p>
                        <p>₹748</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Discount</p>
                        <p>₹108</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total Amount</p>
                        <p>₹640</p>
                    </div>
                    <button type="button" className="btn btn-success">Place Order</button>
                </div>
            </div>
        </div> */}
    // </>
// }
// export default Checkout;


const Checkout = ()=> {
      const location = useLocation();
      const {cartItemList,totalBillAmount} = location.state;
   
    let firstName = useRef(null);
    let contact = useRef(null);
    let address = useRef(null);
    let city = useRef(null);
    let pinCode = useRef(null);

    
    return <>
        <Header/>
            <section className='container-fluid  p-4'>
               <section className='container p-2 justify-content-center row align-content-around m-auto d-flex' id='checkout-page' >
                    <div id='checkout-left' className='col-md-7 me-3 border'style={{height:"390px"}} >
                        <div className=' text-white p-2  d-flex justify-content-center align-items-center mt-2  rounded' style={{background:"var(--green)"}}>
                            <h6 style={{fontSize:"19px"}}>Account & Shipping Details</h6>
                        </div>

                            <div className='row form-group p-2'  style={{height:"320px"}}>
                                <div className='col-md-6 mt-2'>
                                    <label>Full Name*</label><br />
                                    <input type='text' required  ref={firstName} className='form-control' placeholder="Enter your name"/>
                                </div>
                                <div className='col-md-6 mt-2'>
                                <label htmlFor="city" placeholder="Select State">State *</label>
                                    <select className="form-control" id="city" defaultValue="Choose..." >
                                        <option>Select State</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>                                     
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Telangana</option>
                                        <option>Tamil Nadu</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>West Bengal</option>
                                        <option>Arunachal Pradesh</option>
                                    </select>
                                </div>
                            
                                <div className='col-md-6 mt-3'>
                                    <label>City*</label><br />
                                    <input type='number' ref={city} className='form-control'placeholder="Enter City" />
                                </div>
                            
                                <div className='col-md-6 mt-3'>
                                    <label>Phone Number*</label><br />
                                    <input type='number' ref={contact} className='form-control'placeholder="Mobile Number" />
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <label>Street Address*</label><br />
                                    <input type='text' ref={address} className='form-control'placeholder="Address" />
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <label>Pincode*</label><br />
                                    <input type='number' ref={pinCode} className='form-control' placeholder="Pincode" />
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <button  className='btn  mt-2 text-white' style={{background:"var(--green)"}}>Proceed to Pay</button>
                                </div>
                            </div>

                    </div>
                    <div id='checkout-right' className='border col-md-4'>
                        <div className='text-white rounded mt-2 container d-flex justify-content-center align-items-center p-2' style={{background:"var(--green)"}}>
                            <h6 style={{fontSize:"19px"}}>Cart Details</h6>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th >Product</th>
                                    <th>Qantity</th>
                                    <th style={{display:"block", marginLeft:"15px" }}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItemList?.map((product, index) => <tr key={index}>
                                    <td>{product["products.title"]}</td>
                                    <td className="text-center" >{product["products.cartItem.quantity"]}</td>
                                    <td className="text-center " style={{width:"80px"}}><BsCurrencyRupee/>{product["products.cartItem.quantity"] * (product["products.price"])}</td>
                                </tr>)} 
                            </tbody>
                            <hr />
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td></td>
                                    <th>{totalBillAmount}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </section>
        </>
}

export default Checkout;