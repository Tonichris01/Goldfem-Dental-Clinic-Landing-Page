import { useState } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-around items-center h-24 max-w-[1240px] mx-auto px-4 gap-10 text-black'>
        <h1 className='text-3xl font-bold text-[#75B8EE]'>Goldfem Dental Clinic</h1>
        <ul className='hidden lg:flex'>
            <li className='p-4 font-bold cursor-pointer'>Home</li>
            <li className='p-4 font-bold cursor-pointer'>Services</li>
            <li className='p-4 font-bold cursor-pointer'>About Us</li>
            <li className='p-4 font-bold cursor-pointer'>Why Choose Us</li>
            <li className='p-4 font-bold cursor-pointer'>Testimonials</li>
        </ul>
        <button className='hidden lg:flex p-4 font-bold cursor-pointer border-2 border-[#89DB7B] rounded-[30px]'>Contact Us <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
        {/* hamburger Icon */}
        <div onClick={handleNav} className="block lg:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-black bg-[#F3F3F3] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl font-bold text-[#75b8ee] m-7'>Goldfem Dental Clinic</h1>
            <ul className="uppercase p-4">
                    <li className='p-4 font-bold cursor-pointer'>Home</li>
                    <li className='p-4 font-bold cursor-pointer'>Services</li>
                    <li className='p-4 font-bold cursor-pointer'>About Us</li>
                    <li className='p-4 font-bold cursor-pointer'>Why Choose Us</li>
                    <li className='p-4 font-bold cursor-pointer'>Testimonials</li>
            </ul>
            <button className='flex lg:hidden px-6 py-4 mx-4 font-bold cursor-pointer border-2 border-[#89DB7B] rounded-[30px]'>Contact Us <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
        </div>
</div>
  )
}

export default Navbar