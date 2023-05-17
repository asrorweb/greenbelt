import { HashRouter, Route, Routes } from "react-router-dom";

// pages component
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import Products from "./components/products/Products";
import ProductInfo from "./components/product-info/ProductInfo";
import Services from "./components/services/Services";
import { Irrigation } from "./components/irrigation/Irrigation";
import ContactMe from "./pages/contactMe/ContactMe";
import News from "./pages/news/News";
import NewsInfo from "./pages/news-info/NewsInfo";
import NoPage from "./pages/not-found/NoPage";

function App() {
    return (
        <div className="App min-h-screen overflow-x-hidden bg-white pt-[72px] dark:bg-[#171836]">
            <div>
                <HashRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/mahsulotlar" element={<Products />} />
                        <Route path="/info/:id" element={<ProductInfo />} />
                        <Route path="/xizmatlar/:id" element={<Services />} />
                        <Route path="/aloqa" element={<ContactMe />} />
                        <Route path="/sugorish/:id" element={<Irrigation />} />
                        <Route path="/yangiliklar" element={<News />} />
                        <Route path="/yangiliklar/:id" element={<NewsInfo />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                    <Footer />
                </HashRouter>
            </div>
        </div>
    );
}

export default App;
