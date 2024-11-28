import {useParams} from "react-router-dom";
import {getPokemonsByType} from "../api/pokemons.js";
import {useEffect, useState} from "react";

import Title from "../components/layout/title.jsx";
import CardPokemon from "../components/card-pokemon.jsx";

function Type() {
  const {type} = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPokemonsByType(type);
        setPokemons(data.pokemons);
        setTypeData(data);
      } catch (error) {
        console.log(error);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [type]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="py-20 container">
      <Title content={typeData ? "Pokémons de type " + typeData.name.fr : "Recherche des pokémons..."} size={"small"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-0 lg:grid-cols-4 gap-x-24 gap-y-48 py-52">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon}/>
          ))
        ) : (
          <h2>Aucun Pokémon trouvé pour ce type.</h2>
        )}
      </div>
    </main>
  );
}

export default Type;
