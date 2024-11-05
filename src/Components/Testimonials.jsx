import React from 'react'
import MapBackground from  '../assets/MapsComponent.png';
import TestimonialPerson from '../assets/Testimonial.png';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='bg-[#DFF7EA]'>
        <div className='container max-w-[1240px] mt-[96px] w-full h-screen mx-auto'>
            <div className='items-center text-center '>
                <img src={MapBackground} alt="Map Background" className='opacity-30 absolute top-[3740px]'/>
                <h3 className='font-bold text-xl  p-2 pb-1 pt-10'>Testimonials</h3>
                <h1 className='font-bold text-4xl p-2 mb-10 leading-relaxed'>What People Say About Us</h1>
                <div className='flex flex-col text-center z-10'>
                    <img src={TestimonialPerson} alt="TestimonialImage" className='mx-auto mt-24' />
                    <div className='flex justify-between my-5'>
                        <FaRegArrowAltCircleLeft className='text-3xl m-auto cursor-pointer'/>
                        <p className='w-2/5 font-bold text-3xl'>"In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."</p>
                        <FaRegArrowAltCircleRight className='text-3xl m-auto cursor-pointer'/>
                    </div>
                    <h3 className='font-bold pt-5'>David Gahan</h3>
                    <p>Detroit, Michigan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials