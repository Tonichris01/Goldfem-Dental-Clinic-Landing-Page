import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-t-2 border-black'>
        <div className='container max-w-[80%] my-5 w-full mx-auto'>
            <h1 className='text-3xl font-bold text-[#75B8EE]'>Goldfem Dental Clinic</h1>
            <div className='grid md:grid-cols-3 p-5'>
                <div className='text-left p-3'>
                    <h3 className='font-bold text-xl py-2'>Company</h3>
                    <ul className='list-none space-y-2'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Why Choose Us</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='text-left p-3 space-y-2'>
                    <h3 className='font-bold text-xl py-2'>Address</h3>
                    <p>123 Dental Avenue City ville, State 12345 United States</p>
                    <a href="###" className='underline hover:text-purple-700'>View on Maps</a>
                    <h3 className='font-bold text-xl py-2'>Inquires</h3>
                    <p>(123) 456-7890</p>
                    <p>info@goldfemdenatlcare.com</p>
                </div>
                <div className='text-left p-3 space-y-2'>
                    <h3 className='font-bold text-xl py-2'>Follow Us</h3>
                    <div className='flex space-x-3'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer