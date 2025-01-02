import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.png"; // Importe seu logo aqui

const Footer = () => {
    return (
        <footer className="p-6 md:p-10 text-white">
            {/* Config geral */}
            <div className="relative flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10">
                {/* Efeito Brush */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-100px] w-60 h-60 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-transparent opacity-5 blur-md"></div>

                {/* Logo */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left mr-10 mb-8 lg:mb-0">
                    <img src={Logo} alt="FitClub Logo" className="w-32 mb-4" />
                    <p className="text-gray-400 text-sm lg:text-base mb-4">
                        Take the first step towards a healthier, stronger <br />
                        you with our unbeatable pricing plans. Let's sweat,<br />
                        achieve, and conquer together!
                    </p>
                    <div className="flex space-x-4 mt-2 justify-center lg:justify-start">
                        <a href="#" className="text-customOrange hover:text-customWhite"><FaFacebookF size={23} /></a>
                        <a href="#" className="text-customOrange hover:text-customWhite"><FaInstagram size={23} /></a>
                        <a href="#" className="text-customOrange hover:text-customWhite"><FaTwitter size={23} /></a>
                    </div>
                </div>

                <div className="flex flex-wrap gap-16 justify-center lg:justify-start">
                    {/* Coluna Company */}
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {resourcesLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="text-customWhite hover:text-customOrange" href={link.href}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna About Us */}
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <ul className="space-y-2">
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="text-customWhite hover:text-customOrange" href={link.href}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna Contact */}
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="text-customWhite hover:text-customOrange" href={link.href}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
