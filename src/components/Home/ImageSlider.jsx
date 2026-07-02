import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: "Section 1",
        type: "image",
        image: "https://assets.codepen.io/16327/portrait-image-3.jpg",
        bg: "bg-white",
        text: "text-black",
    },
    {
        title: "Section 2",
        type: "text",
        bg: "bg-pink-200",
        text: "text-black",
    },
    {
        title: "Section 3",
        type: "image",
        image: "https://assets.codepen.io/16327/portrait-image-4.jpg",
        bg: "bg-gray-100",
        text: "text-black",
    },
    {
        title: "Section 4",
        type: "image",
        image: "https://assets.codepen.io/16327/portrait-image-2.jpg",
        bg: "bg-purple-500",
        text: "text-white",
    },
];

const ImageSlider = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const panels = gsap.utils.toArray(".section");
        panels.pop();

        panels.forEach((panel) => {
            const innerpanel = panel.querySelector(".section-inner");
            const panelHeight = innerpanel.offsetHeight;
            const windowHeight = window.innerHeight;

            const difference = panelHeight - windowHeight;

            const fakeScrollRatio = difference > 0 ? difference / (difference + windowHeight) : 0;

            if (fakeScrollRatio) {
                panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "bottom bottom",
                    end: () => fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
                    pinSpacing: false,
                    pin: true,
                    scrub: true,
                },
            });

            if (fakeScrollRatio) {
                tl.to(innerpanel, {
                    yPercent: -100,
                    y: window.innerHeight,
                    duration: 1 / (1 - fakeScrollRatio) - 1,
                    ease: "none",
                });
            }

            tl.fromTo(
                panel,
                { scale: 1, opacity: 1 },
                { scale: 0.7, opacity: 0.5, duration: 0.9 }
            ).to(panel, { opacity: 0, duration: 0.1 });
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());

    }, []);

    return (

        <div className="overlow-x-hidden overflow-y-scroll h-screen">
            <nav className="fixed top-0 z-[999] flex h-16 w-full items-center justify-between bg-black px-6 text-white">
                <div className="font-bold">Logo</div>
                <div className="flex gap-6">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                </div>
            </nav>

            {/* Image Slider */}
            <div ref={wrapperRef} className="mt-16">
                {sections.map((section, index) => (
                    <section
                        key={index}
                        className={`section relative flex h-[calc(100vh-64px)] w-full justify-center overflow-hidden rounded-[10px] text-center text-[1.5em] font-semibold ${section.bg} ${section.text}`}
                    >
                        <div className="section-content w-full h-full">
                            <div
                                className={`section-inner flex h-full flex-col items-center overflow-hidden ${section.type === "text" ? "h-auto pb-[20vh]" : ""
                                    }`}
                            >

                                <h1 className="m-0 text-[clamp(4rem,12vw+1rem,16rem)] font-semibold">
                                    {section.title}
                                </h1>


                                {section.type === "image" ? (
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="mt-10 aspect-square w-1/2 rounded-lg object-cover"
                                    />
                                ) : (
                                    <>
                                        {[...Array(11)].map((_, i) => (
                                            <p key={i} className="max-w-[40ch] p-8">
                                                This section is long with text content and needs to be
                                                scrollable within before the next slide comes in.
                                            </p>
                                        ))}
                                        <p className="max-w-[40ch] p-8">This is the end...</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;