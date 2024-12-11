import React from 'react'
import AboutImg from '../assets/About.png'
import { GoArrowDownRight } from "react-icons/go";

const About = () => {
  return (
    <div className='container max-w-[80%] mt-[96px] w-full h-full mx-auto'>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={AboutImg} alt="About Us" className='hidden md:flex'/>
        <div className='text-left mt-5 space-y-5'>
          <h3 className='font-bold text-xl text-[#89DB7B] p-2'>About</h3>
          <h1 className='font-bold text-2xl lg:text-4xl'>Patient-Centered Care</h1>
          <p className=''>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</p>
          <h2 className='font-bold text-2xl'>Our Mission</h2>
          <p className=''>At Goldfem Dental Clinic, our mission is to promote optimal oral health and create lasting, confident smiles. </p>
          <button className='flex px-6 py-5 my-auto font-bold cursor-pointer bg-[#89DB7B] rounded-[20px] gap-3 shadow-2xl'>Booking Now <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
        </div>  
      </div>
    </div>
  )
}

export default About