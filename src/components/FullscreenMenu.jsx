import { Link } from "react-router-dom";

const menuItems = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Awards", path: "/awards" },
    { title: "Services", path: "/services" },
    { title: "FAQS", path: "/faqs" },
    { title: "Blogs", path: "/blogs" },
];

const FullscreenMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed inset-0 bg-black z-[100] transition-all duration-700 ease-in-out ${menuOpen
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
                }`}
        >
            {/* MENU CONTAINER */}
            <div className="h-screen overflow-y-auto flex justify-center px-4 pt-28 pb-28">
                <ul className="flex flex-col items-center leading-[0.82] gap-3 min-h-max">
                    {menuItems.map((item, index) => (
                        <li key={item.title} className="overflow-hidden">
                            <Link
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="
                  group
                  relative
                  block
                  font-sixcaps
                  uppercase
                  text-white
                  text-[55px]
                  sm:text-[70px]
                  md:text-[120px]
                  tracking-[4px]
                  transition-all
                  duration-700
                  ease-out
                "
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: menuOpen
                                        ? "translateX(0px)"
                                        : "translateX(-120px)",
                                    opacity: menuOpen ? 1 : 0,
                                }}
                            >
                                <span
                                    className="
                    inline-block
                    transition-all
                    duration-500
                    group-hover:text-[#8c6144]
                    group-hover:tracking-[10px]
                    group-hover:translate-x-4
                  "
                                >
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FullscreenMenu;