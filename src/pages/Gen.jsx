import {useParams} from "react-router-dom";
import {getPokemonsByGeneration} from "../api/pokemons.js";
import {useEffect, useState} from "react";

import Title from "../components/layout/title.jsx";
import CardPokemon from "../components/card-pokemon.jsx";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-0 lg:grid-cols-4 gap-x-24 gap-y-48 py-52">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon}/>
          ))
        ) : (
          <h2>Aucun Pokémon trouvé pour cette génération.</h2>
        )}
      </div>
    </main>
  );
}

export default Gen;
