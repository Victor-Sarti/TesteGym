import ManOne from "../assets/man1.jpg";
import ManTwo from "../assets/man2.jpg";
const Class = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen text-customWhite p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex items-center justify-center min-h-screen ">
                        <div className="relative">
                            {/* Imagem de fundo maior */}
                            <img src={ManOne} className="w-full h-full bg-cover bg-center rounded-lg shadow-lg" alt="" />
                            {/* Imagem sobreposta menor */}
                            <img src={ManTwo} className="absolute bottom-[-70px]  -left-16 w-80 h-48 bg-cover bg-center rounded-lg shadow-lg border-4 border-customDarkGray transform" alt="" />  
                        </div>
                        
                    </div>
                    {/* Texto e botão */}
                    <div className="text-left max-w-md">
                        <h2 className="text-3xl font-bold mb-4">THE CLASS YOU WILL </h2>
                        <h2 className="text-3xl font-bold mb-4" >  GET HERE</h2>
                        <p className="text-customLightGray mb-6">
                            Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness endeavors.
                        </p>
                        <div className="mt-11 ">
                            <a href=" " className="  bg-customOrange hover:bg-customDarkOrange border-t-customDarkOrange py-4 px-5 rounded-md button-scale-on-hover text-white hover:text-customBlack transition-colors duration-200"> Book A Class</a>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Class
