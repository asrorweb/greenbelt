import { useState } from "react";
import ReactLoading from "react-loading";

const Loading = ({ isLoading }) => {
    return (
        <>
            {isLoading && (
                <div className="absolute h-screen z-[5000] w-full inset-0 bg-[#00000097] dark:bg-[#00000042] flex items-center justify-center">
                    <ReactLoading
                        type={"spin"}
                        color={"white"}
                        height={100}
                        width={100}
                    />
                </div>
            )}
        </>
    );
};

export default Loading;
