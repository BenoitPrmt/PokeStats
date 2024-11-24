import {useParams} from "react-router-dom";
import {getPokemonById} from "../api/pokemons.js";
import {useEffect, useState} from "react";
import log from "eslint-plugin-react/lib/util/log.js";
import pokemonTypes from "../models/pokemonTypes.js";

function Pokemon() {

  const {id} = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemonById(id);
        setPokemon(data);
      } catch (error) {
        console.log(error);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);



  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <div className="grid grid-cols-1 justify-items-center min-h-[calc(100dvh-144px)]
                      md:grid-cols-2">
        <div className="order-2 px-4
                        md:pl-20 md:order-1">
          <div className="flex flex-col items-center gap-10 justify-between
                          lg:flex-row">
            <h1
              className="text-6xl font-semibold text-gray-900 tracking-tight duration-1000"
              onMouseEnter={(e) => (e.currentTarget.innerHTML = pokemon.name.jp)}
              onMouseLeave={(e) => (e.currentTarget.innerHTML = pokemon.name.fr)}
            >
              {pokemon.name.fr}
            </h1>
            <div className="flex justify-center gap-3">
              {pokemon.types.map((type) => (
                <img key={type.name} src={type.image} alt={type.name} className="size-10 rounded-full
                md:size-14"/>
              ))}
            </div>

          </div>

          <div className="my-10">
            <h2 className="capitalize text-2xl font-semibold mb-3">description</h2>
            <p className="md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>

          <div className="my-10 grid
                          sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="size-4 rounded-full bg-green-400"></span>
                <h2 className="uppercase tracking-wide text-2xl font-semibold mb-3">forces</h2>
              </div>
              <ul className="list-disc pl-4">
                {pokemon.resistances.map(item => (
                  item.multiplier < 1 ?
                    <li
                      key={item.name}
                      className="text-gray-500 font-medium text-lg">
                      {item.name}
                    </li>
                    :
                    ""
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="size-4 rounded-full bg-red-500"></span>
                <h2 className="uppercase tracking-wide text-2xl font-semibold mb-3">faiblesses</h2>
              </div>
              <ul className="list-disc pl-4">
                {pokemon.resistances.map(item => (
                  item.multiplier > 1 ?
                    <li
                      key={item.name}
                      className="text-gray-500 font-medium text-lg">
                      {item.name}
                    </li>
                    :
                    ""
                ))}
              </ul>
            </div>
          </div>


        </div>

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
      </div>
    </main>
  );
}

export default Pokemon;
