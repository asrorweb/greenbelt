import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { API } from "../../api/Api";

// myContext
import { Context } from "../../context/ThemeContextProvider";

const Hero = () => {
    const [data, setData] = useState(null);
    const { state } = useContext(Context);

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/home/`);
                setData(response.data && response.data);
            } catch (error) {
                console.log("error");
            }
        }
        getMenu();
    }, []);

    let Title1 = data && data[0]?.title1;
    let Title2 = data && data[0]?.title2;
    let Title3 = data && data[0]?.title3;
    let text = data && data[0]?.text1;
    let Contact = "Biz bilan bog'lanish";
    let info = "Ko'proq Ma'lumot";
    if (state.language === "ru") {
        Title1 = data && data[0]?.titleru1;
        Title2 = data && data[0]?.titleru2;
        Title3 = data && data[0]?.titleru3;
        text = data && data[0]?.text1ru;
        Contact = "Cвязаться с нами";
        info = "Больше информации";
    } else if (state.language === "eng") {
        Title1 = data && data[0]?.titleeng1;
        Title2 = data && data[0]?.titleeng2;
        Title3 = data && data[0]?.titleeng3;
        text = data && data[0]?.text1eng;
        Contact = "Contact us";
        info = "More Information";
    } else if (state.language === "turk") {
        Title1 = data && data[0]?.titleeturk1;
        Title2 = data && data[0]?.titleeturk2;
        Title3 = data && data[0]?.titleeturk3;
        text = data && data[0]?.text1turk;
        Contact = "Bize Ulaşın";
        info = "Daha fazla bilgi";
    }
    return (
        <div className="h-[calc(100vh_-_72px)]  max-lg:bg-[#171836]  relative">
            {data && (
                <div
                    className={`max-w-7xl flex z-20 items-center justify-between max-lg:justify-center h-full mx-auto px-10 max-md:px-4 relative`}
                >
                    <div className="mr-5 max-md:translate-y-[-30px] relative max-lg:mr-0  max-lg:z-20 max-lg:text-center">
                        <h1 className="text-[70px] max-lg:text-[60px] max-sm:text-[50px] max-lg:leading-[65px] mb-5 leading-[90px] lg:dark:text-white font-bold max-lg:dark:text-white max-lg:text-white">
                            {Title1}
                            <br />
                            <span className="text-green-600">{Title2} </span>
                            {Title3}
                        </h1>
                        <p className="text-[18px] max-lg:text-[16px] max-w-[500px] mb-4 max-md:mb-6 dark:text-stone-300 max-lg:text-white">
                            {text}
                        </p>
                        <div className="flex items-center w-full max-lg:justify-center max-md:flex-col gap-3 mx-auto">
                            <a
                                href="tel:+998980077009"
                                className="inline-block max-md:py-4 whitespace-nowrap px-4 py-2 rounded-lg max-md:w-full shadow-2xl bg-green-600 hover:bg-green-700 text-white hover:outline-2"
                            >
                                {Contact}
                            </a>
                            <Link
                                to={"/aloqa"}
                                className="inline-block max-md:py-4 whitespace-nowrap px-4 py-2 max-md:w-full shadow-2xl border border-[#d0cece] rounded-lg  hover:bg-[#eee] dark:hover:bg-[#ffffffcd] max-lg:bg-white dark:bg-white hover:outline-2"
                            >
                                {info}
                            </Link>
                        </div>
                    </div>

                    {/* img box */}
                    <div className="relative group/img max-lg:absolute max-lg:w-full max-lg:h-full rounded-2xl max-lg:rounded-none shadow-[-3px_4px_67px_23px_rgba(34,60,80,0.2)]">
                        {/* extra img */}
                        {/* 1 */}
                        <img
                            src={data[0]?.rasm1}
                            alt="img 1"
                            className="z-20 duration-300  group-hover/img:top-[-40px] group-hover/img:left-[-40px] absolute max-lg:hidden shadow-2xl top-[-50px] left-[-50px] object-cover rounded-2xl w-[120px] h-[120px]"
                        />

                        {/* 2 */}
                        <img
                            src={data[0]?.rasm3}
                            alt="img 2"
                            className="z-20  absolute duration-300 group-hover/img:bottom-[-24px] group-hover/img:right-[-40px] max-lg:hidden shadow-2xl  bottom-[-50px] right-[-50px] max-[1000px]:right-[-30px] object-cover rounded-2xl w-[120px] h-[120px]"
                        />

                        <img
                            src={data[0]?.rasm2}
                            alt="img big"
                            className=" w-[100%] max-md:opacity-75 rounded-2xl max-lg:rounded-none max-lg:h-full max-lg:max-w-full max-lg:z-10  max-w-[600px] h-[400px] object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
