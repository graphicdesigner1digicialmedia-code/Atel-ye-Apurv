import React from "react";

const Button = () => {
    return (
        <button className="group relative overflow-hidden rounded-full border border-white px-10 py-4 text-lg font-medium text-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex justify-center mx-auto mb-32">
            {/* Hover Background Fill */}
            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                See All Works
            </span>
        </button>
    );
};

export default Button;