"use client"
import SizeSelector from "@/app/components/size";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Image from "next/image";

import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />,]

interface Iproduct {
    id: number;
    title: string;
    price: string;
    rating?: string;
    img_url: string;
    des: string;
    oldPrice: string;
    img1: string;
    img2: string;
    img3: string;

}

let product = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: "$120",
        des: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        odlPrice: "200",
        img_url: "/images/pic1.png",
        img1: "/images/pic9.png",
        img2: "/images/pic10.png",
        img3: "/images/pic11.png",

    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$120",
        des: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        img_url: "/images/pic2.png",
        oldPrice: "$150",
        img1: "/images/pic9.png",
        img2: "/images/pic10.png",
        img3: "/images/pic11.png",
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$120",
        des: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        img_url: "/images/pic3.png",
        img1: "/images/pic9.png",
        img2: "/images/pic10.png",
        img3: "/images/pic11.png",
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$120",
        des: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        img_url: "/images/pic4.png",
        oldPrice: "$150",
        img1: "/images/pic9.png",
        img2: "/images/pic10.png",
        img3: "/images/pic11.png",
    },


]

export default function Pro_Detail() {
    const params = useParams();
    const id = params.id;
    const item = product.find((data) => data.id === Number(id));
    if (!item) {
        return <h1>Product not found</h1>
    }
    return (
        
        <div className="flex fle-col md:flex-row justify-center mt-10 ">
            
            {/* Left */}
            <div className=" w-[152px] px-3 items-start">
                {/* Images */}
                <Image src={item.img1} className="w-full h-[135px] rounded-lg" alt="productdetail" width={100} height={100}></Image>
                <Image src={item.img2} className="w-full h-[135px] mt-3 rounded-lg" alt="productdetail" width={100} height={100}></Image>
                <Image src={item.img3} className="w-full h-[135px] mt-3 rounded-lg" alt="productdetail" width={100} height={100}></Image>
            </div>
            {/* Mid Div */}
            <div className=" w-[400px] h-[500px] ">
                <Image src={item.img1} className="w-full h-[430px] rounded-lg" alt="productdetail" width={100} height={100}></Image>
            </div>
            {/* Right Div */}
            <div className="w-[600px] h-[430px] pl-5 ">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-extrabold">{item.title}</h1>
                    <h1 className="flex text-yellow-400 space-x-1">{star}</h1>
                    <p className="font-semibold text-3xl"> {item.price} <span className="text-gray-400 font-semibold line-through">{item.oldPrice}</span></p>
                    <p className="text-gray-400">{item.des}</p>
                    
                    <div className="mt-5">
                        <hr />
                    </div>
                </div>
                {/* Color Selection */}
                <div className="mt-3">
                    <p className="text-gray-400">Select Color</p>
                </div>
                <div className="flex space-x-3 mt-1 ">
                    <div className="w-[40px] h-[40px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
                    <div className="w-[40px] h-[40px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
                    <div className="w-[40px] h-[40px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
                </div>
                <div className="mt-5">
                    <hr />
                </div>
                

                {/* Size Selection */}
               <SizeSelector/>
                <div className="mt-5">
                    <hr />
                </div>
                {/* BUTTONS */}
                <div className="flex justify-between mt-3">
                    <div className=" flex justify-between w-[150px] px-4 py-2 rounded-[20px] bg-[#F0F0F0] text-gray-400">
                        <Minus />
                        1
                        <Plus />
                    </div>
                    <Button className="bg-black w-[400px] rounded-[20px] h-10">Add To Cart</Button>
                </div>
            </div>
        </div>

    )
}