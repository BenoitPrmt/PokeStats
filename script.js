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

if (generationId === null) {
    if (typeId === null) {
        if (pokemonId === null) {
            showGenerations(9)
            showTypes()
        } else {
            getPokemon(pokemonId)
        }
    } else {
        showPokemonsByType(typeId)
    }
} else {
    getGeneration(generationId)
}


