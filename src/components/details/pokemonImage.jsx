import pokemonTypes from "../../models/pokemonTypes.js";

const PokemonImage = ({pokemon}) => {
  console.log(pokemon);
  return (
    <div className="relative order-1 rounded-full border-4 overflow-hidden border-red-500
                         md:rounded-none md:overflow-auto md:border-none md:w-full md:order-2">
      <div className={`bg-gradient-to-t right size-[320px]
                           md:w-full md:h-full right
          ${pokemonTypes.some((item) => item.type === pokemon.types[0].name)
        ? `from-${pokemon.types[0].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "Primaire"} via-${pokemon.types[0].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "Secondaire"}`
        : "bg-blue-700"}`}>

      </div>
      <img
        src={pokemon.sprites.regular}
        alt={pokemon.name.fr}
        className="size-80 absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       md:size-[450px] md:top-1/2"
        onMouseEnter={(e) => {
          if (pokemon.sprites.shiny) {
            e.currentTarget.src = pokemon.sprites.shiny;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.src = pokemon.sprites.regular;
        }}
      />
    </div>
  )
}

export default PokemonImage