import { Link } from "react-router-dom";
import SocialNetvork from "../../components/social-network/SocialNetvork";

// logo
import Logo from "../../assets/images/logo.png";
import Navigation from "../navbar/Navigation";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="pt-12 pb-7 bg-slate-100 dark:bg-[#171836]">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <div className="flex justify-between mb-9 gap-12 flex-wrap">
                    {/* logo and social networks */}
                    <div className="flex flex-col">
                        <Link to={"/"} className="mb-1 inline-block">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-[200px] max-[500px]:w-[150px]"
                            />
                        </Link>

                        <span className="mb-2 text-base dark:text-green-600">
                            {/* Green Belt Fergana */}
                        </span>

                        {/* social networks */}
                        <SocialNetvork />
                    </div>

                    {/* nav */}
                    <div>
                        <Navigation footer={true} />
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-center text-sm max-md:text-xs dark:text-slate-200">
                    Copyright &copy; {year}. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
