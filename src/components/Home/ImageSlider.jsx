import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/Home Image Slider/1.jpg";
import image2 from "../../assets/Home Image Slider/2.jpg";
import image3 from "../../assets/Home Image Slider/3.jpg";
import image4 from "../../assets/Home Image Slider/4.jpg";
import image5 from "../../assets/Home Image Slider/5.jpg";
import image6 from "../../assets/Home Image Slider/6.jpg";
import image7 from "../../assets/Home Image Slider/7.jpg";


gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        image: image1,
    },
    {
        image: image2,
    },
    {
        image: image3,
    },
    {
        image: image4,
    },
    {
        image: image5,
    },
    {
        image: image6,
    },
    {
        image: image7,
    },
];

const ImageSlider = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray(".section");

            panels.slice(0, -1).forEach((panel) => {
                gsap.set(panel, {
                    force3D: true,
                    transformOrigin: "center center",
                });

                gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "bottom bottom",
                        end: "+=100%",
                        pin: true,
                        pinSpacing: false,
                        scrub: 1.5,
                        anticipatePin: 1,
                        fastScrollEnd: true,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(panel, {
                        scale: 0.88,
                        opacity: 0.35,
                        ease: "none",
                        force3D: true,
                    })
                    .to(
                        panel,
                        {
                            opacity: 0,
                            ease: "none",
                            force3D: true,
                        },
                        0.8
                    );
            });

            ScrollTrigger.refresh();
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="px-10 py-4">
            {sections.map((section, index) => (
                <section
                    key={index}
                    className="section relative h-screen overflow-hidden rounded-2xl"
                >
                    <img
                        src={section.image}
                        alt={`Slide ${index + 1}`}
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover select-none will-change-transform"
                    />
                </section>
            ))}
        </div>
    );
};

export default ImageSlider;