import React from 'react'
import WhyChooseUsImg from '../assets/WhyChooseUs.png'
import GoodSign from '../assets/goodcheck.png';
import BackgroundImg from '../assets/background.png';

const WhyChooseUs = () => {
  return (
    <div className='container max-w-[80%] mt-[96px] w-full h-full mx-auto'>
        <img src={BackgroundImg} alt="BackgroundImg" className='absolute right-0 top-[4100px] md:top-[2100px] lg:top-[1300px] w-2/4 md:w-2/4  -z-10'/>
        <div className='grid md:grid-cols-2 gap-5 z-10'>
            <div className='text-left mt-5 p-2 w-full z-10'>
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
            <img src={WhyChooseUsImg} alt="Why choose us..." className='hidden md:flex md:w-full'/>
        </div>
    </div>
  )
}

export default WhyChooseUs