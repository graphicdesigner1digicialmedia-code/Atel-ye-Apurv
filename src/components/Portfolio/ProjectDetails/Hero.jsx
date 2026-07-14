import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero({ project }) {
    const imageRef = useRef();
    const titleRef = useRef();

    useLayoutEffect(() => {
        gsap.from(imageRef.current, {
            scale: 1.15,
            duration: 2,
            ease: "power3.out",
        });

        gsap.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            delay: 0.4,
            ease: "power4.out",
        });
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            <img
                ref={imageRef}
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-16 left-10 lg:left-20">
                <h1
                    ref={titleRef}
                    className="text-white text-6xl md:text-8xl lg:text-[120px] font-light leading-none"
                >
                    {project.title}
                </h1>
            </div>
        </section>
    );
}