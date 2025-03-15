const formatPokemonForSearch = (str) => {
    if (!str) return "";
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export async function getCorrespondingPokemons(pokemonName, pokemons) {
    return pokemons.filter(
        (pokemon) =>
            formatPokemonForSearch(pokemon.name.fr)
                .includes(formatPokemonForSearch(pokemonName))
    );
}