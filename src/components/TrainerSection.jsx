import IconJoin from "../assets/join.jpg"
import IconUser from "../assets/user.png"
import IconCamera from "../assets/camera.png"
import IconAp from "../assets/ap.png"

const TrainerSection = () => {
    return (
        <>
               {/* Titulo*/}
            <div className=" flex justify-center">
                <div className=" flex-col flex gap-7 items-center">
                    <h1 className=" text-4xl text-customWhite font-semibold"> WHY JOIN US ?</h1>
                    <p className=" text-customWhite text-x">Our diverse membership base creates a frindly and supportive <br />
                        atmosphere, where you can make friends and stay motivated
                    </p>
                </div>
            </div>
               {/* Container e imagem fundo */}
            <div className="relative flex justify-center mt-20">
                <img className="w-3/4 h-3/4" src={IconJoin} alt="Training Image" />

                {/* Container  */}
                <div className="absolute  bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-customDarkGray p-5 border  rounded-lg flex space-x-8">
                    {/* Ícone e texto 1 */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-customOrange border rounded-md p-2 ">
                            <img className="w-12 " src={IconUser} alt="" />
                        </div>
                        <div className=" flex-col flex  gap-2">
                            <h2 className="text-white font-semibold">Personal Trainer</h2>
                            <p className="text-gray-300 text-sm">Unlock your potential with our expert Personal Trainers.</p>
                        </div>
                    </div>

                    {/* Ícone 2 */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-customOrange border rounded-md p-2 ">
                            <img className="w-12 " src={IconCamera} alt="" />
                        </div>
                        <div className=" flex-col flex gap-2">
                            <h2 className="text-white font-semibold">Practice Sessions</h2>
                            <p className="text-gray-300 text-sm">Elevate your fitness with practice sessions.</p>
                        </div>
                    </div>

                    {/* Ícone 3 */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-customOrange border rounded-md p-2 ">
                            <img className="w-12 " src={IconAp} alt="" />
                        </div>
                        <div className=" flex-col flex gap-2" >
                            <h2 className="text-white font-semibold">Good Management</h2>
                            <p className="text-gray-300 text-sm">Supportive management, for your fitness success.</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TrainerSection
