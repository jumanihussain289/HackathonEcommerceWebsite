import React from 'react';
import { FaPlus } from "react-icons/fa";

const Upperheader = () => {
    return (
        <div className='relative flex items-center justify-center text-white bg-black w-full h-[38px] sm:h-[42px] md:h-[46px] lg:h-[50px]'>
            <span className='text-xs sm:text-sm md:text-base lg:text-lg text-center mx-4'>
                Sign up and get 20% off your first order.
                <a className='mx-2 underline hover:text-gray-300 transition duration-200' href="./">Sign Up Now</a>
            </span>
            <button 
                className='hidden sm:block transform rotate-45 absolute text-[10px] sm:text-xs md:text-sm lg:text-base w-[20px] sm:w-[24px] right-4 sm:right-8 md:right-12 lg:right-16 text-white focus:outline-none hover:text-gray-300 transition duration-200' 
                aria-label="Close"
            >
                <FaPlus />
            </button>
        </div>
    );
};

export default Upperheader;
