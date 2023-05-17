import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ThemeContextProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../api/Api";

export const Irrigation = () => {
    const { state } = useContext(Context);
    const [subMenuDAta, setSubMenuData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/submenyular/${id}/`);
                setSubMenuData(response.data && response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMenu();
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    let mainTitle = subMenuDAta?.nom;
    let mainText1 = subMenuDAta?.text1;
    let mainText2 = subMenuDAta?.text2;
    if (state.language === "ru") {
        mainTitle = subMenuDAta?.nomru;
        mainText2 = subMenuDAta?.text2ru;
        mainText1 = subMenuDAta?.text1ru;
    } else if (state.language === "eng") {
        mainTitle = subMenuDAta?.nomeng;
        mainText1 = subMenuDAta?.text1eng;
        mainText2 = subMenuDAta?.text2eng;
    } else if (state.language === "turk") {
        mainTitle = subMenuDAta?.nomturk;
        mainText2 = subMenuDAta?.text2turk;
        mainText1 = subMenuDAta?.text1turk;
    }

    return (
        <>
            {subMenuDAta && (
                <div className="pt-9 mb-20">
                    <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                        <h1 className="text-center text-3xl dark:text-white mb-7 font-medium">
                            {mainTitle}
                        </h1>
                        <ul>
                            <li className="grid grid-cols-2  gap-6 mb-20 max-md:grid-cols-1">
                                <img
                                    src={subMenuDAta?.rasm1}
                                    className="max-w-[100%] shadow-2xl rounded-2xl object-cover"
                                />
                                <div>
                                    <p className="dark:text-slate-300 text-lg max-lg:text-base">
                                        {mainText1}
                                    </p>
                                </div>
                            </li>
                            <li className="grid grid-cols-2  gap-6 mb-20 max-md:grid-cols-1">
                                <div>
                                    <p className="dark:text-slate-300 text-lg max-lg:text-base">
                                        {mainText2}
                                    </p>
                                </div>
                                <img
                                    src={subMenuDAta?.rasm2}
                                    className="max-w-[100%] shadow-2xl rounded-2xl object-cover"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};
