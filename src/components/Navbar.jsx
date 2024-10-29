import logo from "../assets/logo.png"
import { navItems } from "../constants"
const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            
            <div className="flex justify-around items-center"> 
                <div className=" flex items-center flex-shrink-0">
                    <img className="h-30 w-30 mr-10" src={logo} alt="logo" />
                </div>
                <ul className=" hidden lg:flex ml-14 space-x-12">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
                </ul>
                <div className=" hidden lg:flex justify-center  pl-20 items-center">
                <a href=" " className=" bg-orange-500 hover:bg-orange-400 border-t-orange-500 py-2 px-3 rounded-md button-scale-on-hover text-white hover:text-stone-950 transition-colors duration-200"> Join Now</a>

                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
