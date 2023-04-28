import React from "react";
import { NavLink, Link } from "react-router-dom";

// icons from React icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

// img
import submenuimg from "../../assets/images/submenuimg.svg";

// unique key from uuid
import { v4 as uuidv4 } from "uuid";
const Navigation = ({ menu, setMenu }) => {
    const links = [
        { name: "Bosh sahifa", isSubmenu: false, url: "/" },
        {
            name: "Sug'orish turlari",
            isSubmenu: true,
            submenu: [
                {
                    name: "Tomchilatib sug'orish",
                    url: "/sug'orishturlari/tomchilatib",
                },
                { name: "Pulsar sug'orish", url: "/sug'orishturlari/pulsar" },
                {
                    name: "Yomg'irlatib sug'orish",
                    url: "/sug'orishturlari/yomg'irlatib",
                },
                {
                    name: "Barabanli sug'orish",
                    url: "/sug'orishturlari/barabanli",
                },
            ],
        },
        {
            name: "Xizmatlar",
            isSubmenu: true,
            submenu: [
                {
                    name: "Loyihalashtirish",
                    url: "/xizmatlar/tomchilatib",
                },
                { name: "Uskunalarni o'rnatish", url: "/xizmatlar/uskunalar" },
                {
                    name: "Bir mavsum davomida servis xizmat ko'rsatish",
                    url: "/xizmatlar/servis",
                },
                {
                    name: "Sug'orishni nazorat qilish",
                    url: "/xizmatlar/nazorat",
                },
                {
                    name: "Subsidiya olishda yordam",
                    url: "/xizmatlar/subsidiya",
                },
            ],
        },
        {
            name: "Maxsulotlar",
            isSubmenu: true,
            submenu: [
                {
                    name: "Polietilen truba",
                    url: "/maxsulotlar/polietilen",
                },
                { name: "Kapilniy lenta", url: "/maxsulotlar/kapelniy" },
                {
                    name: "Membrana",
                    url: "/maxsulotlar/membrana",
                },
                {
                    name: "Filtr",
                    url: "/maxsulotlar/filtr",
                },
                {
                    name: "Yumshoq quvur",
                    url: "/maxsulotlar/yomshoqquvur",
                },
            ],
        },
        {
            name: "Aloqa",
            isSubmenu: false,
            url: "/bizbilanboglanish",
        },
    ];

    return (
        <>
            {menu && (
                <div className="lg:hidden absolute max-lg:h-[calc(100vh_-_72px)] bg-[#00000035] left-0 top-[72px] right-0 bottom-0"></div>
            )}
            <ul
                className={`flex items-center max-lg:translate-x-[-100%] ${
                    menu
                        ? "max-lg:translate-x-[0] duration-300 transition-transform"
                        : "max-lg:translate-x-[-100%] duration-300 transition-transform"
                } max-lg:absolute max-lg:left-0 max-lg:flex-col
            max-lg:top-[72px] max-lg:h-[calc(100vh_-_72px)] max-lg:w-[70%]  max-lg:z-[900] max-lg:items-start 
          max-lg:bg-sky-700 max-lg:pt-3 dark:text-white`}
            >
                {links.map((link) => {
                    return (
                        <li
                            key={uuidv4()}
                            className={`lg:py-6 relative lg:px-3 max-lg:border-b-[1px] max-lg:w-full  group/item ${
                                !link.isSubmenu &&
                                "before:content-[''] before:absolute before:w-0 before:duration-300 before:h-[3px] before:bg-green-600 before:left-0 before:bottom-0 lg:hover:before:w-full"
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <NavLink
                                    onClick={() => {
                                        if (menu && !link.isSubmenu) {
                                            setMenu(false);
                                        }
                                    }}
                                    to={!link.isSubmenu && link.url}
                                    className="text-[16px] max-lg:py-5 max-lg:px-3 max-lg:w-full max-lg:inline-block hover:text-green-600 leading-[24px]"
                                >
                                    {link.name}
                                </NavLink>

                                {link.isSubmenu && (
                                    <BsChevronRight className="text-[25px] mr-3 lg:hidden" />
                                )}
                            </div>

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
                                                    <div className="w-[35px] bg-[#f8f8f8] dark:bg-[#212b4ed1] rounded-md h-[35px] flex items-center justify-center gap-2">
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
                                    className={`flex flex-col lg:hidden gap-3 pl-6 pb-5`}
                                >
                                    {link.submenu.map((sublink) => {
                                        return (
                                            <li key={uuidv4()}>
                                                <Link to={sublink.url}>
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
