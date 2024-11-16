import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='left-box'>

                        <div className='box'>
                            <div className='icon_box'>
                                <FaPiggyBank />
                            </div>
                            <div className='detail'>
                                <h3>Great Saving</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaShippingFast />
                            </div>
                            <div className='detail'>
                                <h3>Free Delivery</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon_box'>
                                <FaHeadphones />
                            </div>
                            <div className='detail'>
                                <h3>24X7 support</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon_box'>
                                <FaWallet />
                            </div>
                            <div className='detail'>
                                <h3>Money back</h3>
                                <p>Lorem ipsum dolor sit amet,</p>
                            </div>
                        </div>

                    </div>
                    <div className='right-box'>
                        <div className='header'>
                            <img src=' logo.webp' alt=''></img>
                            <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis facibus</p>
                        </div>
                        <div className='bottom'>
                            <div className='box'>
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>payment</li>
                                    <li>sales</li>
                                </ul>
                            </div>

                            <div className='box'>
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New product</li>
                                    <li>Old product</li>
                                </ul>
                            </div>

                            <div className='box'>
                                <h3>Contact us</h3>
                                <ul>
                                    <li>4005, Silver Business pointIndia</li>
                                    <li>+(012)99999999</li>
                                    <li>info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer