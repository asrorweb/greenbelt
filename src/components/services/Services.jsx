// test img
import img from "../../assets/images/loy.png";
import FormSubmit from "../form/FormSubmit";

const Services = () => {
    return (
        <>
            <div className="pt-9 shadow-xl h-[calc(100vh_-_72px)] max-lg:h-auto mb-20">
                <div className="max-w-[1400px] mx-auto px-10 max-md:px-4 h-full max-lg:h-auto flex flex-col">
                    <h1 className="text-center text-3xl dark:text-white mb-7 font-medium">
                        Loyihalashtirish
                    </h1>
                    <div className="flex max-md:flex-col gap-6 grow max-lg:grow-0 overflow-hidden max-md:overflow-visible">
                        <img
                            src={img}
                            className="max-w-[55%] max-md:mx-auto max-md:max-w-[70%] max-[478px]:max-w-full drop-shadow-2xl object-cover max-lg:max-w-[45%] max-lg:h-[400px]"
                        />
                        <div className="pt-3 pr-3 pb-3 h-[800px] max-lg:max-h-[400px] overflow-y-auto max-md:overflow-visible max-md:max-h-full max-md:h-auto">
                            <p className="dark:text-slate-300 text-lg max-lg:text-base">
                                Sizning biznesingizni rivojlantirish uchun,
                                barcha hamrohlik qiluvchi omillarga qo'shimcha
                                ravishda, sug'orish tizimining to'g'ri ishlab
                                chiqilgan dizayn loyihasi eng muhim rol
                                o'ynaydi. Gren Belt Fergana jamoasi ochiq
                                maydonlar, bogʻlar va issiqxona Sizning
                                biznesingizni rivojlantirish uchun, barcha
                                hamrohlik qiluvchi omillarga qo'shimcha ravishda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FormSubmit />
        </>
    );
};

export default Services;
