// test img
import FormSubmit from "../form/FormSubmit";

import { Context } from "../../context/ThemeContextProvider";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { API } from "../../api/Api";

import Loading from "../isLoading/Loading";

// icons
import { RiErrorWarningLine } from "react-icons/ri";

// unique id
import { v4 as uuidv4 } from "uuid";

const Services = () => {
    const { state } = useContext(Context);
    const [subMenuDAta, setSubMenuData] = useState([]);
    const [ul, setUl] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/submenyular/${id}/`);
                setSubMenuData(response.data && response.data);
                setUl(response.data.ul && response.data.ul);
            } catch (error) {}
        }
        getMenu();
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    let mainTitle = subMenuDAta.nom;
    let mainText = subMenuDAta.text1;

    let warnig =
        "Xizmat narxi yer maydoniga va tizimning murakkabligiga qarab o'zgaradi!";
    if (subMenuDAta && state.language === "ru") {
        mainTitle = subMenuDAta.nomru;
        mainText = subMenuDAta.text1ru;
        warnig =
            "Стоимость обслуживания на земельный участок и систему зависит от сложности!";
    } else if (subMenuDAta && state.language === "eng") {
        mainText = subMenuDAta.text1eng;
        mainTitle = subMenuDAta.nomeng;
        warnig =
            "Service cost per land area and system varies depending on the complexity!";
    } else if (subMenuDAta && state.language === "turk") {
        mainTitle = subMenuDAta.nomturk;
        mainText = subMenuDAta.text1turk;
        warnig =
            "Arazi alanı ve sistem başına hizmet maliyeti karmaşıklığına bağlı olarak değişir!";
    }

    return (
        <>
            {subMenuDAta && (
                <div className="pt-9 shadow-xl h-[calc(100vh_-_72px)] max-lg:h-auto mb-20">
                    <div className="max-w-[1400px] mx-auto px-10 max-md:px-4 h-full max-lg:h-auto flex flex-col">
                        <h1 className="text-center text-3xl dark:text-white mb-7 font-medium">
                            {mainTitle}
                        </h1>
                        <div className="flex max-md:flex-col gap-6 grow max-lg:grow-0 overflow-hidden max-md:overflow-visible">
                            <img
                                src={subMenuDAta.rasm1}
                                className="max-w-[55%] max-md:mx-auto max-md:max-w-[70%] max-[478px]:max-w-full drop-shadow-2xl object-cover max-lg:max-w-[45%] max-lg:h-[400px]"
                            />
                            <div className="pt-3 pr-3 pb-3 h-[800px] max-lg:max-h-[400px] overflow-y-auto max-md:overflow-visible max-md:max-h-full max-md:h-auto">
                                <p className="dark:text-slate-400 text-slate-700 text-lg max-lg:text-base mb-5">
                                    {mainText}
                                </p>
                                <p className="text-[#ffcc00] flex items-center gap-2 text-lg mb-5">
                                    <RiErrorWarningLine className="text-[30px]" />
                                    <span>{warnig}</span>
                                </p>
                                <div>
                                    {ul.length
                                        ? ul.map((list) => {
                                              let myServices = list.nom;

                                              if (state.language === "ru") {
                                                  myServices = list.nomru;
                                              } else if (
                                                  state.language === "eng"
                                              ) {
                                                  myServices = list.nomeng;
                                              } else if (
                                                  state.language === "turk"
                                              ) {
                                                  myServices = list.nomturk;
                                              }
                                              return (
                                                  <span key={uuidv4()}>
                                                      <h3 className="text-xl mb-2 font-medium text-slate-800 dark:text-slate-300">
                                                          {myServices}
                                                      </h3>
                                                      <ul className="pl-10 mb-5 list-disc text-gray-500 dark:text-slate-400">
                                                          {list?.list?.map(
                                                              (items) => {
                                                                  let itemText =
                                                                      items.text1;

                                                                  if (
                                                                      state.language ===
                                                                      "ru"
                                                                  ) {
                                                                      itemText =
                                                                          items.text1ru;
                                                                  } else if (
                                                                      state.language ===
                                                                      "eng"
                                                                  ) {
                                                                      itemText =
                                                                          items.text1eng;
                                                                  } else if (
                                                                      state.language ===
                                                                      "turk"
                                                                  ) {
                                                                      itemText =
                                                                          items.text1turk;
                                                                  }
                                                                  return (
                                                                      <li
                                                                          key={uuidv4()}
                                                                      >
                                                                          {
                                                                              itemText
                                                                          }
                                                                      </li>
                                                                  );
                                                              }
                                                          )}
                                                      </ul>
                                                  </span>
                                              );
                                          })
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <FormSubmit />
        </>
    );
};

export default Services;
// (
//     <div>
//         <h3 className="text-xl font-medium text-slate-800 dark:text-slate-300">
//             {myServices}
//         </h3>
//         <ul className="pl-10 list-disc text-gray-500 dark:text-slate-400">
//             {ul &&
//                 ul[0].list.map((items) => {
//                     let itemText = items.text1;
//                     if (
//                         state.language === "ru"
//                     ) {
//                         itemText =
//                             items.text1ru;
//                     } else if (
//                         state.language === "eng"
//                     ) {
//                         itemText =
//                             items.text1eng;
//                     } else if (
//                         state.language ===
//                         "turk"
//                     ) {
//                         itemText =
//                             items.text1turk;
//                     }
//                     return (
//                         <li key={uuidv4()}>
//                             {itemText}
//                         </li>
//                     );
//                 })}
//         </ul>
//     </div>
// )
