import React from 'react';
import logo from '../../assets/logo/25496642.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-opacity-20 bg-black  max-w-screen-xl ">
            <div>
                <div className='flex gap-1'>
                    <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                    <p className='mt-2 text-xl'>Language Learning</p>
                </div>
                <p>School learning is the acquisition of knowledge, subject matter, <br />  information, understanding, and skill from teaching.</p>
                <div className='flex gap-2'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>

            <div>
                <span className="footer-title">Quick Links</span>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Courses</a>
                <a className="link link-hover">Teacher</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Useful Links</span>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms and Condition</a>
                <a className="link link-hover">Disclaimer</a>
                <a className="link link-hover">Support</a>
            </div>
            <div>
                <span className="footer-title">Stay Connected</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="Your Email Address" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Send</button>
                    </div>
                </div>
            </div>

        </footer>
    );
};


export default Footer;