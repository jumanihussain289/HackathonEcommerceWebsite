import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='bg-black w-full h-[122px] p-5 flex justify-center space-x-6 md:justify-around flex-wrap'>
        <Image src={"/icons/versace-logo.svg"} width={200} height={200} alt='profile' className='w-[100px] sm:w-[150px]'></Image>
        <Image src={"/icons/zara-logo.svg"} width={200} height={200} alt='profile' className='w-[70px] sm:w-[80px]'></Image>
        <Image src={"/icons/gucci-logo.svg"} width={200} height={200} alt='profile' className='w-[100px] sm:w-[130px]'></Image>
        <Image src={"/icons/prada-logo.svg"} width={200} height={200} alt='profile' className='w-[100px] sm:w-[150px]'></Image>
        <Image src={"/icons/calvin-klein-logo.svg"} width={200} height={200} alt='profile' className='w-[100px] sm:w-[150px]'></Image>
    </div>
  )
}

export default Brand


// <h1>VERSACE</h1>
// <h1>ZARA</h1>
// <h1>GUCCI</h1>
// <h1>PRADA</h1>
// <h1>CALVIN KLIEN</h1>