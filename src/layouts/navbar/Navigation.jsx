import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

// icons from React icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

// unique key from uuid
import { v4 as uuidv4 } from "uuid";

// request
import axios from "axios";

// api
import { API } from "../../api/Api";

// loading effects
import Loading from "../../components/isLoading/Loading";

// data base react My context
import { Context } from "../../context/ThemeContextProvider";

const Navigation = ({ menu, setMenu, footer = false }) => {
    const [subMenu, setSubMenu] = useState("");

    // my Context
    const { dispatch, state } = useContext(Context);

    // loading animation
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMenu() {
            setIsLoading(true);
            try {
                const response = await axios.get(`${API}/menyular/`);
                dispatch({ type: "ADD_MENU_DATA", payload: response.data });
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        getMenu();
    }, []);

    return (
        <>
            <Loading isLoading={isLoading} />

            {/* menu chiqanidagi orqa qora */}
            {menu && (
                <div
                    onClick={() => setMenu(false)}
                    className="lg:hidden absolute max-lg:h-[calc(100vh_-_72px)] bg-[#00000035] left-0 top-[72px] right-0 bottom-0"
                ></div>
            )}

            <ul
                className={`${
                    footer
                        ? `flex items-start gap-10 flex-wrap`
                        : `flex items-center max-lg:translate-x-[-100%] ${
                              menu
                                  ? "max-lg:translate-x-[0] duration-300 transition-transform"
                                  : "max-lg:translate-x-[-100%] duration-300 transition-transform"
                          } max-lg:absolute max-lg:overflow-y-auto max-lg:left-0 max-lg:flex-col
                max-lg:top-[72px] max-lg:h-[calc(100vh_-_72px)] max-lg:w-[70%]  max-lg:z-[900] max-lg:items-start 
              max-lg:bg-slate-100 max-lg:dark:bg-gradient-to-r max-lg:dark:from-[#26325b]  max-lg:dark:to-[#222452] max-lg:pt-3 dark:text-white`
                }`}
            >
                {state?.dataMenu?.map((link) => {
                    let mainMenu = link.nom;
                    if (state.language === "ru") {
                        mainMenu = link.nomru;
                    } else if (state.language === "eng") {
                        mainMenu = link.nomeng;
                    } else if (state.language === "turk") {
                        mainMenu = link.nomturk;
                    }
                    return (
                        <li
                            key={uuidv4()}
                            className={`${
                                footer
                                    ? `max-sm:w-full`
                                    : `lg:py-6 ${
                                          mainMenu ? "block" : "hidden"
                                      } relative lg:px-3 max-lg:border-b-[1px] max-lg:dark:border-slate-600 max-lg:w-full  group/item ${
                                          !link.isSubmyu &&
                                          "before:content-[''] before:absolute before:w-0 before:duration-300 before:h-[3px] before:bg-green-600 before:left-0 before:bottom-0 lg:hover:before:w-full"
                                      }`
                            }`}
                        >
                            <NavLink
                                onClick={() => {
                                    if (mainMenu && !link.isSubmyu) {
                                        setMenu(false);
                                    }
                                    subMenu === mainMenu
                                        ? setSubMenu("")
                                        : setSubMenu(mainMenu);
                                }}
                                to={!link.isSubmyu && link.url}
                                className={`${
                                    footer ? `` : `max-lg:px-3 max-lg:py-5`
                                }  max-lg:flex max-lg:items-center max-lg:justify-between  max-lg:w-full hover:text-green-600 leading-[24px]`}
                            >
                                <span
                                    className={`${
                                        footer && "dark:text-white text-lg"
                                    } text-[16px] whitespace-nowrap block max-lg:text-[18px]`}
                                >
                                    {mainMenu}
                                </span>
                                {link.isSubmyu && (
                                    <BsChevronRight
                                        className={`${
                                            footer
                                                ? `hidden`
                                                : `rotate-0 ${
                                                      subMenu === mainMenu
                                                          ? "rotate-[90deg] duration-300 transition-all"
                                                          : "rotate-0 duration-300 transition-all"
                                                  } text-[25px] mr-3 lg:hidden duration-300`
                                        }`}
                                    />
                                )}
                            </NavLink>

                            {/* desktop */}
                            {link.isSubmyu && (
                                <ul
                                    className={`${
                                        footer
                                            ? "flex flex-col gap-2 pt-4"
                                            : "opacity-0 absolute overflow-hidden top-[100%] translate-y-[20%] shadow-[0_10px_70px_rgba(0,0,0,0.15)] dark:bg-[#26325b] h-0 rounded-2xl left-[-70%] max-[1200px]:left-[-120%] min-w-[400px] group-hover/item:py-4 transition-[opacity, transform]  bg-white group-hover/item:opacity-100 group-hover/item:max-h-[9999px] max-lg:hidden  group-hover/item:h-auto group-hover/item:translate-y-[0] group-hover/item:duration-300"
                                    } `}
                                >
                                    {link.submenyular.map((sublink) => {
                                        let submenu = sublink.nom;
                                        if (state.language === "ru") {
                                            submenu = sublink.nomru;
                                        } else if (state.language === "eng") {
                                            submenu = sublink.nomeng;
                                        } else if (state.language === "turk") {
                                            submenu = sublink.nomturk;
                                        }
                                        return (
                                            <li
                                                key={uuidv4()}
                                                className={`${
                                                    footer
                                                        ? "whitespace-nowrap"
                                                        : "pr-3"
                                                } min-w-full  group/subitem relative`}
                                            >
                                                <Link
                                                    to={`${link.url}/${sublink.id}`}
                                                    className={`${
                                                        footer
                                                            ? ""
                                                            : "pl-7 pr-2 py-3"
                                                    }   flex items-center hover:text-green-600  gap-1 w-full text-[15px] leading-[20px] font-medium`}
                                                >
                                                    {/* img box */}
                                                    <div
                                                        className={`${
                                                            footer && "hidden"
                                                        } w-[35px]  bg-[#f8f8f8]  dark:bg-[#212b4ed1] rounded-md h-[35px] flex items-center justify-center`}
                                                    >
                                                        <img
                                                            src={`${API}${sublink?.icon}`}
                                                            alt={submenu}
                                                            className={`w-[25px] h-[25px]  object-cover`}
                                                        />
                                                    </div>

                                                    {/* submenu text */}
                                                    <span
                                                        className={`${
                                                            footer
                                                                ? "dark:text-[rgba(255,255,255,0.71)] opacity-60 dark:hover:opacity-90"
                                                                : "max-w-[70%]"
                                                        } `}
                                                    >
                                                        {submenu}
                                                    </span>
                                                </Link>

                                                <span
                                                    className={`${
                                                        footer && "hidden"
                                                    }`}
                                                >
                                                    <HiOutlineArrowNarrowRight
                                                        className={`text-[25px] opacity-0 right-[15%] top-[50%] translate-y-[-50%]  absolute group-hover/subitem:duration-500 group-hover/subitem:block group-hover/subitem:opacity-100 group-hover/subitem:right-[7%]`}
                                                    />
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}

                            {/* mobile sub menu */}
                            {link.submenyular && (
                                <ul
                                    className={`flex ${footer && "hidden"}
                                     ${
                                         subMenu === mainMenu
                                             ? "block "
                                             : "hidden"
                                     } flex-col lg:hidden  pl-6 pr-2`}
                                >
                                    {link.submenyular.map((sublink) => {
                                        let submenu = sublink.nom;
                                        if (state.language === "ru") {
                                            submenu = sublink.nomru;
                                        } else if (state.language === "eng") {
                                            submenu = sublink.nomeng;
                                        } else if (state.language === "turk") {
                                            submenu = sublink.nomturk;
                                        }
                                        return (
                                            <li key={uuidv4()} className="mb-2">
                                                <Link
                                                    onClick={() =>
                                                        setMenu(false)
                                                    }
                                                    to={`${link.url}/${sublink.id}`}
                                                    className="py-1 w-full inline-block"
                                                >
                                                    {submenu}
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
