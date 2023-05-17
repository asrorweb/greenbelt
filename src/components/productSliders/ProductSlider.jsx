import React, { useContext, useEffect } from "react";

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

import { EffectCoverflow, Navigation, Autoplay } from "swiper";
import axios from "axios";

// My Context
import { Context } from "../../context/ThemeContextProvider";
import { API } from "../../api/Api";

const ProductSlider = () => {
    const { state, dispatch } = useContext(Context);

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

    let subTitle = "Maxsulotlar";
    let buttonText = "Ko'proq o'qish";
    let description =
        "Bizning maqsadimiz suvni tejashva hosilni unumdorligini oshirish!";
    if (state.language === "ru") {
        subTitle = "Продукты";
        buttonText = "Читать далее";
        description =
            "Наша цель – экономить воду и повышать урожайность сельскохозяйственных культур!";
    } else if (state.language === "eng") {
        subTitle = "Products";
        buttonText = "Read more";
        description =
            "Our goal is to save water and increase crop productivity!";
    } else if (state.language === "turk") {
        subTitle = "Ürünler";
        buttonText = "Devamını oku";
        description =
            "Amacımız su tasarrufu yapmak ve ürün verimliliğini artırmak!";
    }

    return (
        <div className="pt-6">
            <div>
                <h2 className="text-[36px] text-center leading-[150%] dark:text-[rgba(255,255,255,0.82)] mb-5 font-semibold ">
                    {subTitle}
                </h2>
                <ul className="container">
                    <Swiper
                        effect={"coverflow"}
                        slidesPerView={"auto"}
                        initialSlide={5}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 1,
                            depth: 150,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        className="swiper_container"
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                    >
                        {state.dataProduct.map((link) => {
                            // til uchun .. for language
                            let mainTitle = link?.nom;
                            if (state.language === "ru") {
                                mainTitle = link?.nomru;
                            } else if (state.language === "eng") {
                                mainTitle = link?.nomeng;
                            } else if (state.language === "turk") {
                                mainTitle = link?.nomturk;
                            }
                            return (
                                <SwiperSlide key={uuidv4()}>
                                    <li className="rounded-xl bg-white shadow-[-5px_31px_24px_-5px_rgba(34,60,80,0.2)] dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.1)] max-lg:dark:shadow-[-1px_11px_48px_0px_rgba(255,255,255,0.3)] p-3 dark:bg-[#202246]">
                                        <div className="rounded-xl overflow-hidden mb-2 bg-white">
                                            <Link to={`/info/${link.id}`}>
                                                <img
                                                    src={link.rasm}
                                                    alt="product"
                                                    className="w-full hover:scale-[1.1] duration-300 h-[222px] object-contain"
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[12px] leading-[150%] text-green-600 mb-2">
                                                Green Belt Fergana
                                            </p>
                                            <h3 className="font-semibold text-[22px] mb-3 leading-[150%] dark:text-[rgba(255,255,255,0.8)]">
                                                {mainTitle.slice(0, 18)}
                                            </h3>
                                            <p className="text-[14px] leading-[150%] text-gray-700 dark:text-[rgba(255,255,255,0.4)] mb-3">
                                                {description}
                                            </p>
                                            <Link
                                                to={`/info/${link.id}`}
                                                className="block py-2 rounded-xl text-white hover:scale-[1.05] duration-300 bg-green-600 text-center"
                                            >
                                                {buttonText}
                                            </Link>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            );
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
