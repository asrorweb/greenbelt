import React from "react";
import { links } from "../../../data";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// slide animation
import { Swiper, SwiperSlide } from "swiper/react";

// css
import "./ProductSlider.css";

// icons from react icon
import { GrFormPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const ProductSlider = () => {
    return (
        <div className="pt-6">
            <div>
                <h2 className="text-[36px] text-center leading-[150%] dark:text-[rgba(255,255,255,0.82)] mb-5 font-semibold ">
                    Maxsulotlar
                </h2>
                <ul className="container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        {links.map((link) => {
                            if (link.name === "Maxsulotlar") {
                                return link.submenu.map((item) => {
                                    return (
                                        <SwiperSlide>
                                            <li
                                                key={uuidv4()}
                                                className="rounded-xl bg-white shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]"
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
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit. Velit,
                                                        vero laboriosam!
                                                    </p>
                                                    <Link
                                                        to={item.url}
                                                        className="block py-2 rounded-xl text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                                    >
                                                        Ko'proq o'qish
                                                    </Link>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                    );
                                });
                            }
                        })}
                        {links.map((link) => {
                            if (link.name === "Maxsulotlar") {
                                return link.submenu.map((item) => {
                                    return (
                                        <SwiperSlide>
                                            <li
                                                key={uuidv4()}
                                                className="rounded-xl bg-white shadow-[-1px_11px_48px_0px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]"
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
                                                        Lorem ipsum dolor sit
                                                        amet consectetur
                                                        adipisicing elit. Velit,
                                                        vero laboriosam!
                                                    </p>
                                                    <Link
                                                        to={item.url}
                                                        className="block py-2 rounded-xl text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                                    >
                                                        Ko'proq o'qish
                                                    </Link>
                                                </div>
                                            </li>
                                        </SwiperSlide>
                                    );
                                });
                            }
                        })}
                        <div className="slider-controler">
                            <div className="swiper-button-prev shadow-2xl  slider-arrow text-[30px]">
                                <GrFormPrevious
                                    className="text-[30px]"
                                    name="arrow-back-outline"
                                ></GrFormPrevious>
                            </div>
                            <div className="swiper-button-next shadow-2xl  slider-arrow text-[30px]">
                                <GrFormPrevious
                                    className="text-[30px] rotate-[180deg]"
                                    name="arrow-forward-outline"
                                ></GrFormPrevious>
                            </div>
                        </div>
                    </Swiper>
                </ul>
            </div>
        </div>
    );
};

export default ProductSlider;
