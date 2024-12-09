import React from 'react'

const Upperheader = () => {
    return (
        <div className='relative flex items-center justify-center text-white bg-black w-full h-[38px]'>
            <span className='text-sm text-center mx-4'>
                Sign up and get 20% off your first order.
                <a className='mx-2 underline' href="./">Sign Up Now</a>
            </span>
            <button
                className='absolute text-[10px] w-[20px] right-16 text-white focus:outline-none'
                aria-label="Close">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.225 5.811a.75.75 0 011.061-.026L12 10.31l4.714-4.526a.75.75 0 011.061.026.75.75 0 01-.026 1.06L13.062 12l4.687 4.684a.75.75 0 01-1.06 1.062L12 13.687l-4.713 4.684a.75.75 0 01-1.062-1.062L10.937 12l-4.713-4.684a.75.75 0 01-.026-1.06z"
                        clipRule="evenodd"
                    />
                </svg>

            </button>
        </div>
    );
};

export default Upperheader;