'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from '@/components/sheet';


const Navbar: FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white shadow-md px-4 flex sm:px-6 py-3 justify-between">
            <div className="container mx-auto flex justify-between items-center">
                {/* Mobile Menu Button */}
                <SheetSide/>
                {/* Logo and Links */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <h1 className="text-xl sm:text-2xl font-black text-gray-800">
                        <Link href="/">SHOP.CO</Link>
                    </h1>
                </div>
                {/* Navigation Links */}
                    <div>
                    <ul className="hidden sm:flex space-x-4 text-gray-600">
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
                                        <Link href="/category1">Category 1</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/category2">Category 2</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/category3">Category 3</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="hover:text-gray-800">
                            <Link href="/on-sale">On Sale</Link>
                        </li>
                        <li className="hover:text-gray-800">
                            <Link href="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li className="hover:text-gray-800">
                            <Link href="/brands">Brands</Link>
                        </li>
                    </ul>
                    </div>
                {/* Search Bar, Cart, and Profile */}
                <div className="flex items-center justify-between w-full sm:w-auto space-x-4">
                    {/* Search Bar */}
                    <div className="relative flex-grow sm:flex-grow-0">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-[200px] hidden sm:w-[250px] md:block  md:w-[200px] lg:w-[400px] xl:w-[500px] rounded-full py-2 pl-10 pr-4 bg-gray-100 bg-opacity-75 text-gray-600 focus:outline-none hover:bg-gray-200"
                        />
                        <IoIosSearch className="hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 " />
                        
                    </div>
                    {/* className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" */}
                    {/* Cart Icon */}
                    <button className="rounded-full p-2 hover:bg-gray-100 md:hidden ">
                        <IoIosSearch/>
                    </button>
                    <button className="rounded-full p-2 hover:bg-gray-100">
                        <LuShoppingCart />
                    </button>

                    {/* Profile Icon */}
                    <button className="rounded-full p-2 hover:bg-gray-100 ">
                        <FaRegUserCircle />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
