import React from "react";

import notFound from "../../assets/images/notFound.png";
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="min-h-screen py-11 dark:bg-white">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <img
                    src={notFound}
                    alt="error"
                    className="mx-auto mb-7 max-md:mb-36"
                />
                <div className="text-center">
                    <Link
                        to={"/"}
                        className="inline-block mx-auto text-xl px-4 py-2 bg-green-600 text-white hover:scale-[1.1] duration-300 rounded-2xl"
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoPage;
