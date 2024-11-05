import React from 'react';
import ContactImg from '../assets/Contact.png';
import { GoArrowDownRight } from "react-icons/go";

const Contact = () => {
  return (
    <div className='container max-w-[1240px] my-[96px] w-full mx-auto'>
        <div className='flex shadow-2xl rounded-[30px] overflow-hidden bg-white'>
            <img src={ContactImg} alt="ContactImage" className='w-2/5 bg-[#d8d8d8]' />
            <div className='p-2 text-center mx-3 my-5 w-3/5'>
                <h2 className='font-bold text-2xl py-4'>Free Consultation</h2>
                <form action="" className='grid grid-cols-2 gap-2'>
                    <input 
                        type="text" 
                        name="fullName" 
                        id="fullName" 
                        placeholder='Full Name*' 
                        required 
                        className='border border-gray-300 placeholder:text-gray-300 px-4 py-2 m-4 rounded-lg text-black'
                    />
                    <textarea 
                        type="text" 
                        name="interest" 
                        id="interest" 
                        placeholder="I'm interested in*" 
                        required 
                        className='border border-gray-300 placeholder:text-gray-300 px-4 py-2 m-4 rounded-lg h-11'
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Email*' 
                        required 
                        className='border border-gray-300 placeholder:text-gray-300 px-4 py-2 m-4 rounded-lg'
                    />
                    <input 
                        type="number" 
                        name="number" 
                        id="number" 
                        placeholder='Phone Number*' 
                        required 
                        className='border border-gray-300 placeholder:text-gray-300 px-4 py-2 m-4 rounded-lg'
                    />
                </form>
                <button className='flex px-6 py-5 my-5 mx-auto w-3/4  font-bold cursor-pointer bg-[#89DB7B] rounded-[20px] gap-3 hover:shadow-2xl justify-center'>Get a Free Consultation <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
            </div>
        </div>

    </div>
  )
}

export default Contact