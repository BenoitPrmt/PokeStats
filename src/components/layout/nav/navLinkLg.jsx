import pokeballLogo from "../../../assets/images/pokeball.webp";

const Nav = ({id}) => {
  return (
    <li key={id}>
      <a
        className="cursor-pointer tooltip hover:tooltip-open tooltip-bottom tooltip-gradientR"
        data-tip={"Génération " + (id + 1)}
        href={`/gen/${id + 1}`}
      >
        <img
          src={pokeballLogo}
          className="size-16"
          alt={`Icon ${id}`}
        />
      </a>
    </li>
  )
}

export default Nav;