import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <main className='w-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#f2f0f1]'>
            {/* Left */}
            <div className=' w-full px-3 md:w-[450px] mt-3 md:mt-[70px] md:ml-[100px]'>
                <h1 className='text-4xl md:text-5xl font-extrabold '>
                    FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
                    </h1>
                <p className='text-xs mt-5 md:mt-3'>Browse through our diverse range of meticulously
                    crafted garments, designed to bring out your individuality
                    and cater to your sense of style.</p>
                <button className='bg-black py-3 px-10 rounded-[25px] text-sm mt-6 w-[330px] sm:w-[150px] md:mt-4 text-white'>Shop Now</button>
            </div>
            {/* Right */}
            <div className='relative'>
                {/* Profile Png */}
                <Image src={"/images/header-homepage.png"} width={200} height={200} alt='profile' className='w-[600px] mt-[17px] sm:w-[504px]'></Image>
                {/* Small-Star-Left Svg */}
                <Image src={"/icons/small-star.svg"} width={200} height={200} alt='profile' className=' w-[40px] absolute top-[115px] left-4 md:w-[40px] md:top-[220px] md:-left-4'></Image>
                {/* Big-Star-Right Svg */}
                <Image src={"/icons/big-star.svg"} width={200} height={200} alt='profile' className='w-[60px] absolute  top-[30px] left-[270px] md:w-[70px] md:top-[60px] md:left-[400px]'></Image>
            </div>
        </main>
    )
}

export default Hero