import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../pages/Navbar/Navbar";

function Layout() {

    return (
        <div className="Layout">
            Header
            <br />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Navbar />} />

            </Routes>

        </div>
    );
}

export default Layout;
