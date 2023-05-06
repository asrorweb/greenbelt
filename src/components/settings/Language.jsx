// import { MdLanguage } from "react-icons/md";

import { useEffect, useState } from "react";
import { useContext } from "react";

import { Context } from "../../context/ThemeContextProvider";

import { v4 as uuidv4 } from "uuid";

const Language = () => {
    const [{ country, flag }, setChangeLanguage] = useState({
        country: "UZB",
        flag: "https://www.samdu.uz/upload/cover-images/61312fa1aa6d7-61312fa1aa6d8-61312fa1aa6d9-61312fa1aa6da.jpg",
    });

    // language dropdown open or close // ochish yoki yopish uchun
    const [droplanguage, setDropLanguage] = useState(false);

    // Context
    const { dispatch } = useContext(Context);

    const optionsLanguage = [
        {
            value: "UZB",
            label: "UZB",
            img: "https://www.samdu.uz/upload/cover-images/61312fa1aa6d7-61312fa1aa6d8-61312fa1aa6d9-61312fa1aa6da.jpg",
        },
        {
            value: "ENG",
            label: "ENG",
            img: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
        },
        {
            value: "RUS",
            label: "RUS",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png",
        },
        {
            value: "TUR",
            label: "TUR",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png",
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
                                country: country,
                                flag: lang.img,
                            });
                            setDropLanguage(false);
                            dispatch({
                                type: "CHANGE_LANGUAGE",
                                payload: { country },
                            });
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
