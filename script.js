let returnButton = document.getElementById("return");
if (window.location.search === "") {
    returnButton.style.display = "none";
} else {
    returnButton.style.display = "inline-block";
}


const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
const generationId = urlParams.get("gen");
const typeId = urlParams.get("type");

let pokeSection = document.getElementById("pokemon");

if (generationId === null) {
    if (typeId === null) {
        if (pokemonId === null) {
            pokeSection.style.display = "none";
            showGenerations(9)
        } else {
            pokeSection.style.display = "flex";
            getPokemon(pokemonId)
        }
    } else {
        pokeSection.style.display = "none";
        showPokemonsByType(typeId)
    }
} else {
    pokeSection.style.display = "none";
    getGeneration(generationId)
}


