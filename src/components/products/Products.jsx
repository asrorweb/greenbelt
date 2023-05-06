import React, { useEffect } from "react";
import { links } from "../../../data";
import { Link } from "react-router-dom";

// unique identifier from uuid
import { v4 as uuidv4 } from "uuid";

// scroll animarion
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <div className="py-9 overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <h1 className="text-4xl font-semibold text-green-950 mb-6 dark:text-white">
                    Maxsulotlar
                </h1>

                <ul className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-1">
                    {links.map((link) => {
                        if (link.name === "Maxsulotlar") {
                            return link.submenu.map((item) => {
                                console.log(item);
                                return (
                                    <li
                                        data-aos="zoom-out"
                                        key={uuidv4()}
                                        className="rounded-xl bg-white max-sm:flex max-sm:gap-2  shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]"
                                    >
                                        <div className="rounded-xl overflow-hidden mb-2 max-sm:w-[120px] max-sm:mb-0 ">
                                            <Link to={"/info"}>
                                                <img
                                                    src="https://kapelni-poliv.ru/wp-content/uploads/2021/12/4.jpg"
                                                    alt=""
                                                    className="w-full max-sm:h-full hover:scale-[1.1] duration-300"
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[12px] leading-[150%] text-green-600 mb-2">
                                                Green Belt Fergana
                                            </p>
                                            <h3 className="font-semibold text-[22px] mb-3 leading-[150%] dark:text-[rgba(255,255,255,0.8)]">
                                                {item.name}
                                            </h3>

                                            <Link
                                                to={"/info"}
                                                className="block py-2 rounded-xl max-sm:px-4 max-sm:py-1 max-sm:inline-block max-sm:p-0 text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                            >
                                                Ko'proq o'qish
                                            </Link>
                                        </div>
                                    </li>
                                );
                            });
                        }
                    })}
                    {links.map((link) => {
                        if (link.name === "Maxsulotlar") {
                            return link.submenu.map((item) => {
                                console.log(item);
                                return (
                                    <li
                                        data-aos="zoom-out"
                                        key={uuidv4()}
                                        className="rounded-xl bg-white max-sm:flex max-sm:gap-2  shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]"
                                    >
                                        <div className="rounded-xl overflow-hidden mb-2 max-sm:w-[120px] max-sm:mb-0 ">
                                            <Link to={"/info"}>
                                                <img
                                                    src="https://kapelni-poliv.ru/wp-content/uploads/2021/12/4.jpg"
                                                    alt=""
                                                    className="w-full max-sm:h-full hover:scale-[1.1] duration-300"
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[12px] leading-[150%] text-green-600 mb-2">
                                                Green Belt Fergana
                                            </p>
                                            <h3 className="font-semibold text-[22px] mb-3 leading-[150%] dark:text-[rgba(255,255,255,0.8)]">
                                                {item.name}
                                            </h3>

                                            <Link
                                                to={"/info"}
                                                className="block py-2 rounded-xl max-sm:px-4 max-sm:py-1 max-sm:inline-block text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                            >
                                                Ko'proq o'qish
                                            </Link>
                                        </div>
                                    </li>
                                );
                            });
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Products;
