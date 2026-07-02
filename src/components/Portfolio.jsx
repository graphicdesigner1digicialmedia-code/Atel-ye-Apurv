import { useState } from "react";
import PORTFOLIO from "../data/portfolio";

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="px-10 py-20">
            {PORTFOLIO.map((project, i) => (
                <a
                    key={i}
                    href={project.href}
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="border-t border-white/10 py-8 flex justify-between items-center group relative"
                >
                    <div className="flex items-center gap-10">
                        <h2 className="font-sixcaps text-6xl uppercase tracking-[4px] group-hover:text-[#8c6144] transition">
                            {project.title}
                        </h2>

                        <span>{project.year}</span>
                        <span>{project.status}</span>
                    </div>

                    {hoveredProject === i && (
                        <img
                            src={project.img}
                            alt={project.title}
                            className="absolute right-32 top-1/2 -translate-y-1/2 w-80 h-52 object-cover"
                        />
                    )}
                </a>
            ))}
        </section>
    );
};

export default Portfolio;