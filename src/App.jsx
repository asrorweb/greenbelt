import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import ContactMe from "./pages/contactMe/ContactMe";

function App() {
    return (
        <div className="App min-h-screen overflow-x-hidden">
            <div>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/bizbilanboglanish"
                            element={<ContactMe />}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
