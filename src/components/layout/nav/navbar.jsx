import React, {useState} from "react";
import pokeballLogo from "../../../assets/images/pokeball.webp";
import NavLinkSm from "./navLinkSm.jsx";
import NavLinkLg from "./navLinkLg.jsx";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="container flex justify-between items-center py-8 px-3 sm:px-0">

      <div role="button" className="lg:hidden" onClick={toggleMenu}>
        <img
          src={pokeballLogo}
          className="size-14 anim-pokeBall"
          alt="Burger icon"
        />
      </div>

      <nav className="transition-all duration-1000 relative">
        <ul className="hidden lg:flex px-6 py-2 rounded-3xl">
          {Array.from({length: 9}).map((_, id) => (
            <NavLinkLg id={id}/>
          ))}
        </ul>
        {isMenuOpen ?
          <ul className={`flex flex-col gap-1 fixed z-50 top-1/2 transform -translate-y-1/2 border left-2 w-52 rounded-3xl glass
                          lg:hidden
                          smh:h-screen smh:justify-center smh:gap-2`}>
            <button className="absolute -right-3 -top-4 size-9 p-1 bg-white rounded-3xl z-50 border
                               smh:-right-3 smh:top-3 smh:size-8"
                    onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
            {Array.from({length: 9}).map((_, idx) => (
              <NavLinkSm id={idx}/>
            ))}
          </ul> : ''}
      </nav>

      <div className="flex gap-3">
        {window.location.pathname != "/"
          ?
          <a href="/" className="bg-gray-900 flex justify-center items-center rounded-full p-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="size-6 lucide lucide-house">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
              <path
                d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
          </a>
          : ""}

        <a href="/random" className="bg-gray-900 flex justify-center items-center rounded-full p-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="size-6 lucide lucide-circle-help">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
            <path d="M12 17h.01"/>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
