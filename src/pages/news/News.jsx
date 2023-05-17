import React, { useContext, useEffect, useState } from "react";

// my Contex
import { Context } from "../../context/ThemeContextProvider";

// animation
import Aos from "aos";
import "aos/dist/aos.css";

// fetching
import axios from "axios";

// Api
import { API } from "../../api/Api";

// unique id
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const News = () => {
    const { state } = useContext(Context);
    const [dataNews, setDataNews] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/yangiliklar/`);
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

    return (
        <div className="py-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <ul className="flex flex-col gap-5">
                    {dataNews &&
                        dataNews.map((news, index) => {
                            let subTitle = news.nom;
                            let description = news.text1;
                            if (state.language === "ru") {
                                subTitle = news.nomru;
                                description = news.text1ru;
                            } else if (state.language === "eng") {
                                subTitle = news.nomeng;
                                description = news.text1eng;
                            } else if (state.language === "turk") {
                                subTitle = news.nomturk;
                                description = news.text1turk;
                            }
                            return (
                                <Link
                                    to={`/yangiliklar/${news.id}`}
                                    key={uuidv4()}
                                    data-aos={
                                        index % 2 == 0
                                            ? "fade-up-right"
                                            : "fade-up-left"
                                    }
                                    className="flex gap-5 p-5 max-sm:p-0 shadow-[5px_5px_80px_-20px_rgba(0,0,0,0.5)] dark:shadow-2xl dark:hover:shadow-xl rounded-2xl hover:shadow-[5px_5px_80px_-10px_rgba(0,0,0,0.5)] duration-150
                                     dark:bg-gradient-to-b dark:from-[#26325b] dark:to-[#171836] max-lg:flex-col "
                                >
                                    <img
                                        src={news.rasm}
                                        alt="img news"
                                        className="rounded-2xl max-w-md h-[300px] object-cover max-sm:h-auto"
                                    />
                                    <div className="max-sm:p-3">
                                        <h2 className="text-2xl font-medium text-slate-800 mb-5 dark:text-gray-100">
                                            {subTitle}
                                        </h2>
                                        <p className="text-lg text-slate-600 dark:text-slate-400">
                                            {description.slice(0, 200)}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default News;
