import React from "react";
import { links } from "../../../data";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Product = () => {
    console.log(links);
    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <h2 className="text-[36px] leading-[150%] dark:text-[rgba(255,255,255,0.82)] mb-5 font-semibold ">
                    Maxsulotlar
                </h2>
                <ul className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1">
                    {links.map((link) => {
                        if (link.name === "Maxsulotlar") {
                            return link.submenu.map((item) => {
                                return (
                                    <li
                                        key={uuidv4()}
                                        className="max-w-full rounded-xl shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-gradient-to-r dark:from-[#202246] dark:to-[#282b5733] max-lg:dark:from-[#272a57] max-lg:dark:to-[#363a6b27]"
                                    >
                                        <div className="rounded-xl overflow-hidden mb-2">
                                            <Link to={item.url}>
                                                <img
                                                    src="https://kapelni-poliv.ru/wp-content/uploads/2021/12/4.jpg"
                                                    alt=""
                                                    className="w-full hover:scale-[1.1] duration-300"
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
                                            <p className="text-[14px] leading-[150%] text-gray-700 dark:text-[rgba(255,255,255,0.4)] mb-3">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Velit, vero laboriosam!
                                            </p>
                                            <Link
                                                to={item.url}
                                                className="block py-2 rounded-xl text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
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

export default Product;
