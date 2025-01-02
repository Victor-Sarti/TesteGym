import IconStrength from '../assets/strength.png';
import IconHeart from '../assets/heart.png';
import IconRun from '../assets/run.png';
import IconBasket from '../assets/basket.png';

import arrowR from '../assets/arrowR.svg';
import arrowL from '../assets/arrowL.svg';

const ProgamSection = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-16 lg:px-56 pt-8 sm:pt-16">
                <h1 className="text-lg sm:text-2xl text-white text-center sm:text-left">EXPLORE OUR PROGRAM</h1>
                <div className="flex mt-4 sm:mt-0 space-x-4">
                    {/* Botão das setas */}
                    <button className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-6 h-6 sm:w-8 sm:h-8" src={arrowL} alt="Arrow Left" />
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-6 h-6 sm:w-8 sm:h-8" src={arrowR} alt="Arrow Right" />
                    </button>
                </div>
            </div>

            {/* all Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-16 lg:px-56 py-8">
                <div className="absolute mt-64 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>

                {/* Box de "Strength" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white shadow-lg hover:border transform hover:scale-105 hover:border-white transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconStrength} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Strength</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of strength as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>

                {/* Box de "Heart" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white shadow-lg hover:border transform hover:scale-105 hover:border-white transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconHeart} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Physical Fitness</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of Hearts as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>

                {/* Box de "Fat" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white shadow-lg hover:border transform hover:scale-105 hover:border-white transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconRun} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Fat Loss</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of Fat as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>

                {/* Box de "Weight" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white shadow-lg hover:border transform hover:scale-105 hover:border-white transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconBasket} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Weight Gain</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of Buy as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProgamSection;
