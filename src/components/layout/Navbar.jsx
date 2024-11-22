import React, {useState} from "react";

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
          src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
          className="size-14 anim-pokeBall"
          alt="Burger icon"
        />
      </div>

      <nav className="transition-all duration-1000">
        <ul className="hidden lg:flex px-6 py-2 rounded-3xl">
          {Array.from({length: 9}).map((_, idx) => (
            <li key={idx}>
              <a
                className="cursor-pointer tooltip hover:tooltip-open tooltip-bottom tooltip-gradientR"
                data-tip={"Génération " + (idx + 1)}
                href={`/gen/${idx + 1}`}
              >
                <img
                  src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
                  className="size-16"
                  alt={`Icon ${idx}`}
                />
              </a>
            </li>
          ))}
        </ul>
        {isMenuOpen ?
          <ul className={`flex flex-col gap-1 absolute transform -translate-y-1/2 border top-1/2 left-2 w-52 lg:hidden rounded-3xl glass`}>
            {Array.from({length: 9}).map((_, idx) => (
              <li key={idx} className="rounde-3xl hover:scale-105">
                <a
                  className="cursor-pointer flex items-center gap-2 tracking-wide"
                  href={`/gen/${idx + 1}`}
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
                    className="size-16"
                    alt={`Icon ${idx}`}
                  />
                  Génération {idx + 1}
                </a>
              </li>
            ))}
          </ul> : ''}
      </nav>

      <div>
        <a href="/">
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
