import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-between items-center -translate-y-[-1/2] px-16'>
            {/* Left */}
            <div className='bg-red-400 w-[400px] space-y-10'>
                <h1 className='text-5xl font-bold'>FIND CLOTHES  THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously
                    crafted garments, designed to bring out your individuality
                    and cater to your sense of style.</p>
                <button>Shop Now</button>
            </div>
            {/* Right */}
            <div>
                <Image src={""}  alt='profile'></Image>
            </div>
        </div>
    )
}

export default Hero