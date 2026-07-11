import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioCard from "./PortfolioCard";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function PortfolioGrid({
  projects,
  activeFilter,
}) {
  const gridRef = useRef(null);
  const flipState = useRef(null);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  // -------------------------------
  // Save layout before filtering
  // -------------------------------

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    flipState.current = Flip.getState(".portfolio-card");

    const next =
      activeFilter === "All"
        ? projects
        : projects.filter(
          (p) => p.category === activeFilter
        );

    setFilteredProjects(next);

  }, [activeFilter, projects]);

  // -------------------------------
  // Animate Filter
  // -------------------------------

  useLayoutEffect(() => {
    if (!flipState.current) return;

    Flip.from(flipState.current, {
      duration: 0.9,
      ease: "power4.inOut",
      absolute: true,
      nested: true,
      prune: true,
      stagger: 0.05,

      onEnter(elements) {

        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 30,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.04,
          }
        );

        gsap.fromTo(
          elements.map((el) =>
            el.querySelector(".portfolio-image")
          ),
          {
            scale: 1.12,
          },
          {
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      },

      onLeave(elements) {

        gsap.to(elements, {
          opacity: 0,
          scale: 0.95,
          y: -20,
          duration: 0.4,
          ease: "power3.out",
        });

      },

    });

  }, [filteredProjects]);

  // -------------------------------
  // Desktop Parallax Only
  // -------------------------------

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {

      const ctx = gsap.context(() => {

        gsap.utils
          .toArray(".portfolio-card")
          .forEach((card) => {

            const image =
              card.querySelector(".portfolio-image");

            gsap.fromTo(
              card,
              {
                y: 40,
              },
              {
                y: -40,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );

            if (image) {

              gsap.fromTo(
                image,
                {
                  yPercent: -10,
                  scale: 1.12,
                },
                {
                  yPercent: 10,
                  scale: 1.12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                }
              );

            }

          });

      }, gridRef);

      return () => ctx.revert();

    });

    return () => mm.revert();

  }, [filteredProjects]);

  const rows = [];

  for (let i = 0; i < filteredProjects.length; i += 2) {
    rows.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <section className="py-12 md:py-16 xl:py-24">

      <div
        ref={gridRef}
        className="
          max-w-[1800px]
          mx-auto

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16

          space-y-10
          md:space-y-16
          xl:space-y-32
        "
      >

        {rows.map((row, index) => {

          const reverse = index % 2 !== 0;

          return (

            <div
              key={index}
              className={`
                grid
                grid-cols-1
                xl:grid-cols-2

                gap-8
                sm:gap-10
                md:gap-14
                lg:gap-16
                xl:gap-32
                2xl:gap-40

                items-start

                ${reverse
                  ? "xl:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >

              <PortfolioCard
                project={row[0]}
                large
              />

              {row[1] && (
                <PortfolioCard
                  project={row[1]}
                />
              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}