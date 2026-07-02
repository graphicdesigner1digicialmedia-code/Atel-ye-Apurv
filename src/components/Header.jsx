import { useState } from "react";
import FullscreenMenu from "./FullscreenMenu";
import logo from "../assets/aa.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[200] px-16 py-5 flex items-center justify-between">
                {/* <img
                    src={logo}
                    alt="Logo"
                    className="h-10 object-contain relative z-[300] mix-blend-normal"
                /> */}

                <h1 className="font-anton text-white text-[40px]">
                    Atel'ye Apurv
                </h1>

                <div className="flex items-center gap-5">
                    <span className="uppercase text-sm tracking-[2px]">Menu</span>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative w-6 h-6 flex items-center justify-center"
                    >
                        <span
                            className={`absolute w-4 h-[1px] bg-white transition-all duration-500 ${menuOpen ? "rotate-45" : "-translate-y-2"
                                }`}
                        ></span>

                        <span
                            className={`absolute w-4 h-[1px] bg-white transition-all duration-500 ${menuOpen ? "-rotate-45" : "translate-y-2"
                                }`}
                        ></span>
                    </button>
                </div>
            </header>

            <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
};

export default Header;