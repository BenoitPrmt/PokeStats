import {useParams} from "react-router-dom";
import {getPokemonById} from "../api/pokemons.js";
import {useEffect, useState} from "react";
import log from "eslint-plugin-react/lib/util/log.js";

function Pokemon() {

  const {id} = useParams();
  const [pokemon, setPokemon] = useState([]);
  console.log(pokemon)
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
    <main className="">
      <div className="grid grid-cols-1 p-4 md:grid-cols-2  min-h-[calc(100dvh-144px)]">
        <div className="md:pl-20 order-2 md:order-1">
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
            <h1
              className="text-6xl font-semibold text-gray-900 tracking-tight duration-1000"
              onMouseEnter={(e) => (e.currentTarget.innerHTML = pokemon.name.jp)}
              onMouseLeave={(e) => (e.currentTarget.innerHTML = pokemon.name.fr)}
            >
              {pokemon.name.fr}
            </h1>
            <div className="flex justify-center gap-3">
              {pokemon.types.map((type) => (
                <img key={type.name} src={type.image} alt={type.name} className=" size-10 md:size-14 rounded-full"/>
              ))}
            </div>

          </div>

          <div className="my-10">
            <h2 className="capitalize text-2xl font-semibold mb-3">description</h2>
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>

          <div className="my-10 flex justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="size-4 rounded-full bg-green-400"></span>
                <h2 className="uppercase tracking-wide text-2xl font-semibold mb-3">forces</h2>
              </div>
              <ul className="pl-4">
                {pokemon.resistances.map(item => (
                  item.multiplier < 1 ?
                    <li key={item.name}>
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
              <ul>
                {pokemon.resistances.map(item => (
                  item.multiplier > 1 ?
                    <li key={item.name}>
                      {item.name}
                    </li>
                    :
                    ""
                ))}
              </ul>
            </div>
          </div>


        </div>

        <div className="relative order-1 md:order-2">
          <div className="bg-red-500 right w-auto h-[400px] md:h-full right"></div>
          <img
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            className="size-80 md:size-[450px] absolute  top-40 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
