import pokemonTypes from "../models/pokemonTypes.js";

const cardPokemon = ({pokemon}) => {
  return (
    <article
      key={pokemon.pokedex_id}
      className="text-center shadow relative h-52 rounded-xl group">
      <div
        className={`bg-gradient-to-t opacity-30 absolute h-full w-full rounded-xl
          ${pokemonTypes.some((item) => item.type === pokemon.types[0].name)
          ? `from-${pokemon.types[0].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "Primaire"} to-${pokemon.types[0].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "Secondaire"}`
          : "bg-blue-700"}`}>
      </div>

      <img
        src={pokemon.sprites.regular}
        alt={"image du pokemon" + " " + pokemon.name.fr}
        loading="lazy"
        className="absolute size-44 z-10 -top-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 group-hover:scale-110 group-hover:-translate-y-2/3 transition duration-300"/>
      <div className="grid place-content-center h-full">
        <h2 className="my-5 capitalize tracking-wide z-20 text-xl font-medium text-black">{pokemon.name.fr}</h2>
        <a
          href={`/pokemon/${pokemon.pokedex_id}`}
          className="group relative overflow-hidden rounded bg-gray-700 px-10 py-2 text-lg transition-all">
                  <span
                    className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
          <span className="font-medium text-white capitalize">détails</span>
        </a>
      </div>
    </article>
  );
}
export default cardPokemon;