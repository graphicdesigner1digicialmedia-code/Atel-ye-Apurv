import { useState } from "react";
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";
import { projects } from "../data/projects";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="w-full bg-black">
            <PortfolioHero
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <PortfolioGrid
                projects={projects}
                activeFilter={activeFilter}
            />
        </div>
    );
};

export default Portfolio;