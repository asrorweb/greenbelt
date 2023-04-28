import { useEffect, useState } from "react";

// icon from react icon
import { BsMoonStars } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const DarkLightMode = () => {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const localMode = localStorage.getItem("mode")
            ? JSON.parse(localStorage.getItem("mode"))
            : "light";
        document.documentElement.className = localMode;
        setMode(localMode);
    }, []);

    const modeHendler = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("mode", JSON.stringify(newMode));
        document.documentElement.className = newMode;
    };
    console.log(mode);

    return (
        <div onClick={() => modeHendler()}>
            <BsMoonStars className="text-[22px] dark:hidden cursor-pointer" />
            <FaSun className="dark:text-white hover:rotate-[45deg] duration-300 text-[22px] hidden dark:block cursor-pointer" />
        </div>
    );
};

export default DarkLightMode;
