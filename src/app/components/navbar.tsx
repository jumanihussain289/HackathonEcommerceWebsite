'use client'
import { FC, useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar: FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md px-6 py-3">
            <div className="container mx-auto flex justify-center gap-10 items-center">
                <div className="flex items-center space-x-6">
                    <h1 className="text-2xl font-black text-gray-800">SHOP.CO</h1>
                    <ul className="hidden md:flex space-x-4 text-gray-600">
                        <li className="relative hover:text-gray-800">
                            <button
                                onClick={toggleDropdown}
                                className="focus:outline-none flex items-center space-x-1"
                            >
                                <span>Shop</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-40">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <a href="#">Category 1</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <a href="#">Category 2</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <a href="#">Category 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="hover:text-gray-800">
                            <a href="#">On Sale</a>
                        </li>
                        <li className="hover:text-gray-800">
                            <a href="#">New Arrivals</a>
                        </li>
                        <li className="hover:text-gray-800">
                            <a href="#">Brands</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-6 w-full md:w-auto">
                    {/* Search Bar */}
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-[500px] rounded-full py-2 pl-10 pr-4 bg-gray-100 bg-opacity-75 text-gray-600 focus:outline-none  focus:hover:bg-gray-100" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            />
                        </svg>
                    </div>

                    {/* Cart Icon */}
                    <button className="rounded-full p-2">
                    <LuShoppingCart/>
                    </button>

                    {/* Profile Icon */}
                    <button className="rounded-full p-2">
                    <FaRegUserCircle />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
