function Navbar() {
  return (
    <div className="flex justify-between items-center py-8 px-3 sm:px-0">
      <div className="dropdown">
        <div tabIndex={0} role="button" className=" lg:hidden">
          <img
            src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
            className="size-14 anim-pokeBall"
          />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-44 p-2 shadow">
          {Array.from({length: 9}).map((_, idx) => (
            <li key={idx}>
              <a className="cursor-pointer" href={`/gen/${idx+1}`}>
                <img
                  src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
                  className="size-14"
                  alt={`Icon ${idx}`}
                />
                génération {idx}
              </a>
            </li>
          ))}
        </ul>
        <nav className="hidden lg:block px-6 py-2 rounded-3xl">
          <ul className="flex gap-1">
            {Array.from({length: 9}).map((_, idx) => (
              <li key={idx}>
                <a
                  className="cursor-pointer tooltip hover:tooltip-open tooltip-bottom tooltip-gradientR"
                  data-tip={"Génération " + (idx+1)}
                  href={`/gen/${idx+1}`}>
                  <img
                    src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"
                    className="size-16"
                    alt={`Icon ${idx}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="">
        <a>
          <img
            src="https://img.icons8.com/?size=100&id=2908&format=png&color=000000"
            className="size-14">
          </img>
        </a>
      </div>
    </div>
  )
}

export default Navbar
