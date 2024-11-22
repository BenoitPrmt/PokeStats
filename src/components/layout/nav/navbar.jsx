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
    <header className="flex justify-between items-center py-8 px-3 sm:px-0">

      <div role="button" className="lg:hidden" onClick={toggleMenu}>
        <img
          src={pokeballLogo}
          className="size-14 anim-pokeBall"
          alt="Burger icon"
        />
      </div>

      <nav className="transition-all duration-1000">
        <ul className="hidden lg:flex px-6 py-2 rounded-3xl">
          {Array.from({length: 9}).map((_, id) => (
            <NavLinkLg id={id}/>
          ))}
        </ul>
        {isMenuOpen ?
          <ul className={`flex flex-col gap-1 fixed z-50 top-1/2 transform -translate-y-1/2 border left-2 w-52 lg:hidden rounded-3xl glass`}>
            {Array.from({length: 9}).map((_, idx) => (
              <NavLinkSm id={idx}/>
            ))}
          </ul> : ''}
      </nav>

      <div>
        <a href="/public">
          <img
            src="https://img.icons8.com/?size=100&id=2908&format=png&color=000000"
            className="size-14"
            alt="Logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
