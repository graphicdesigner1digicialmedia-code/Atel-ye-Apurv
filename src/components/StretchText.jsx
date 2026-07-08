import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StretchText({ text }) {
    const targetRef = useRef(null);
    const wrapRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const target = targetRef.current;
        const wrap = wrapRef.current;
        const cursor = cursorRef.current;

        const mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        const pos = {
            x: mouse.x,
            y: mouse.y,
        };

        const LERP_SPEED = 0.5;
        const INFLUENCE_RADIUS = 300;
        const MAX_STRETCH = 2;

        // ---------------- Split Text ----------------

        const rawText = target.textContent;
        target.innerHTML = "";

        const letters = [...rawText].map((char) => {
            const span = document.createElement("span");

            span.className =
                "inline-block leading-[0.82] origin-top will-change-transform";

            span.textContent = char;

            if (char === " ") span.style.whiteSpace = "pre";

            target.appendChild(span);

            return {
                el: span,
                cx: 0,
                cy: 0,
                scaleSetter: gsap.quickTo(span, "scaleY", {
                    duration: 0.45,
                    ease: "power3.out",
                }),
            };
        });

        // ---------------- Measure ----------------

        function measureLetters() {
            letters.forEach((letter) => {
                const rect = letter.el.getBoundingClientRect();

                letter.cx = rect.left + rect.width / 2;
                letter.cy = rect.top;
            });
        }

        measureLetters();

        // ---------------- Mouse ----------------

        const mouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("resize", measureLetters);

        // ---------------- Hover ----------------

        const enter = () => cursor.classList.add("opacity-100", "scale-60");

        const leave = () => cursor.classList.remove("opacity-100", "scale-60");

        target.addEventListener("mouseenter", enter);
        target.addEventListener("mouseleave", leave);

        // ---------------- RAF ----------------

        let raf;

        const tick = () => {
            pos.x += (mouse.x - pos.x) * LERP_SPEED;
            pos.y += (mouse.y - pos.y) * LERP_SPEED;

            wrap.style.transform = `translate3d(${pos.x}px, ${pos.y}px,0) translate(-50%,-50%)`;

            letters.forEach((letter) => {
                const dx = mouse.x - letter.cx;
                const dy = mouse.y - letter.cy;

                const dist = Math.sqrt(dx * dx + dy * dy);

                let t = Math.max(0, 1 - dist / INFLUENCE_RADIUS);

                t = t * t * (3 - 2 * t);

                const scaleY = 1 + t * (MAX_STRETCH - 1);

                letter.scaleSetter(scaleY);
            });

            raf = requestAnimationFrame(tick);
        };

        tick();

        // ---------------- Cleanup ----------------

        return () => {
            cancelAnimationFrame(raf);

            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("resize", measureLetters);

            target.removeEventListener("mouseenter", enter);
            target.removeEventListener("mouseleave", leave);

            target.innerHTML = rawText;
        };
    }, []);

    return (
        <div className="relative flex h-[30vh] items-center justify-center overflow-hidden bg-[#000000] cursor-none">
            <h1
                ref={targetRef}
                className="select-none whitespace-nowrap font-['Archivo_Narrow'] text-[clamp(100px,10vw,260px)] font-bold uppercase tracking-[-2px] text-white cursor-none"
            >
                {text}
            </h1>

            {/* Cursor */}
            <div
                ref={wrapRef}
                className="fixed left-0 top-0 z-[999] h-0 w-0 pointer-events-none"
            >
                <div
                    ref={cursorRef}
                    className="
            flex
            h-[140px]
            w-[140px]
            -translate-x-1/2
            -translate-y-1/2
            scale-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-b
            from-[#f4f4f4]
            via-[#d9d9d9]
            to-[#a8a8a8]
            opacity-0
            transition-all
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
          "
                >
                    <span className="font-['Archivo_Narrow'] text-sm font-semibold tracking-[0.05em] text-[#111]">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}