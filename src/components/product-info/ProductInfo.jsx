import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api/Api";
import { Context } from "../../context/ThemeContextProvider";
const ProductInfo = () => {
    const [data, setData] = useState(null);
    const { state } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/mahsulotlar/${id}/`);
                response.data && setData(response.data);
            } catch (error) {
                console.log("error");
            }
        }
        getMenu();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let Title = data && data?.nom;
    let desctiption = data && data?.text1;
    let info = "Batafsil ma'lumot";
    let button = "Buyutma berish";
    if (state.language === "ru") {
        Title = data && data?.nomru;
        info = "Узнать больше";
        desctiption = data && data?.text1ru;
        button = "Заказ";
    } else if (state.language === "eng") {
        Title = data?.nomeng;
        info = "Learn more";
        desctiption = data && data?.text1eng;
        button = "Buy Now";
    } else if (state.language === "turk") {
        Title = data?.nomturk;
        info = "Daha fazla bilgi edin";
        desctiption = data && data?.text1turk;
        button = "Sipariş";
    }
    return (
        <>
            {data && (
                <div className="py-10">
                    <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                        <div className="flex gap-5 mb-10  max-lg:gap-7 max-sm:gap-8 max-md:flex-col">
                            <div className="lg:w-[40%] max-lg:w-[400px] max-md:w-[60%] max-sm:w-full">
                                <div className="border rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={data?.rasm}
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="max-w-[60%] flex flex-col justify-between max-lg:justify-start max-sm:max-w-full ">
                                <div>
                                    <h2 className="text-3xl font-medium mb-5 max-sm:mb-4 dark:text-white max-lg:mb-10">
                                        {Title}
                                    </h2>
                                    <p
                                        className={`text-[18px] h-[200px] max-lg:hidden overflow-hidden leading-[150%] dark:text-slate-50`}
                                    >
                                        {desctiption &&
                                            desctiption.slice(0, 400)}
                                    </p>
                                </div>

                                <a
                                    href="tel:+998980077009"
                                    className="inline-block max-sm:text-center max-sm:w-full sticky top-[100px] px-8 text-[20px] mr-auto shadow-[0px_5px_70px_5px_rgba(0,0,0,0.2)]  py-2 bg-[#08c308] text-white rounded-lg md:hover:scale-[1.05] duration-150"
                                >
                                    {button}
                                </a>
                            </div>
                        </div>

                        {/* batafsil malumot */}
                        {desctiption && (
                            <div
                                className={`${
                                    desctiption.length > 400 && "block"
                                } hidden`}
                            >
                                <h2 className="mb-9 pt-6 text-2xl dark:text-white">
                                    {info}
                                </h2>
                                <p className="dark:text-white">{desctiption}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductInfo;
