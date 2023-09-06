import React from "react";

import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="min-h-screen py-11 ">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <div className="text-center">
                    <h1 className="text-3xl mb-4 dark:text-white">
                        Page Not Found
                    </h1>
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
