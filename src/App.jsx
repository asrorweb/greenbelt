import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages component
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Products from "./components/products/Products";
import ProductInfo from "./components/product-info/ProductInfo";
import Services from "./components/services/Services";
import AboutUs from "./components/about-us/AboutUs";

function App() {
    return (
        <div className="App min-h-screen overflow-x-hidden bg-white pt-[72px] dark:bg-[#171836]">
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/maxsulotlar" element={<Products />} />
                        <Route path="/info" element={<ProductInfo />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/bizbilanboglanish"
                            element={<AboutUs />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
