import React, { useContext, useEffect, useState } from "react";
import { API } from "../../api/Api";
import axios from "axios";
import { Context } from "../../context/ThemeContextProvider";
import { useParams } from "react-router-dom";

const NewsInfo = () => {
    const { state } = useContext(Context);
    const [dataNews, setDataNews] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/yangiliklar/${id}/`);
                setDataNews(response.data && response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMenu();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let subTitle = dataNews && dataNews.nom;
    let description = dataNews && dataNews.text1;
    if (dataNews && state.language === "ru") {
        subTitle = dataNews.nomru;
        description = dataNews.text1ru;
    } else if (dataNews && state.language === "eng") {
        subTitle = dataNews.nomeng;
        description = dataNews.text1eng;
    } else if (dataNews && state.language === "turk") {
        subTitle = dataNews.nomturk;
        description = dataNews.text1turk;
    }

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-10 max-md:px-4 py-12">
            {dataNews && (
                <div>
                    <img
                        src={dataNews.rasm}
                        alt={subTitle}
                        className="max-w-[600px] h-[400px] max-sm:h-auto max-sm:w-full mb-4 rounded-2xl"
                    />
                    <h1 className="text-2xl font-medium text-slate-800 mb-5 dark:text-gray-100">
                        {subTitle}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default NewsInfo;
