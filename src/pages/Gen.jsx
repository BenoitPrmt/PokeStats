import { useParams } from "react-router-dom";
import { getPokemonsByGeneration } from "../api/pokemons.js";
import { useEffect, useState } from "react";

function Gen() {
    const { id } = useParams();
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
        <div>
            <h1 className="text-center">Génération n°{id}</h1>
            <ul>
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                        <li key={pokemon.pokedex_id}>
                            <a href={`/pokemon/${pokemon.pokedex_id}`}>
                                {pokemon.name.fr}
                            </a>
                        </li>
                    ))
                ) : (
                    <p>Aucun Pokémon trouvé pour cette génération.</p>
                )}
            </ul>
        </div>
    );
}

export default Gen;
