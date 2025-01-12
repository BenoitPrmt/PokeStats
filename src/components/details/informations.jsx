import TitleTertiary from "./title-tertiary.jsx";

const Informations = ({weight, height, catchRate}) => {
  return (
    <div className="order-1 md:order-2">
      <TitleTertiary content={"informations"} tagColor={"bg-purple-500"}/>
      <ul>
        <li className="capitalize">
          poids : <span>{weight}</span>
        </li>
        <li className="capitalize">
          taille : <span>{height}</span>
        </li>
        <li className="">
          Taux de capture : <span>{catchRate}</span>
        </li>
      </ul>
    </div>

  )
}

export default Informations;