import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Gallarry from "../../components/gallary/Gallarry";
import ProductSlider from "../../components/productSliders/ProductSlider";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero />
            <ProductSlider />
            <Gallarry />
        </div>
    );
};

export default Home;
