import React from "react";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

const SocialNetvork = () => {
    return (
        <div className="flex gap-3">
            <Link>
                <BsFacebook className="text-[24px] dark:text-white hover:text-[#4267B2] dark:hover:text-[#4267B2]" />
            </Link>
            <Link>
                <BsInstagram className="text-[24px] dark:text-white hover:text-[#E1306C] dark:hover:text-[#E1306C]" />
            </Link>
            <Link>
                <BsTelegram className="text-[24px]  dark:text-white hover:text-[#0088cc] dark:hover:text-[#0088cc]" />
            </Link>
        </div>
    );
};

export default SocialNetvork;
