import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TypographySection() {
    const sectionPinRef = useRef(null);
    const stackRef = useRef(null);
    const wordRefs = useRef([]);
    const resizeTimer = useRef(null);

    const WORDS = [
        "ARCHITECTURE",
        "EXECUTION",
        "INTERIOR DESIGN",
        "LANDSCAPE DESIGN",
        "PLANNING",
    ];

    useEffect(() => {
        const buildScrollAnimation = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionPinRef.current) st.kill();
            });

            const HEADER_ZONE = 0.22;
            const STAGGER_GAP = 0.16;

            wordRefs.current.forEach((el, i) => {
                if (!el) return;

                // upward drift
                gsap.fromTo(
                    el,
                    { yPercent: 0 },
                    {
                        yPercent: -160,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionPinRef.current,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1,
                        },
                    }
                );

                // sequential color activation
                const segmentStart = i * STAGGER_GAP;
                const segmentEnd = segmentStart + STAGGER_GAP * 1.4;

                ScrollTrigger.create({
                    trigger: sectionPinRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    onUpdate(self) {
                        const p = self.progress;
                        let t;

                        if (p < segmentStart) t = 0;
                        else if (p < segmentEnd)
                            t = (p - segmentStart) / (segmentEnd - segmentStart);
                        else t = 1;

                        t = Math.max(0, Math.min(1, t));

                        const opacity = 0.07 + t * 0.88;
                        el.style.color = `rgba(255,255,255,${opacity.toFixed(3)})`;
                    },
                });
            });

            ScrollTrigger.refresh();
        };

        buildScrollAnimation();

        const handleResize = () => {
            clearTimeout(resizeTimer.current);
            resizeTimer.current = setTimeout(buildScrollAnimation, 200);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="bg-[#0a0a0a] overflow-x-hidden font-['Oswald',Arial,sans-serif]">

            {/* Pin Container */}
            <div ref={sectionPinRef} className="relative h-[200vh]">
                {/* Sticky Section */}
                <div className="sticky top-0 h-full w-full overflow-hidden bg-[#0a0a0a]">

                    {/* Word Stack */}
                    <div
                        ref={stackRef}
                        className="absolute inset-0 z-[1] flex flex-col items-center justify-center pointer-events-none max-[700px]:gap-1"
                    >
                        {WORDS.map((word, index) => (
                            <span
                                key={index}
                                ref={(el) => (wordRefs.current[index] = el)}
                                className="
                  block
                  font-bold
                  uppercase
                  tracking-[-0.01em]
                  whitespace-nowrap
                  leading-[0.95]
                  text-center
                  text-[clamp(40px,9vw,110px)]
                  text-white/[0.07]
                  will-change-transform
                  will-change-[color]
                  max-[1024px]:text-[clamp(34px,8vw,80px)]
                  max-[700px]:text-[clamp(24px,11vw,56px)]
                  max-[700px]:tracking-[-0.005em]
                  max-[700px]:leading-[1.05]
                  max-[700px]:whitespace-normal
                  max-[700px]:px-[6vw]
                  max-[420px]:text-[clamp(20px,12vw,44px)]
                "
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}