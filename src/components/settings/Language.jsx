import { useEffect, useState } from "react";
import { useContext } from "react";

import { Context } from "../../context/ThemeContextProvider";

import { v4 as uuidv4 } from "uuid";

// flags
import UZB from "../../assets/images/uzb.png";
import ENG from "../../assets/images/eng.png";
import TURK from "../../assets/images/turk.png";
import RUS from "../../assets/images/rus.png";
const Language = () => {
    const [{ country, flag }, setChangeLanguage] = useState({
        country: "UZB",
        flag: UZB,
    });

    // language dropdown open or close // ochish yoki yopish uchun
    const [droplanguage, setDropLanguage] = useState(false);

    // Context
    const { dispatch } = useContext(Context);

    useEffect(() => {
        const localDAta = localStorage.getItem("language")
            ? JSON.parse(localStorage.getItem("language"))
            : "";
        dispatch({
            type: "CHANGE_LANGUAGE",
            payload: localDAta,
        });

        const localStorageLanguage = optionsLanguage.filter((item) => {
            return item.value == localDAta;
        });
        setChangeLanguage({
            country: localStorageLanguage[0].label,
            flag: localStorageLanguage[0].img,
        });
    }, []);

    const optionsLanguage = [
        {
            value: "",
            label: "UZB",
            img: UZB,
        },
        {
            value: "eng",
            label: "ENG",
            img: ENG,
        },
        {
            value: "ru",
            label: "RUS",
            img: RUS,
        },
        {
            value: "turk",
            label: "TUR",
            img: TURK,
        },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setDropLanguage(!droplanguage)}
                className="flex items-center gap-1 border px-2 py-1 max-sm:px-3 max-sm:py-2 rounded"
            >
                <img
                    className="w-[20px] h-[20px] object-cover rounded-full max-[475px]:hidden"
                    src={flag}
                    alt="language change"
                />
                <span className="dark:text-white max-[475px]:text-sm ">
                    {country}
                </span>
            </button>
            <ul
                className={`${
                    droplanguage ? "flex" : "hidden"
                }  absolute  w-full flex-col gap-1- py-1 bg-white dark:bg-[#26325b] dark:text-white shadow-2xl rounded-md`}
            >
                {optionsLanguage.map((lang) => (
                    <li
                        key={uuidv4()}
                        onClick={() => {
                            const country = lang.value;
                            setChangeLanguage({
                                country: lang.label,
                                flag: lang.img,
                            });
                            setDropLanguage(false);
                            dispatch({
                                type: "CHANGE_LANGUAGE",
                                payload: country,
                            });

                            localStorage.setItem(
                                "language",
                                JSON.stringify(country)
                            );
                        }}
                        className="cursor-pointer flex items-center justify-between hover:bg-slate-100 dark:hover:bg-[#161733] px-2 py-1 max-sm:px-3 max-sm:text-sm"
                    >
                        <img
                            src={lang.img}
                            className="w-[20px] h-[20px] object-cover rounded-full max-sm:hidden"
                            alt=""
                        />
                        <span> {lang.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Language;
