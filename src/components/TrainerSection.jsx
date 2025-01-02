import IconJoin from "../assets/join.jpg";
import IconUser from "../assets/user.png";
import IconCamera from "../assets/camera.png";
import IconAp from "../assets/ap.png";

const TrainerSection = () => {
  return (
    <>
      {/* Título */}
      <div className="flex justify-center px-4">
        <div className="flex-col flex gap-4 items-center text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-customWhite font-semibold">
            WHY JOIN US?
          </h1>
          <p className="text-customWhite text-sm sm:text-base">
            Our diverse membership base creates a friendly and supportive <br />
            atmosphere, where you can make friends and stay motivated.
          </p>
        </div>
      </div>

      {/* Container e imagem de fundo */}
      <div className="relative flex justify-center mt-10 sm:m-14">
        <img
          className="w-full sm:w-3/4 h-auto"
          src={IconJoin}
          alt="Training Image"
        />

        {/* Container */}
        <div className="absolute bottom-[-30px] sm:bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-customDarkGray p-5 border rounded-lg flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Ícone e texto 1 */}
          <div className="flex items-center space-x-3">
            <div className="bg-customOrange border rounded-md p-2">
              <img className="w-10 sm:w-12" src={IconUser} alt="" />
            </div>
            <div className="flex-col flex gap-1 sm:gap-2">
              <h2 className="text-white font-semibold text-sm sm:text-base">
                Personal Trainer
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Unlock your potential with our expert Personal Trainers.
              </p>
            </div>
          </div>

          {/* Ícone 2 */}
          <div className="flex items-center space-x-3">
            <div className="bg-customOrange border rounded-md p-2">
              <img className="w-10 sm:w-12" src={IconCamera} alt="" />
            </div>
            <div className="flex-col flex gap-1 sm:gap-2">
              <h2 className="text-white font-semibold text-sm sm:text-base">
                Practice Sessions
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Elevate your fitness with practice sessions.
              </p>
            </div>
          </div>

          {/* Ícone 3 */}
          <div className="flex items-center space-x-3">
            <div className="bg-customOrange border rounded-md p-2">
              <img className="w-10 sm:w-12" src={IconAp} alt="" />
            </div>
            <div className="flex-col flex gap-1 sm:gap-2">
              <h2 className="text-white font-semibold text-sm sm:text-base">
                Good Management
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm">
                Supportive management, for your fitness success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerSection;
