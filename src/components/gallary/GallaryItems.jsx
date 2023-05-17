import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../api/Api";

import "./Gallary.css";

// unique id from uuid
import { v4 as uuidv4 } from "uuid";

const GallaryItems = ({ nom = "" }) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        async function getMenu() {
            try {
                const response = await axios.get(`${API}/galeriya/`);
                setData(response.data && response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMenu();
    }, []);

    return (
        <>
            {data && (
                <div
                    className={`h-[160px] overflow-hidden m-auto relative w-[100%] grid place-items-center`}
                >
                    <div className={`${nom} slide-track flex`}>
                        {data.map((img) => {
                            return (
                                <div
                                    key={uuidv4()}
                                    className="h-[150px] w-[250px] flex items-center p-[5px]"
                                >
                                    <img
                                        src={img.rasm}
                                        className="w-full rounded-xl object-cover h-full"
                                        alt="img gallery"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default GallaryItems;
