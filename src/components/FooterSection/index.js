import './index.css'

import { LiaFlagUsaSolid } from "react-icons/lia"

import { BsDot } from "react-icons/bs"

import { FaSquareInstagram, FaFacebook } from "react-icons/fa6"

import { AiFillTwitterCircle } from "react-icons/ai"

import { FaRegCopyright, FaLinkedin } from "react-icons/fa"

const FooterSection = () => {
    return (
        <footer className='footer-holder'>
            <div className='footer-upper-section'>
            <div className='upper-left-holder'>
            <p className='bold-text-line'>BE THE FIRST TO KNOW</p>
            <p className='thin-text-line'>Be the first to know about our latest updates, offers, and trends! Sign up now and stay ahead with exclusive deals and news.
            Join our community and never miss out on amazing opportunities.
            Your next favorite product is just a click away!
            📧 Subscribe Now to stay connected!
            </p>
            <div className='email-subscribe-btn'>
                <input type="text" className='email-input' placeholder='Enter the Email'/>
                <button className='subscribe-btn'>Subscribe</button>
            </div>
            </div>
            <div className='upper-right-holder'>
            <p className='bold-text-line'>CONTACT US</p>
            <p className='thin-text'>++ 44 221 133 5360</p>
            <p className='thin-text'>customercare@shoppify.com</p>
            <p className='bold-text-line'>CURRENCY</p>
            <div className='currency-holder'>
            <LiaFlagUsaSolid size="1.5rem" color='#ffffff'/> 
            <BsDot size="1.5rem" color='#ffffff'/>
            <p className='thin-text'>USD</p>
            </div>
            </div>
            </div>
            <hr className='separator'/>

            <div className='footer-lower-section'>
            
            <ul className='links1'>
                <li className='bold-text-line'>Shoppify</li>
                <li className='link'>About Us</li>
                <li className='link'>Stories</li>
                <li className='link'>Artisans</li>
                <li className='link'>Boutiques</li>
                <li className='link'>Contact Us</li>
            </ul>

            
            <ul className='links2'>
                <li className='bold-text-line'>QUICK LINKS</li>
                <li className='link'>Join/Login as a Seller</li>
                <li className='link'>Payment & pricing</li>
                <li className='link'>FAQs</li>
                <li className='link'>Privacy Policy</li>
                <li className='link'>Terms & Conditions</li>
            </ul>

            <div className='follow-section'>
            <p className='follow-text'>FOLLOW US</p>
            <div className='social-media-icons'>
            <FaLinkedin size="1.5rem" color='#ffffff'/>
            <FaSquareInstagram size="1.5rem" color='#ffffff'/>
            <AiFillTwitterCircle size="1.5rem" color='#ffffff'/>
            <FaFacebook size="1.5rem" color="#ffffff"/>
            </div>
            </div>
            </div>
            
            <p className='last-text'>Copyright<FaRegCopyright color="#ffffff" size="0.5rem"/>
            2024 Shoppify. All rights reserved.</p>
        </footer>
    )
}

export default FooterSection