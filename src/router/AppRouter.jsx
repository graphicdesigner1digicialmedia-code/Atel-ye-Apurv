import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Awards from "../pages/Awards";
import Services from "../pages/Services";
import Faq from "../pages/Faq";
import Blogs from "../pages/Blogs";
import Career from "../pages/Career";
import ProjectDetails from "../components/Portfolio/ProjectDetails";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/career" element={<Career />} />
        </Routes>
    );
};

export default AppRouter;