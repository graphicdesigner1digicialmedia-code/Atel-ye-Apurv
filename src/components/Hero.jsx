import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ firstLine, secondLine, paragraph, leftBottomText, leftBottomIcon, rightBottomText }) => {
    const heroRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            {
                y: 120,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 1.2,
                ease: "expo.out",
            }
        );
    }, []);

    return (
        <section className="relative h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden px-8">

            {/* HERO TEXT */}
            <div className="flex flex-col items-center">

                {/* FIRST LINE */}
                <h1
                    ref={(el) => (heroRef.current[0] = el)}
                    className="
                        font-anton
                        uppercase
                        text-[30px]
                        tracking-[45px]
                        leading-[4]
                        text-center
                        sm:text-[25px]
                        md:text-[25px]
                        lg:text-[25px]
                        xl:text-[25px]
                    "
                >
                    {firstLine}
                </h1>

                {/* SECOND LINE */}
                <h1
                    ref={(el) => (heroRef.current[1] = el)}
                    className="
                        font-anton
                        uppercase
                        text-[30px]
                        tracking-[45px]
                        leading-[1.8]
                        text-center
                        -mt-8
                        sm:text-[25px]
                        md:text-[25px]
                        lg:text-[25px]
                        xl:text-[25px]
                    "
                >
                    {secondLine}
                </h1>

                {/* SUBTEXT */}
                <p
                    ref={(el) => (heroRef.current[2] = el)}
                    className="
                        mt-4
                        w-[100%]
                        max-w-[1400px]
                        text-center
                        text-white/60
                        text-[20px]
                        font-normal
                        leading-relaxed
                    "
                >

                    {paragraph}
                </p>
            </div>

            {/* BOTTOM BAR */}
            <div className="absolute bottom-8 left-0 w-full flex justify-between items-center px-16">

                {/* LEFT */}
                <div
                    ref={(el) => (heroRef.current[3] = el)}
                    className="flex items-center gap-4"
                >

                    <span className="text-[18px] font-medium">
                        {leftBottomText}
                    </span>
                    <span className="text-[22px]">{leftBottomIcon}</span>
                </div>

                {/* RIGHT */}
                <div ref={(el) => (heroRef.current[4] = el)}>
                    <span className="text-[18px] font-medium">
                        {rightBottomText}
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Hero;