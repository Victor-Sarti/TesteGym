import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">

                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-10" src={logo} alt="logo" />
                        </div>

                        {/* Menu para desktop */}
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            <nav className="flex space-x-10">
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-customDarkOrange after:transition-all after:duration-300 hover:after:w-full">Home</a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-customDarkOrange after:transition-all after:duration-300 hover:after:w-full">Program</a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-customDarkOrange after:transition-all after:duration-300 hover:after:w-full">Service</a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-customDarkOrange after:transition-all after:duration-300 hover:after:w-full">About</a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-customDarkOrange after:transition-all after:duration-300 hover:after:w-full">Community</a>
                            </nav>
                        </ul>

                        {/* Botão "Join Now" para desktop */}
                        <div className="hidden lg:flex justify-center pl-20 items-center">
                            <a href="#" className="bg-customOrange hover:bg-customDarkOrange border-customDarkOrange py-2 px-3 rounded-md button-scale-on-hover text-customWhite hover:text-customDarkGray transition-colors duration-200">Join Now</a>
                        </div>

                        {/* Ícone do menu hambúrguer para mobile */}
                        <button 
                            className="lg:hidden text-white" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu lateral para mobile */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
                    <div className="bg-white w-3/4 h-full p-5">
                        <ul className="space-y-6">
                            <li><a href="#" className="block text-black">Home</a></li>
                            <li><a href="#" className="block text-black">Program</a></li>
                            <li><a href="#" className="block text-black">Service</a></li>
                            <li><a href="#" className="block text-black">About</a></li>
                            <li><a href="#" className="block text-black">Community</a></li>
                        </ul>
                        <div className="mt-6">
                            <a href="#" className="block bg-customOrange hover:bg-customDarkOrange border-customDarkOrange py-2 px-3 rounded-md text-white text-center">Join Now</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
