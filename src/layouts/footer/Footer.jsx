import { Link } from "react-router-dom";
import SocialNetvork from "../../components/social-network/SocialNetvork";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="pt-12 pb-7">
            <div className="max-w-7xl mx-auto px-10 max-md:px-4">
                <div className="flex justify-between">
                    {/* logo and social networks */}
                    <div>
                        <Link>
                            <img src="" alt="" />
                        </Link>

                        <p></p>

                        {/* social networks */}
                        <SocialNetvork />
                    </div>

                    {/* nav */}
                    <div></div>
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
