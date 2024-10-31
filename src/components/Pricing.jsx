import { CheckCircle2 } from "lucide-react";
import { features, pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <>
            {/* Titulo*/}
            <div className=" flex justify-center">
                <div className=" flex-col flex gap-7 items-center mt-40">
                    <h1 className=" text-4xl text-customWhite font-semibold"> Our Pricing Plan</h1>
                    <p className=" text-customWhite text-x ">Our pricing plan comes with various membership tiers, each tailored to
                        <span className=" flex-col flex justify-center items-center">
                            cater to different preferences and fitness aspirations
                        </span>
                    </p>
                </div>
            </div>
            
            {/* containers*/}
            <div className="flex flex-wrap mt-10 justify-center">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full  sm:w-1/2 lg:w-1/4 p-2">
                        <div className="p-6 bg-cus rounded-lg bg-customDarkGray shadow-lg flex gap-15 flex-col justify-between h-full text-center">
                            <div>
                                <p className="text-xl font-semibold text-white mb-2">{option.title}</p>
                                <p className="text-2xl font-bold text-white mb-2">{option.price}</p>
                                <hr className="border-t border-customOrange mb-3" />
                                <ul className="text-left mb-6">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="flex mt-10 items-center text-white mb-2">
                                            <CheckCircle2 className="text-customDarkOrange mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href="#" className="inline-block w-full py-2 mt-4 text-base font-semibold text-white border border-customDarkOrange rounded transition duration-200 hover:bg-customDarkOrange hover:text-black">
                                Join Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Pricing
