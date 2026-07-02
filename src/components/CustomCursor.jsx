import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.4,
            ease: "power3",
        });

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.4,
            ease: "power3",
        });

        const moveCursor = (e) => {
            xTo(e.clientX - 20);
            yTo(e.clientY - 20);
        };

        window.addEventListener("mousemove", moveCursor);

        const hoverTargets = document.querySelectorAll("a, h1, h2, button");

        const handleEnter = () => {
            gsap.to(cursor, {
                scale: 2.5,
                duration: 0.3,
            });
        };

        const handleLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
            });
        };

        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        />
    );
};

export default CustomCursor;