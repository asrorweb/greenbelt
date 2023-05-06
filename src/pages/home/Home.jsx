import React from "react";
import Hero from "../../components/hero/Hero";
import Gallarry from "../../components/gallary/Gallarry";
import ProductSlider from "../../components/productSliders/ProductSlider";

const Home = () => {
    return (
        <div>
            <Hero />
            <ProductSlider />
            <Gallarry />
        </div>
    );
};

export default Home;
