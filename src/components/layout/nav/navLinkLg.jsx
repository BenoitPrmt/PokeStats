import pokeballLogo from "../../../assets/images/pokeball.webp";
import Tooltip from "../tooltip.jsx";

const Nav = ({id}) => {
  return (
    <li
      key={id}
      className="group relative">
      <a
        className="cursor-pointer text-xl"
        href={`/gen/${id + 1}`}
      >
        <img
          src={pokeballLogo}
          className="size-16"
          alt={`Icon ${id}`}
        />
      </a>
      <Tooltip content={"Génération" + " " + (id + 1)}/>
    </li>
  )
}

export default Nav;