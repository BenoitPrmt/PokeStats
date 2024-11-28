import pokeballLogo from "../../../assets/images/pokeball.webp";

const NavLinkSm = ({id}) => {
  return (
    <li key={id} className="rounde-3xl hover:scale-105">
      <a
        className="cursor-pointer flex items-center gap-2 tracking-wide"
        href={`/gen/${id + 1}`}
      >
        <img
          src={pokeballLogo}
          className="smh:size-12
                     size-16"
          alt={`Icon ${id}`}
        />
        Génération {id + 1}
      </a>
    </li>
  )
}

export default NavLinkSm