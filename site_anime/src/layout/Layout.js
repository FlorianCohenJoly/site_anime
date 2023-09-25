import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";
// import Navbar from "../pages/Navbar/Navbar";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";



function Layout() {

    return (
        <div className="Layout">

            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/navbar" element={<Navbar />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default Layout;
