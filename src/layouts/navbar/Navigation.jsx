import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// icons from React icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

// img
import submenuimg from "../../assets/images/submenuimg.svg";

import { links } from "../../../data";

// unique key from uuid
import { v4 as uuidv4 } from "uuid";
const Navigation = ({ menu, setMenu }) => {
    const [subMenu, setSubMenu] = useState("");

    return (
        <>
            {menu && (
                <div
                    onClick={() => setMenu(false)}
                    className="lg:hidden absolute max-lg:h-[calc(100vh_-_72px)] bg-[#00000035] left-0 top-[72px] right-0 bottom-0"
                ></div>
            )}
            <ul
                className={`flex items-center max-lg:translate-x-[-100%] ${
                    menu
                        ? "max-lg:translate-x-[0] duration-300 transition-transform"
                        : "max-lg:translate-x-[-100%] duration-300 transition-transform"
                } max-lg:absolute max-lg:overflow-y-auto max-lg:left-0 max-lg:flex-col
            max-lg:top-[72px] max-lg:h-[calc(100vh_-_72px)] max-lg:w-[70%]  max-lg:z-[900] max-lg:items-start 
          max-lg:bg-slate-100 max-lg:dark:bg-gradient-to-r max-lg:dark:from-[#26325b]  max-lg:dark:to-[#222452] max-lg:pt-3 dark:text-white`}
            >
                {links.map((link) => {
                    return (
                        <li
                            key={uuidv4()}
                            className={`lg:py-6 relative lg:px-3 max-lg:border-b-[1px] max-lg:dark:border-slate-600 max-lg:w-full  group/item ${
                                !link.isSubmenu &&
                                "before:content-[''] before:absolute before:w-0 before:duration-300 before:h-[3px] before:bg-green-600 before:left-0 before:bottom-0 lg:hover:before:w-full"
                            }`}
                        >
                            <NavLink
                                onClick={() => {
                                    if (menu && !link.isSubmenu) {
                                        setMenu(false);
                                    }
                                    subMenu === link.name
                                        ? setSubMenu("")
                                        : setSubMenu(link.name);
                                }}
                                to={!link.isSubmenu && link.url}
                                className="max-lg:py-5 max-lg:flex max-lg:items-center max-lg:justify-between max-lg:px-3 max-lg:w-full hover:text-green-600 leading-[24px]"
                            >
                                <span className="text-[16px] block max-lg:text-[18px]">
                                    {link.name}
                                </span>
                                {link.isSubmenu && (
                                    <BsChevronRight
                                        className={`rotate-0 ${
                                            subMenu === link.name
                                                ? "rotate-[90deg] duration-300 transition-all"
                                                : "rotate-0 duration-300 transition-all"
                                        } text-[25px] mr-3 lg:hidden duration-300`}
                                    />
                                )}
                            </NavLink>

                            {/* desktop */}
                            {link.isSubmenu && (
                                <ul
                                    className="opacity-0 absolute overflow-hidden top-[100%] translate-y-[20%] shadow-[0_10px_70px_rgba(0,0,0,0.15)] dark:bg-[#26325b] h-0 rounded-2xl left-[-70%] max-[1200px]:left-[-120%] min-w-[400px]  
                                group-hover/item:py-4 transition-[opacity, transform]  bg-white group-hover/item:opacity-100 group-hover/item:max-h-[9999px] max-lg:hidden  group-hover/item:h-auto group-hover/item:translate-y-[0] group-hover/item:duration-300"
                                >
                                    {link.submenu.map((sublink) => {
                                        return (
                                            <li
                                                key={uuidv4()}
                                                className="min-w-full pr-3 group/subitem relative"
                                            >
                                                <Link
                                                    to={sublink.url}
                                                    className="pl-7 pr-2 py-3 flex items-center hover:text-green-600  gap-1 w-full text-[15px] leading-[20px] font-medium"
                                                >
                                                    <div className="w-[35px] bg-[#f8f8f8] dark:bg-[#212b4ed1] rounded-md h-[35px] flex items-center justify-center">
                                                        <img
                                                            src={submenuimg}
                                                            alt=""
                                                            className="w-[25px] h-[25px]"
                                                        />
                                                    </div>
                                                    <span className="max-w-[70%]">
                                                        {sublink.name}
                                                    </span>
                                                </Link>

                                                <HiOutlineArrowNarrowRight className="text-[25px] opacity-0 right-[15%] top-[50%] translate-y-[-50%]  absolute group-hover/subitem:duration-500 group-hover/subitem:block group-hover/subitem:opacity-100 group-hover/subitem:right-[7%]" />
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}

                            {link.isSubmenu && (
                                <ul
                                    className={`flex ${
                                        subMenu === link.name
                                            ? "block"
                                            : "hidden"
                                    } flex-col lg:hidden gap-3 pl-6 pb-5`}
                                >
                                    {link.submenu.map((sublink) => {
                                        return (
                                            <li key={uuidv4()}>
                                                <Link
                                                    onClick={() =>
                                                        setMenu(false)
                                                    }
                                                    to={sublink.url}
                                                    className="py-2 w-full inline-block"
                                                >
                                                    {sublink.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Navigation;
