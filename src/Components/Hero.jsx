import HeroImg from '../assets/Frame 849.png'
import { GoArrowDownRight } from "react-icons/go";
import Substract from '../assets/Subtract.png';
import CustomerService from '../assets/CustomerService.png'
import Telescope from '../assets/Telescope.png';
import Star from '../assets/Star.png';
import Vector from '../assets/Vector.png';
const Hero = () => {
  return (
    <div className='container max-w-[1240px] mt-[96px] w-full h-screen mx-auto'>
        <div className='flex text-left text-black font-bold mx-auto pr-3'>
            <div className='w-[1000px] h-auto z-10'>
                <h1 className='text-6xl leading-relaxed'>Dental Excellence Starts Here: Your Guide to a Brighter, Healthier Smile</h1>
                <div className='flex my-4'>
                    <button className='flex px-6 py-3 my-auto font-bold cursor-pointer bg-[#89DB7B] rounded-[30px] z-10 gap-3'>Booking Now <GoArrowDownRight className="font-extrabold text-[25px]"/></button>
                    <img src={Substract} alt="Substract.png" className='ml-[-60px] w-20' />
                </div>
            </div>
            <img src={HeroImg} alt="Female Dentist Smiling" className='ml-[-50px]'/>
        </div>
        <div className='grid grid-cols-4 mt-[-50px] mx-auto gap-8 z-100'>
            <div className='px-5 py-7  shadow bg-white rounded-3xl'>
                <img src={CustomerService} alt="Customer Service" className='mb-2'/>
                <h2 className='font-bold text-xl'>Free Consultation</h2>
                <p>We offer flexible appointment scheduling and free to accommodate your busy life</p>
            </div>
            <div className='px-5 py-7  shadow bg-white rounded-3xl'>
                <img src={Telescope} alt="Telescope" className='mb-2'/>
                <h2 className='font-bold text-xl'>Expert Dentist</h2>
                <p>Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry</p>
            </div>
            <div className='px-5 py-7  shadow bg-white rounded-3xl'>
                <img src={Star} alt="Star" className='mb-2'/>
                <h2 className='font-bold text-xl'>High User Rating</h2>
                <p>We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized</p>
            </div>
            <div className='px-5 py-7  shadow bg-white rounded-3xl'>
                <img src={Vector} alt="Vector" className='mb-2'/>
                <h2 className='font-bold text-xl'>Best Equipment</h2>
                <p>Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible</p>
            </div>
        </div>
    </div>
  )
}

export default Hero