// const headers = {
//     Accept: "application/json",
// };



const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
const generationId = urlParams.get("gen");

if(!generationId) {
    if (!pokemonId) {
        showGenerations(8)
        showTypes()
    } else {
        getPokemon(pokemonId)
    }
} else {
    getGeneration(generationId)
}


