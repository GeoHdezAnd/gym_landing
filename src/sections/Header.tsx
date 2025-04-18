import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const NavLink = ({ title }: { title: string }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-200}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p2 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    );
    return (
        <header
            className={clsx(
                "fixed top-0 left-0 z-50  w-full py-10 transition-all duration-500 max-lg:py-4 ",
                hasScrolled && "py-2 backdrop-blur-[19px]"
            )}
        >
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2 ">
                    <img
                        src="/images/logo.webp"
                        width={100}
                        alt="logo"
                        className="px-3  "
                    />
                </a>

                <div
                    className={clsx(
                        "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
                        isOpen
                            ? "max-lg:opacity-100"
                            : "max-lg:pointer-events-none"
                    )}
                >
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="nosotros" />
                                    <div className="dot" />
                                    <NavLink title="planes" />
                                </li>

                                <li className="nav-logo">
                                    <LinkScroll
                                        to="hero"
                                        offset={-250}
                                        spy
                                        smooth
                                        className={clsx(
                                            "max-lg:hidden transition-transform duration-500 cursor-pointer "
                                        )}
                                    >
                                        <img
                                            src="/images/logo.webp"
                                            width={80}
                                            alt="logo"
                                            
                                        />
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title="faq" />
                                    <div className="dot" />
                                    <NavLink title="testimonials" />
                                </li>
                            </ul>
                        </nav>

                        <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[360px] translate-x-[-210px] -translate-y-1/2">
                           
                            <img
                                src="/images/bg-bad-omens.png"
                                alt="outline"
                                width={600}
                                className="absolute inset-0 mix-blend-soft-light opacity-5"
                            />
                        </div>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-s4/70 shadow-red-950 shadow-md rounded-full flex justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    <i className={clsx("  text-2xl", !isOpen ?  "ri-bubble-chart-fill text-white ": "ri-close-line text-white ")}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
