import TitleTertiary from "./title-tertiary.jsx";
import StrenghtWeakness from "./strenght-weakness.jsx";


const Weakness = ({pokemon}) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <TitleTertiary content={"faiblesses"} tagColor={"bg-red-500"}/>
      </div>
      <ul className="list-disc pl-4">
        {pokemon.resistances.map(item => (item.multiplier > 1 ? <StrenghtWeakness item={item}/> : null))}
      </ul>
    </div>
  )
};

export default Weakness;