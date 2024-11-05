import React from 'react'
import AboutImg from '../assets/About.png'
import { GoArrowDownRight } from "react-icons/go";

const About = () => {
  return (
    <div className='container max-w-[1240px] mt-[96px] w-full h-screen mx-auto'>
      <div className='grid grid-cols-2 gap-2'>
        <img src={AboutImg} alt="About Us" />
        <div className='text-left mt-5'>
          <h3 className='font-bold text-xl text-[#89DB7B] p-2'>About</h3>
          <h1 className='font-bold text-4xl mb-10'>Patient-Centered Care</h1>
          <p className='mb-14'>We are dedicated to providing exceptional dental care in a warm and welcoming environment. Our team of experienced, compassionate, and highly skilled professionals is here to ensure your dental experience is comfortable and stress-free.</p>
          <h2 className='font-bold text-2xl mb-5'>Our Mission</h2>
          <p className='mb-14'>At Goldfem Dental Clinic, our mission is to promote optimal oral health and create lasting, confident smiles. </p>
          <button className='flex px-6 py-5 my-auto font-bold cursor-pointer bg-[#89DB7B] rounded-[20px] gap-3 shadow-2xl'>Booking Now <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
        </div>  
      </div>
    </div>
  )
}

export default About