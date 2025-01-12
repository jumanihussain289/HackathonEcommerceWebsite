import { useState } from "react";

export default function SizeSelector() {
    const [selectedSize, setSelectedSize] = useState<string | null>(null); // Explicitly define type as string or null

    const sizes = ["Small", "Medium", "Large", "X-Large"]; // Available sizes

    return (
        <div className="mt-3">
            <p className="text-gray-400">Choose Size</p>
            <div className="flex space-x-3 mt-1">
                {sizes.map((size) => (
                    <div
                        key={size}
                        className={`px-4 py-2 rounded-[20px] ${
                            selectedSize === size ? "bg-blue-500 text-white" : "bg-[#F0F0F0] text-gray-400"
                        } cursor-pointer`}
                        onClick={() => setSelectedSize(size)} // Update selected size on click
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    );
}
