import React from 'react';
import Person1 from '../assets/person1.png';
import Person2 from '../assets/person2.png';
import Person3 from '../assets/person3.png';
import Person4 from '../assets/person4.png';
import Person5 from '../assets/person5.png';
import Person6 from '../assets/person6.png';

const Services = () => {
  return (
    <div className='container max-w-[1240px] mt-[100px] w-full h-screen mx-auto'>
        <div className='justify-center text-center'>
            <h3 className='font-bold text-xl text-[#89DB7B] p-2'>Satisfy Solution</h3>
            <h1 className='font-bold text-4xl mb-14'>The Best Dental Treatment</h1>
        </div>
        <div className='grid grid-cols-3 gap-5'>
            <div className='flex text-black bg-[#FEF0C3] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Teeth Whitening</h1>
                    <p className='text-sm font-bold text-sm'>Cosmetic treatment to enhance the whiteness of teeth</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person1} alt="Person1" />
            </div>
            <div className='flex text-black bg-[#FEE6DC] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Dental Implant</h1>
                    <p className='text-sm font-bold text-sm'>Surgical placement of artificial tooth roots</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person2} alt="Person2" />
            </div>
            <div className='flex text-black bg-[#DFF7EA] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Teeth Fillings</h1>
                    <p className='text-sm font-bold text-sm'>Restorative procedures to repair cavities and damaged teeth</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person3} alt="Person3" />
            </div>
            <div className='flex text-black bg-[#FEE6DC] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Oral Surgery</h1>
                    <p className='text-sm font-bold text-sm'>Surgical procedures, including extractios and dental implants</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person4} alt="Person4" />
            </div>
            <div className='flex text-black bg-[#DFF7EA] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Crown and Bridges</h1>
                    <p className='text-sm font-bold text-sm'>Restoration options for damaged or missing teeth</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person5} alt="Person5" />
            </div>
            <div className='flex text-black bg-[#FEF0C3] pt-8 pl-4 rounded-3xl overflow-hidden justify-between shadow-lg'>
                <div className='flex flex-col justify-around w-36'>
                    <h1 className='font-bold text-2xl'>Periodontal Care</h1>
                    <p className='text-sm font-bold text-sm'>Services for gum health, including scalling and root planing</p>
                    <button className='bg-white p-2 mb-7 rounded-2xl font-bold text-md w-36'>Read More</button>
                </div>
                <img src={Person6} alt="Person6" />
            </div>
        </div>
    </div>
  )
}

export default Services