import React from 'react'
import WhyChooseUsImg from '../assets/WhyChooseUs.png'
import GoodSign from '../assets/goodcheck.png';
const WhyChooseUs = () => {
  return (
    <div className='container max-w-[1240px] mt-[96px] w-full h-screen mx-auto'>
        <div className='grid grid-cols-2 gap-5'>
            <div className='text-left mt-5 p-2 w-4/5'>
                <h3 className='font-bold text-xl text-[#89DB7B] p-2 pb-1'>Why Choose Us</h3>
                <h1 className='font-bold text-4xl p-2 mb-10 leading-relaxed'>Comprehensive <br /> Dental Services</h1>
                <ul className='list-none space-y-2'>
                    <li className='flex items-start '>
                        <img src={GoodSign} alt="GoodSign" className='w-3 mx-2 my-2' />
                        <p className='mb-3'>
                            <span className='font-bold'>Experienced Professionals: </span>
                            Our team consists of highly skilled and knowledgeable dental experts.
                        </p>
                    </li>
                    <li className='flex items-start '>
                        <img src={GoodSign} alt="GoodSign" className='w-3 mx-2 my-2' />
                        <p className='mb-3'>
                            <span className='font-bold'>State-of-the-Art Technology: </span>
                            We invest in the latest dental technology to provide the best care.
                        </p>
                    </li>
                    <li className='flex items-start '>
                        <img src={GoodSign} alt="GoodSign" className='w-3 mx-2 my-2' />
                        <p className='mb-3'>
                            <span className='font-bold'>Compassionate Care: </span>
                            We treat every patient with empathy and understanding.
                        </p>
                    </li>
                    <li className='flex items-start '>
                        <img src={GoodSign} alt="GoodSign" className='w-3 mx-2 my-2' />
                        <p className='mb-3'>
                            <span className='font-bold'>Patient Education: </span>
                            We believe in educating our patients about their oral health to make informed decisions.
                        </p>
                    </li>
                    <li className='flex items-start '>
                        <img src={GoodSign} alt="GoodSign" className='w-3 mx-2 my-2' />
                        <p className='mb-3'>
                            <span className='font-bold'>Convenient Hours: </span>
                            We offer flexible scheduling to accommodate your busy life.
                        </p>
                    </li>
                </ul>
            </div>
            <img src={WhyChooseUsImg} alt="Why choose us..." />
        </div>
    </div>
  )
}

export default WhyChooseUs