import man from "../assets/man.png";

const ManSection = () => {
    return (
        // CAIXA DE TEXTO 
        <div className="flex mt-28 ml-8 sm:ml-16 md:ml-32 lg:ml-56 gap-8 sm:gap-16 md:gap-32">
            <div className="flex-col">
                <h1 className="text-xs text-customOrange">BEST FITNESS IN THE TOWN</h1>
                {/* EFEITO BRUSH */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>
                <div className="mt-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl">
                        <div className="flex space-x-4">
                            <span className="text-customBlack font-bold text-4xl sm:text-5xl md:text-6xl" style={{ WebkitTextStroke: "1px white" }}>
                                MAKE
                            </span>
                            <span className="font-bold text-4xl sm:text-5xl md:text-6xl">YOUR</span>
                        </div>
                        <div className="mt-5 font-bold text-sm sm:text-base md:text-lg">BODY SHAPE 
                            <p className="text-xs sm:text-sm md:text-base max-w-lg mt-5">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum velit quasi reprehenderit eius debitis in nulla autem tenetur excepturi doloremque!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veritatis! Lorem ipsum dolor si
                            </p>
                        </div>
                    </h1>
                </div>
                <div className="mt-7">
                    <a href=" " className="bg-orange-400 hover:bg-orange-500 border-t-orange-600 py-2 px-3 rounded-md button-scale-on-hover text-white hover:text-stone-950 transition-colors duration-200">
                        Get Started
                    </a>
                </div>
            </div>

            {/* IMAGEM COM O CIRCULO */}
            <div className="relative flex items-center justify-center">
                <div className="absolute ml-16 sm:ml-24 md:ml-48 lg:ml-96 mt-24 sm:mt-32 md:mt-60 w-48 sm:w-60 md:w-96 h-48 sm:h-60 md:h-96 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>
                <div className="absolute w-48 sm:w-60 md:w-96 h-48 sm:h-60 md:h-80 border-30 opacity-10 border-customDarkOrange rounded-full"></div>
                <img className="relative z-10 w-48 sm:w-60 md:w-96 h-48 sm:h-60 md:h-96" src={man} alt="" />
            </div>

            {/* TEXTO EMBAIXO DA IMAGEM */}
            <div className="absolute mt-40 sm:mt-52 md:mt-72 ml-8 sm:ml-16 md:ml-56 text-5xl sm:text-7xl md:text-9xl font-bold text-customGray opacity-30">
                FITNESS
            </div>
        </div>
    )
}

export default ManSection;
