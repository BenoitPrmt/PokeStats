import {useParams} from "react-router-dom";
import {getPokemonById} from "../api/pokemons.js";
import {useEffect, useState} from "react";
import log from "eslint-plugin-react/lib/util/log.js";
import pokemonTypes from "../models/pokemonTypes.js";
import StrenghtWeakness from "../components/details/strenght-weakness.jsx";
import PokemonImage from "../components/details/pokemonImage.jsx";
import Carousel from "../components/details/carousel.jsx";
import TitleTertiary from "../components/details/title-tertiary.jsx";

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
                <TitleTertiary content={"forces"} tagColor={"bg-green-500"}/>
              </div>
              <ul className="list-disc pl-4">
                {pokemon.resistances.map(item => (
                  item.multiplier < 1 ? <StrenghtWeakness item={item}/> : null))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <TitleTertiary content={"faiblesses"} tagColor={"bg-red-500"}/>
              </div>
              <ul className="list-disc pl-4">
                {pokemon.resistances.map(item => (item.multiplier > 1 ? <StrenghtWeakness item={item}/> : null))}
              </ul>
            </div>


          </div>


          <div className="grid grid-cols-2 gap-3">
            <Carousel/>
          </div>

        </div>

        {/* Pokemon image section */}
        <PokemonImage pokemon={pokemon}/>
      </div>
    </main>
  );
}

export default Pokemon;
