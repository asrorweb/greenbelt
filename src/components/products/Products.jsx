import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// unique identifier from uuid
import { v4 as uuidv4 } from "uuid";

// myContext
import { Context } from "../../context/ThemeContextProvider";

// scroll animarion
import Aos from "aos";
import "aos/dist/aos.css";

import { API } from "../../api/Api";
import axios from "axios";

const Products = () => {
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/mahsulotlar/`);
                response.data &&
                    dispatch({
                        type: "ADD_PRODUCT_DATA",
                        payload: response.data,
                    });
            } catch (error) {
                console.log(error);
            }
        }
        getMenu();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let subTitle = "Maxsulotlar";
    let buttonText = "Ko'proq o'qish";
    if (state.language === "ru") {
        subTitle = "Продукты";
        buttonText = "Читать далее";
    } else if (state.language === "eng") {
        subTitle = "Products";
        buttonText = "Read more";
    } else if (state.language === "turk") {
        subTitle = "Ürünler";
        buttonText = "Devamını oku";
    }

    return (
        <>
            <div className="py-9 overflow-hidden">
                <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                    <h1 className="text-4xl max-sm:text-3xl font-semibold text-green-950 mb-6 max-sm:mb-0 max-sm:h-[50px] dark:text-white">
                        {subTitle}
                    </h1>

                    <ul className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-1">
                        {state.dataProduct &&
                            state?.dataProduct?.map((link) => {
                                // til uchun .. for language
                                let mainTitle = link.nom;
                                if (state.language === "ru") {
                                    mainTitle = link.nomru;
                                } else if (state.language === "eng") {
                                    mainTitle = link.nomeng;
                                } else if (state.language === "turk") {
                                    mainTitle = link.nomturk;
                                }
                                return (
                                    <li
                                        data-aos="zoom-out"
                                        key={uuidv4()}
                                        className="rounded-xl w-full flex max-sm:grid sm:flex-col justify-between max-sm:grid-rows-[60px_60px] max-sm:gap-x-2 max-sm:grid-cols-[120px_1fr] bg-white   shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]"
                                    >
                                        <div className="rounded-xl  bg-white h-[222px]  max-md:h-[170px] max-sm:h-[130px]  max-sm:row-span-3 overflow-hidden mb-2 max-sm:w-full max-sm:mb-0 ">
                                            <Link
                                                to={`/info/${link.id}`}
                                                className="inline-block h-full"
                                            >
                                                <img
                                                    src={link.rasm}
                                                    alt="product image"
                                                    className="w-full h-full  hover:scale-[1.1] object-contain duration-300"
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[12px] leading-[150%] text-green-600 mb-2">
                                                Green Belt Fergana
                                            </p>
                                            <h3 className="font-semibold max-sm:leading-[110%] max-sm:h-[50px] overflow-hidden break-words text-[22px] mb-3 leading-[150%] dark:text-[rgba(255,255,255,0.8)]">
                                                {mainTitle.slice(0, 30)}
                                            </h3>
                                        </div>

                                        <Link
                                            to={`/info/${link.id}`}
                                            className="block py-2  mt-auto rounded-xl max-sm:px-4 max-sm:py-1 max-sm:inline-block max-sm:p-0 text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                        >
                                            {buttonText}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Products;
