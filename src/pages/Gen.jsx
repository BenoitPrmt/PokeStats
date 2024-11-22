import {useParams} from "react-router-dom";
import {getPokemonsByGeneration} from "../api/pokemons.js";
import {useEffect, useState} from "react";

import Title from "../components/layout/title.jsx";

function Gen() {
  const {id} = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemonsByGeneration(id);
        console.log(data)
        setPokemons(data);
      } catch (error) {
        console.log(error);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="py-20">
      <Title content={"Bienvenue à la " + id + "ème génération"}/>

      <div className="grid grid-cols-1 px-8 lg:px-0 lg:grid-cols-4 gap-x-24 gap-y-48 py-52">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <div
              key={pokemon.pokedex_id}
              className="text-center shadow relative h-32 rounded-xl">
              <img
                src={pokemon.sprites.regular}
                alt=""
                className="absolute size-44 -top-14 transform -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2"/>
              <div className="grid place-content-center h-full">
                <h2>{pokemon.name.fr}</h2>
                <a
                  href={`/pokemon/${pokemon.pokedex_id}`}
                  className="group relative overflow-hidden rounded bg-gray-700 px-10 py-2 text-lg transition-all">
                  <span
                    className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                  <span className="font-medium text-white capitalize">détails</span>
                </a>
              </div>

            </div>
          ))
        ) : (
          <p>Aucun Pokémon trouvé pour cette génération.</p>
        )}
      </div>
    </main>
  );
}

export default Gen;
