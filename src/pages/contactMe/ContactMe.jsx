import { useContext, useEffect } from "react";

// icons
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md";
import { ImPhone } from "react-icons/im";

// components
import FormSubmit from "../../components/form/FormSubmit";

// my Context
import { Context } from "../../context/ThemeContextProvider";

// img
import Aboutus from "../../assets/images/aboutus.png";

const ContactMe = () => {
    const { state } = useContext(Context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let subTitle = ` Green Belt Fergana O‘zbekistondagi irrigatsiya tizimlari va
                    issiqxona majmualari bozorining faol ishtirokchisi
                    hisoblanadi. Asosiy faoliyati: sug‘orish tizimlari, ekin
                    maydonlarini zamonaviy sug‘orish tizimlariga o‘tkazish va
                    loyihalash ishlari. Bizning jamoamiz o‘z sohasi
                    mutaxassislari, irrigatsiya tizimlari, gidrotexniklar, va
                    malakali muhandislaridan iborat.
                   
                    Kompaniyamiz eng ilg‘or texnologiyalarni joriy etib, o‘z
                    bilim va ko‘nikmalariga tayangan holda innovatsion loyihalar
                    ustida ish olib boradi. Biz bozor sharoitlariga
                    moslashtirilgan o'z texnologik yechimlarimizni ishlab
                    chiqamiz.
                    
                    Green Belt Fergana - bizning maqsadimiz suvni tejash va
                    hosildorlikni oshirish!`;
    let office = "Bizning ofisimiz";
    if (state.language === "ru") {
        subTitle = `Оросительные системы в Зеленом поясе Ферганской области Узбекистана и
                    активный участник рынка тепличных комплексов
                    Считается Основные виды деятельности: ирригационные системы, растениеводство
                    перевод полей на современные системы орошения и
                    дизайнерские работы. Наша команда в своей сфере
                    специалисты, ирригационные системы, инженеры-гидротехники и
                    состоит из квалифицированных инженеров.
                    
                    Наша компания внедрила самые передовые технологии
                    инновационные проекты, основанные на знаниях и навыках
                    работает на нем. Мы к рыночным условиям
                    разрабатываем собственные индивидуальные технологические решения
                    мы выходим
                    
                    Зеленый пояс Ферганы - наша цель экономить воду и
                    Повысить продуктивность!`;
        office = "Наш офис";
    } else if (state.language === "eng") {
        subTitle = `Irrigation systems in Green Belt Fergana Uzbekistan and
                    an active participant in the market of greenhouse complexes
                    is considered Main activities: irrigation systems, crops
                    transfer of fields to modern irrigation systems and
                    design work. Our team is in its own field
                    specialists, irrigation systems, hydraulic engineers, and
                    consists of qualified engineers.
                    
                    Our company has introduced the most advanced technologies
                    innovative projects based on knowledge and skills
                    works on it. We to market conditions
                    develop our own customized technological solutions
                    we go out
                    
                    Green Belt Fergana - our goal is to save water and
                    increase productivity!`;
        office = "Our office";
    } else if (state.language === "turk") {
        subTitle = `Yeşil Kuşak Fergana Özbekistan'da sulama sistemleri ve
                    sera kompleksleri pazarında aktif bir katılımcı
                    düşünülmektedir Ana faaliyetler: sulama sistemleri, ekinler
                    tarlaların modern sulama sistemlerine devri ve
                    tasarım çalışması. Ekibimiz kendi alanında
                    uzmanları, sulama sistemleri, hidrolik mühendisleri ve
                    nitelikli mühendislerden oluşmaktadır.
                   
                    Firmamız en ileri teknolojileri tanıtmıştır.
                    bilgi ve becerilere dayalı yenilikçi projeler
                    üzerinde çalışır. Biz piyasa koşullarına
                    kendi özelleştirilmiş teknolojik çözümlerimizi geliştirmek
                    Biz dışarı çıkıyoruz
                   
                    Yeşil Kuşak Fergana - amacımız su tasarrufu ve
                    üretkenliği artırın!`;
        office = "Bizim ofisimiz";
    }

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4 dark:text-white">
                <h1 className="text-center text-3xl font-bold mb-4">
                    <span className="text-green-600">Green Belt Fergana </span>
                    {/* <span className="font-normal text-2xl">
                        ga xush kelibsiz
                    </span> */}
                </h1>
                <p className="text-[19px] leading-[150%] mb-10 dark:text-slate-400">
                    {subTitle}
                </p>

                <div className="mb-12">
                    <h2 className="text-center text-2xl mb-7 font-medium">
                        {office}
                    </h2>
                    <div className="flex gap-10 flex-wrap">
                        <img
                            src={Aboutus}
                            alt="img firma"
                            className="max-w-[500px] max-md:mx-auto max-sm:w-full rounded-2xl shadow-2xl"
                        />
                        <div>
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-3">
                                    <MdLocationPin className="text-2xl text-green-700" />
                                    <span className="">
                                        Farg’ona sh, So’lim k 5a-uy
                                    </span>
                                </li>
                                <li className="flex  gap-3">
                                    <ImPhone className="text-2xl text-green-700" />
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <a href="tel:+998980077009">
                                                +998 (98) 007 70 09
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+998987707009">
                                                +998 (98) 770 70 09
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+998980707009">
                                                +998 (98) 070 70 09
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+998907747009">
                                                +998 (90) 774 70 09
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MdOutlineMailOutline className="text-2xl text-green-700" />
                                    <a href="mailto:greenbeltfergana@gmail.com">
                                        greenbeltfergana@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <iframe
                        className="w-full h-[500px] max-sm:h-[400px] shadow-[3px_5px_100px_6px_rgba(34,60,80,0.2)] rounded-2xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.3659670398717!2d71.7762614404925!3d40.429056016219164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb830c4f4ec139%3A0xc8c1ada316c35ed1!2sGREEN%20BELT%20Suv%20tejovchi%20texnologiyalar!5e0!3m2!1suz!2s!4v1683797400857!5m2!1suz!2s"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <FormSubmit />
            </div>
        </div>
    );
};

export default ContactMe;
