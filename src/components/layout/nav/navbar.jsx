import {Fragment, useState, useEffect} from "react";
import pokeballLogo from "../../../assets/images/pokeball.webp";
import NavLinkSm from "./navLinkSm.jsx";
import NavLinkLg from "./navLinkLg.jsx";
import SearchBar from "./searchBar.jsx";
import {CircleHelp, House, X} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-menu-content');
            const menuButton = document.getElementById('menu-button');

            if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const openSidebar = (e) => {
        if (e) e.preventDefault();
        document.body.style.overflow = 'hidden';
        setIsMenuOpen(true);
    };

    const closeSidebar = (e) => {
        if (e) e.preventDefault();
        setTimeout(() => {
            setIsMenuOpen(false);
            document.body.style.overflow = 'auto';
        }, 300);
    };

    const toggleMenu = (e) => {
        e.preventDefault();
        if (isMenuOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    };

    return (
        <header className="relative container flex justify-between items-center py-4 px-3 sm:px-4 md:py-6 lg:py-8">
            <button
                id="menu-button"
                className="lg:hidden flex items-center space-x-2 group"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? (
                    <X className="size-6 transition-transform duration-300 ease-out"/>
                ) : (
                    <div className="flex items-center space-x-2">
                        <img
                            src={pokeballLogo || ""}
                            className="size-10 anim-pokeBall group-hover:rotate-45 transition-transform duration-300"
                            alt="Menu"
                        />
                        <span
                            className="text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">Menu</span>
                    </div>
                )}
            </button>

            <nav className="hidden lg:block">
                <ul className="flex px-6 py-2 rounded-3xl">
                    {Array.from({length: 9}).map((_, id) => (
                        <Fragment key={id}>
                            <NavLinkLg id={id}/>
                        </Fragment>
                    ))}
                </ul>
            </nav>

            {/* Mobile menu backdrop */}
            <div
                className={`fixed inset-0 z-40 lg:hidden bg-black transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-50 backdrop-blur-sm" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            <div
                id="mobile-menu"
                className={`fixed inset-y-0 left-0 z-50 lg:hidden transition-all duration-300 ease-in-out transform w-screen ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                aria-hidden={!isMenuOpen}
            >
                <div
                    id="mobile-menu-content"
                    className="h-full w-3/4 max-w-xs bg-white shadow-lg overflow-hidden"
                >
                    <div className="flex flex-col h-full p-4 w-full">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <img
                                    src={pokeballLogo || ""}
                                    className="size-10 anim-pokeBall group-hover:rotate-45 transition-transform duration-300"
                                    alt="Menu"
                                />
                                <span className="ml-3 font-bold text-lg tracking-wide
                       text-transparent bg-gradient-to-r from-gradientB to-gradientR bg-clip-text">Pokestats</span>
                            </div>
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                                onClick={closeSidebar}
                                aria-label="Close menu"
                            >
                                <X className="size-5"/>
                            </button>
                        </div>

                        <ul className="flex flex-col gap-2 flex-grow overflow-y-auto">
                            {Array.from({length: 9}).map((_, idx) => (
                                <div
                                    key={idx}
                                    className="transform transition duration-300 ease-out"
                                    style={{
                                        transitionDelay: `${50 * idx}ms`,
                                        opacity: isMenuOpen ? 1 : 0,
                                        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                                    }}
                                >
                                    <NavLinkSm id={idx}/>
                                </div>
                            ))}
                        </ul>

                        <div className="mt-auto pt-4 border-t transform transition duration-300 ease-out"
                             style={{
                                 transitionDelay: '400ms',
                                 opacity: isMenuOpen ? 1 : 0,
                                 transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                             }}>
                            <SearchBar isMobile={true}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 items-center ml-auto">
                {window.location.pathname !== "/" && (
                    <a href="/"
                       className="bg-gray-900 flex justify-center items-center rounded-full p-2 text-white hover:bg-gray-700 transition-colors duration-300"
                       aria-label="Home">
                        <House className="size-5"/>
                    </a>
                )}

                {!isMobile && window.location.pathname !== "/pokemons" && <SearchBar/>}

                <a href="/random"
                   className="bg-gray-900 flex justify-center items-center rounded-full p-2 text-white hover:bg-gray-700 transition-colors duration-300"
                   aria-label="Help">
                    <CircleHelp className="size-5"/>
                </a>
            </div>
        </header>
    );
};

export default Navbar;