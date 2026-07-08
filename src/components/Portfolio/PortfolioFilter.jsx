import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import { projects, categories } from "./projects";
import FilterButton from "./FilterButton";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(Flip, useGSAP);

export default function PortfolioFilter() {
    const container = useRef(null);

    const [activeCategory, setActiveCategory] = useState("All");

    const previousCategory = useRef("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) => project.category === activeCategory
            );

    useGSAP(() => {
        if (!container.current) return;

        const state = Flip.getState(".flip-item");

        setActiveCategory(category);
        requestAnimationFrame(() => {
            Flip.from(state, {
                duration: 0.8,
                ease: "power3.inOut",
                absolute: true,
                stagger: 0.05,
                scale: true,

                onEnter: (elements) => {
                    gsap.fromTo(
                        elements,
                        {
                            opacity: 0,
                            scale: 0.9,
                            y: 60,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power3.out",
                            stagger: 0.05,
                        }
                    );
                },
            });
        });

        previousCategory.current = activeCategory;
    }, { scope: container });

    return (
        <section className="bg-black py-24">

            {/* Filter Buttons */}

            <div className="mb-16 flex flex-wrap justify-center gap-4">

                {categories.map((category) => (
                    <FilterButton
                        key={category}
                        title={category}
                        active={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                    />
                ))}

            </div>

            {/* Grid */}

            <div
                ref={container}
                className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          px-6

          md:grid-cols-2
          xl:grid-cols-3
        "
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        activeCategory={activeCategory}
                    />
                ))}
            </div>
        </section>
    );
}