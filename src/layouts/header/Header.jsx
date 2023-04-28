import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Navigation from "../navbar/Navigation";
import Language from "../../components/settings/Language";
import DarkLightMode from "../../components/settings/DarkLightMode,";

// icon from react icons
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="shadow-lg fixed max-lg:py-2 left-0 top-0 right-0 z-[9999] bg-white   dark:bg-gradient-to-r dark:from-[#26325b] dark:to-[#171836]">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        onClick={() => setMenu(!menu)}
                        className="cursor-pointer max-lg:block hidden mr-5 shadow-[1px_20px_69px_5px_rgba(255,255,255,0.2)] p-2 text-[25px] text-gray-600 rounded-lg bg-gray-200 dark:bg-[#17183682] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
                    >
                        <FiMenu />
                    </button>
                    <Link to={"/"} className="flex items-center gap-2 ">
                        <img src={Logo} alt="site logo" className="w-14 h-14" />
                        <span className="uppercase text-xl max-[337px]:text-[12px] max-[337px]:leading-[15px]  max-sm:text-[16px] font-medium text-green-600">
                            Green Belt Fergana
                            {/* GBF */}
                        </span>
                    </Link>
                </div>

                <div className="flex items-center justify-between">
                    <Navigation menu={menu} setMenu={setMenu} />
                    <div className="flex items-center gap-3 justify-between ml-4">
                        <DarkLightMode />
                        <Language />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
