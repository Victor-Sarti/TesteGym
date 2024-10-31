import IconAspas from "../assets/aspas.png";
import IconUser from "../assets/member.jpg";
import arrowR from '../assets/arrowR.svg';
import arrowL from '../assets/arrowL.svg';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Feedback = () => {
    return (
        <>
            <div className="bg-customDarkGray p-10 mt-20 text-customWhite">
                <div className="flex items-start ml-36">
                    <img src={IconAspas} alt="aspas" className="w-10 h-10 mt-14 ml-10 text-customOrange" />

                    <div className="ml-10 mt-14">
                        <h1 className="text-xl font-semibold">MEMBER REVIEW</h1>
                        <p className="text-sm mt-4 leading-relaxed text-customWhite max-w-lg">
                            What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable,
                            approachable, and genuinely invested in helping members achieve their fitness goals. They take
                            the time to understand individual needs and create personalized workout plans, ensuring maximum
                            results and safety.
                        </p>

                        {/* Estrelas */}
                        <div className="flex mt-8 gap-2 text-customOrange">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                        </div>

                        {/*Usuário */}
                        <div className="flex items-center mt-6">
                            <img src={IconUser} alt="Jane Cooper" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">Jane Cooper</p>
                                <p className="text-xs text-gray-400">Software Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-end mr-80 space-x-4'>
                    {/* Botão das setas */}
                    <button className="w-12 h-12 border-2 border-customDarkOrange rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-8 h-8" src={arrowL} alt="Arrow Left" />
                    </button>
                    <button className="w-12 h-12 border-2 border-customDarkOrange rounded-full flex items-center justify-center cursor-pointer hover:bg-customDarkOrange hover:bg-opacity-30 transition">
                        <img className="w-8 h-8" src={arrowR} alt="Arrow Right" />
                    </button>

                </div>
            </div>
        </>
    )
}

export default Feedback;
