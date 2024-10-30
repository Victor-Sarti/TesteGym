import IconStrength from '../assets/strength.png';
import IconHeart from '../assets/heart.png';
import IconRun from '../assets/run.png';
import IconCart from '../assets/cart.png';

import arrowR from '../assets/arrowR.svg';
import arrowL from '../assets/arrowL.svg';

const ProgamSection = () => {
    return (
        <>
            <div className="flex items-center justify-between pl-56 pt-24 ">
                <h1 className="text-2xl text-white">EXPLORE OUR PROGRAM</h1>
                <div className=' flex mr-80 space-x-4'>
                    {/* Botão das setas */}
                    <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-8 h-8" src={arrowL} alt="Arrow Left" />
                    </button>
                    <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-8 h-8" src={arrowR} alt="Arrow Right" />
                    </button>
                </div>
            </div>

            {/* Boxes de Programas */}
            <div className="flex  gap-6 px-56 py-8">
                {/* Box de "Strength" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white w-64 shadow-lg hover:border hover:border-white transition duration-300">
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
                <div className="bg-customDarkGray p-6 rounded-lg text-white w-64 shadow-lg hover:border hover:border-customOrange transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconHeart} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Pysical Fitness</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of Hearts as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>

                {/* Box de "Fat" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white w-64 shadow-lg hover:border hover:border-customOrange transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconRun} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Fat lose</h3>
                    <p className="text-sm text-gray-400 mt-2">
                        Embrace the essence of Fat as we delve into its various dimensions: physical, mental, and emotional.
                    </p>
                    <a href="#" className="text-white hover:text-customOrange transition duration-200 font-semibold mt-4 inline-block">
                        Join Now →
                    </a>
                </div>
                {/* Box de "Fat" */}
                <div className="bg-customDarkGray p-6 rounded-lg text-white w-64 shadow-lg hover:border hover:border-customOrange transition duration-300">
                    <div className="bg-customOrange p-2 rounded-md inline-block">
                        <img src={IconCart} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Fat lose</h3>
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
}

export default ProgamSection;
