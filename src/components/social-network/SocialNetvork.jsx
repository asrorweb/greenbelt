import React from "react";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const SocialNetvork = () => {
    return (
        <div className="flex gap-3">
            <a href="https://youtube.com/@GreenBeltFergana">
                <AiFillYoutube className="text-[28px] dark:text-white hover:text-red-700 dark:hover:text-red-700" />
            </a>
            <a href="https://instagram.com/greenbelt_fergana?igshid=ZWQyN2ExYTkwZQ==">
                <BsInstagram className="text-[24px] dark:text-white hover:text-[#E1306C] dark:hover:text-[#E1306C]" />
            </a>
            <a href="https://t.me/greenbelt_fergana">
                <BsTelegram className="text-[24px]  dark:text-white hover:text-[#0088cc] dark:hover:text-[#0088cc]" />
            </a>
        </div>
    );
};

export default SocialNetvork;
