import man from "../assets/man.png";
const ManSection = () => {
    return (
        //CAIXA DE TEXTO 
        <div className=" flex mt-28 ml-56 gap-32">
            <div className="flex-col">


                <h1 className=" text-xs text-customOrange ">BEST FITNES IN THE TOWN</h1>
                {/*EFEITO BRUSH*/}
                <div class="absolute top-20 left-30 w-60 h-60 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>
                <div className="mt-10 ">
                    <h1 className="text-6xl">
                        <div className="flex space-x-4">
                            <span className="text-customBlack font-bold text-6xl" style={{ WebkitTextStroke: "1px white" }}>
                                MAKE
                            </span>
                            <span className=" font-bold ">YOUR</span>
                        </div>
                        <div className="mt-5 font-bold">BODY SHAPE <p className=" text-xs max-w-lg mt-5">Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Laborum velit quasi reprehenderit
                            eius debitis in nulla autem tenetur excepturi doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veritatis!
                            Lorem ipsum dolor si</p> </div>
                    </h1>
                </div>
                <div className="mt-7 ">
                    <a href=" " className="  bg-orange-400 hover:bg-orange-500 border-t-orange-600 py-2 px-3 rounded-md button-scale-on-hover text-white hover:text-stone-950 transition-colors duration-200"> Get Started</a>
                        
                </div>
            </div>

            
            {/*IMAGEM COM O CIRCULO*/}

            <div className="relative flex items-center justify-center  ">
            <div class="absolute ml-96 mt-60  w-96 h-96 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>

                <div className="absolute w-96 h-80 border-30 opacity-10 border-customDarkOrange rounded-full"> </div>
                <img className="relative z-10 w-96 h-96" src={man} alt="" />
                
            </div>

             {/*TEXTO EMBAIXO DA IMAGEM*/}

             <div className="absolute mt-72 ml-56 text-9xl font-bold text-customGray opacity-30 ">
        FITNESS
    </div>
            
        </div>


    )
}

export default ManSection
