// const headers = {
//     Accept: "application/json",
// };

console.log(window.location);

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

console.log(pokemonId, generationId, typeId);

if(generationId === null) {
    if(typeId === null) {
        if (pokemonId === null) {
            showGenerations(8)
            showTypes()
        } else {
            getPokemon(pokemonId)
        }
    } else {
        showPokemonsByType(typeId)
    }
} else {
    console.log(generationId);
    getGeneration(generationId)
}


