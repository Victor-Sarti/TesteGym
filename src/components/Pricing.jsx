import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <>
            {/* Título */}
            <div className="flex justify-center px-4 sm:px-8">
                <div className="flex flex-col gap-4 items-center mt-20 sm:mt-40">
                    <h1 className="text-2xl sm:text-4xl text-customWhite font-semibold text-center">
                        Our Pricing Plan
                    </h1>
                    <p className="text-customWhite text-center text-sm sm:text-base">
                        Our pricing plan comes with various membership tiers, each tailored to
                        <span className="block">
                            cater to different preferences and fitness aspirations
                        </span>
                    </p>
                </div>
            </div>

            {/* Containers */}
            <div className="flex flex-wrap mt-10 justify-center gap-4 px-4 sm:px-8">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                        <div className="p-4 sm:p-6 bg-customDarkGray rounded-lg shadow-lg flex flex-col justify-between h-full text-center hover:scale-105 hover:border-white transition duration-300">
                            <div>
                                <p className="text-lg sm:text-xl font-semibold text-white mb-2">
                                    {option.title}
                                </p>
                                <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {option.price}
                                </p>
                                <hr className="border-t border-customOrange mb-3" />
                                <ul className="text-left mb-6">
                                    {option.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white mb-2"
                                        >
                                            <CheckCircle2 className="text-customDarkOrange mr-2" />
                                            <span className="text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="#"
                                className="inline-block w-full py-2 mt-4 text-sm sm:text-base font-semibold text-white border border-customDarkOrange rounded transition duration-200 hover:bg-customDarkOrange hover:text-customBlack"
                            >
                                Join Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Pricing;
