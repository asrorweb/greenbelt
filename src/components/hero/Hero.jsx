import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

import heroImg from "../../assets/images/hero.webp";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";

const Hero = () => {
    return (
        <div className="h-[calc(100vh_-_72px)] dark:bg-[#171836] max-lg:bg-[#171836]  relative mt-[72px] ">
            <div
                className={`max-w-7xl flex z-20 items-center justify-between max-lg:justify-center h-full mx-auto px-10 max-md:px-4 relative`}
            >
                <div className="mr-5 relative max-lg:mr-0  max-lg:z-20 max-lg:text-center">
                    <h1 className="text-[70px] max-lg:text-[60px] max-lg:leading-[65px] mb-5 leading-[90px] lg:dark:text-white font-bold max-lg:dark:text-white max-lg:text-white">
                        Biz bilan <br />
                        <span className="text-green-600">su'gorish</span> oson!
                    </h1>
                    <p className="text-[18px] max-lg:text-[16px] max-w-[500px] mb-4 max-md:mb-6 dark:text-stone-300 max-lg:text-white">
                        Bizning maqsadimiz suvni tejash va hosilni unumdorligini
                        oshirish!Bizning maqsadimiz suvni tejash va hosilni
                        unumdorligini oshirish!
                    </p>
                    <div className="flex items-center w-full max-lg:justify-center max-md:flex-col gap-3 mx-auto">
                        <Link className="inline-block whitespace-nowrap px-4 py-2 rounded-lg max-md:w-full shadow-2xl bg-green-600 hover:bg-green-700 text-white hover:outline-2">
                            Biz bilan bog'lanish
                        </Link>
                        <Link className="inline-block whitespace-nowrap px-4 py-2 max-md:w-full shadow-2xl border border-[#d0cece] rounded-lg  hover:bg-[#eee] dark:hover:bg-[#ffffffcd] max-lg:bg-white dark:bg-white hover:outline-2">
                            Ko'proq Malumot
                        </Link>
                    </div>
                </div>

                {/* img box */}
                <div className="relative max-lg:absolute max-lg:w-full max-lg:h-full rounded-2xl max-lg:rounded-none shadow-[-3px_4px_67px_23px_rgba(34,60,80,0.2)]">
                    {/* extra img */}
                    {/* 1 */}
                    <img
                        src={hero1}
                        alt=""
                        className="z-20  absolute max-lg:hidden shadow-2xl top-[-50px] left-[-50px] object-cover rounded-2xl w-[120px] h-[120px]"
                    />

                    {/* 2 */}
                    <img
                        src={hero2}
                        alt=""
                        className="z-20  absolute max-lg:hidden shadow-2xl  bottom-[-50px] right-[-50px] max-[1000px]:right-[-30px] object-cover rounded-2xl w-[120px] h-[120px]"
                    />

                    <img
                        src={heroImg}
                        className=" w-[100%] max-md:opacity-75 rounded-2xl max-lg:rounded-none max-lg:h-full max-lg:max-w-full max-lg:z-10  max-w-[600px] h-[400px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
