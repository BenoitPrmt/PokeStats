export async function getPokemonById(pokemonId) {
  return fetch("https://tyradex.app/api/v1/pokemon/" + pokemonId)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getPokemonsByGeneration(generation) {
    return fetch(`https://tyradex.app/api/v1/gen/${generation}`)
        .then((res) => res.json())
        .then((data) => data);
}

export async function getPokemonsByType(type) {
    return fetch(`https://tyradex.app/api/v1/types/${type}`)
        .then((res) => res.json())
        .then((data) => data);
}