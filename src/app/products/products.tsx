import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproduct {
    id: number;
    title: string;
    price: string;
    rating?: string;
    img_url: string;
    oldPrice: string;
}

let product = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: "$120",
        img_url: "/images/pic1.png"
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: "$120",
        img_url: "/images/pic2.png",
        oldPrice: "$150"
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: "$120",
        img_url: "/images/pic3.png"
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: "$120",
        img_url: "/images/pic4.png",
        oldPrice: "$150"
    },
];

let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];

export default function New_Arrivals() {
    return (
        <div className="w-full">
            {/* Title */}
            <h1 className="text-3xl mt-10 md:text-5xl font-extrabold text-center">NEW ARRIVALS</h1>

            {/* Product Grid */}
            <div className="mt-8 px-4 md:px-6">
                {/* Small screens: horizontal scroll */}
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide sm:hidden">
                    {product.map((data) => (
                        <div key={data.id} className="flex-shrink-0 w-[240px]">
                            <Link href={`/products/${data.id}`}>
                                <div className="w-full h-[230px] bg-[#F0EEED] rounded-[15px]">
                                    <Image
                                        src={data.img_url}
                                        alt="product"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-[15px]"
                                    />
                                </div>
                            </Link>
                            <div>
                                <p className="text-sm mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">
                                    {data.price}{" "}
                                    <span className="text-gray-400 font-bold line-through">{data.oldPrice}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sm screens: 2x2 grid with padding */}
                <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 sm:px-6 md:hidden">
                    {product.map((data) => (
                        <div key={data.id}>
                            <Link href={`/products/${data.id}`}>
                                <div className="w-full h-[230px] bg-[#F0EEED] rounded-[15px]">
                                    <Image
                                        src={data.img_url}
                                        alt="product"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-[15px]"
                                    />
                                </div>
                            </Link>
                            <div>
                                <p className="text-sm mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">
                                    {data.price}{" "}
                                    <span className="text-gray-400 font-bold line-through">{data.oldPrice}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Md+ screens: Flexbox layout that wraps */}
                <div className="hidden md:flex flex-wrap justify-center gap-6 px-6">
                    {product.map((data) => (
                        <div key={data.id} className="w-full sm:w-[240px]">
                            <Link href={`/products/${data.id}`}>
                                <div className="w-full h-[230px] bg-[#F0EEED] rounded-[15px]">
                                    <Image
                                        src={data.img_url}
                                        alt="product"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-[15px]"
                                    />
                                </div>
                            </Link>
                            <div>
                                <p className="text-sm mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">
                                    {data.price}{" "}
                                    <span className="text-gray-400 font-bold line-through">{data.oldPrice}</span>
                                </p>
                            </div>
                    
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-10">
                    <Button variant={"outline"} className="rounded-3xl text-gray-400 font-extralight w-[120px]">View All</Button>
                </div>
                <br />
                <br />
                <hr />
            </div>
        </div>
    );
}
