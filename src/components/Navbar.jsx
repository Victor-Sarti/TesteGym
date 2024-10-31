import logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative text-sm">

                    <div className="flex pl-40 gap-36 items-center">
                        <div className=" flex items-center flex-shrink-0">
                            <img className="h-30 w-30 mr-10" src={logo} alt="logo" />
                        </div>
                        <ul className=" hidden lg:flex ml-14 space-x-12 ">
                            <nav className="flex space-x-10">

                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                                    Home
                                </a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                                    Program
                                </a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                                    Service
                                </a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                                    About
                                </a>
                                <a href="#" className="inline-block relative text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full">
                                    Community
                                </a>




                            </nav>
                        </ul>
                        <div className=" hidden lg:flex justify-center  pl-20 items-center">
                            <a href=" " className=" bg-orange-400 hover:bg-orange-500 border-t-orange-600 py-2 px-3 rounded-md button-scale-on-hover text-white hover:text-stone-950 transition-colors duration-200"> Join Now</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
