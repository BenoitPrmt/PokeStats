import { useParams } from "react-router-dom";
import { getPokemonById } from "../api/pokemons.js";
import { useEffect, useState } from "react";

function Pokemon() {
    const { id } = useParams();
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
        <div>
            <h1
                className="text-center"
                onMouseEnter={(e) => (e.currentTarget.innerHTML = pokemon.name.jp)}
                onMouseLeave={(e) => (e.currentTarget.innerHTML = pokemon.name.fr)}
            >
                {pokemon.name.fr}
            </h1>

            {/* TYPES pokemon.types.map */}
            <div className="flex justify-center">
                {pokemon.types.map((type) => (
                    <img key={type.name} src={type.image} alt={type.name} className="w-1/6 rounded-full" />
                ))}
            </div>

            <div className="flex justify-center">
                <img
                    src={pokemon.sprites.regular}
                    alt={pokemon.name.fr}
                    className="w-1/3"
                    onMouseEnter={(e) => (e.currentTarget.src = pokemon.sprites.shiny)}
                    onMouseLeave={(e) => (e.currentTarget.src = pokemon.sprites.regular)}
                />
            </div>
        </div>
    );
}

export default Pokemon;
