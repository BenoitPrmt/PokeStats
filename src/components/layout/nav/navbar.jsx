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
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('menu-button');

            if (isMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative container flex justify-between items-center py-4 px-3 sm:px-4 md:py-6 lg:py-8">
            <button
                id="menu-button"
                className="lg:hidden flex items-center space-x-2"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? (
                    <X className="size-6"/>
                ) : (
                    <div className="flex items-center space-x-2">
                        <img
                            src={pokeballLogo || ""}
                            className="size-10 anim-pokeBall"
                            alt="Menu"
                        />
                        <span className="text-sm font-medium">Menu</span>
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

            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-50 lg:hidden bg-black bg-opacity-50 backdrop-blur-sm"
                >
                    <div
                        className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col h-full p-4">
                            <div className="flex justify-between items-center mb-6">
                                <img
                                    src={pokeballLogo || ""}
                                    className="size-10 anim-pokeBall"
                                    alt="Pokeball logo"
                                />
                                <button
                                    className="p-2 rounded-full hover:bg-gray-100"
                                    onClick={toggleMenu}
                                    aria-label="Close menu"
                                >
                                    <X className="size-5"/>
                                </button>
                            </div>

                            <ul className="flex flex-col gap-2 flex-grow overflow-y-auto">
                                {Array.from({length: 9}).map((_, idx) => (
                                    <Fragment key={idx}>
                                        <NavLinkSm id={idx}/>
                                    </Fragment>
                                ))}
                            </ul>

                            <div className="mt-auto pt-4 border-t">
                                <SearchBar isMobile={isMobile}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex gap-2 items-center ml-auto">
                {window.location.pathname !== "/" && (
                    <a href="/" className="bg-gray-900 flex justify-center items-center rounded-full p-2 text-white"
                       aria-label="Home">
                        <House className="size-5"/>
                    </a>
                )}

                {!isMobile && window.location.pathname !== "/pokemons" && <SearchBar/>}

                <a href="/random" className="bg-gray-900 flex justify-center items-center rounded-full p-2 text-white"
                   aria-label="Help">
                    <CircleHelp className="size-5"/>
                </a>
            </div>
        </header>
    );
};

export default Navbar;