let hiddenOnHomeElements = document.getElementsByClassName("hidden-on-home");
if (window.location.search === "") {
    for (let element of hiddenOnHomeElements) {
        element.style.display = "none";
    }
} else {
    for (let element of hiddenOnHomeElements) {
        element.style.display = "block";
    }
}

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
const generationId = urlParams.get("gen");
const typeId = urlParams.get("type");

let pokeSection = document.getElementById("pokemon");
let searchSection = document.getElementById("search-section");

if (generationId === null) {
    if (typeId === null) {
        if (pokemonId === null) {
            pokeSection.style.display = "none";
            searchSection.style.display = "block";
            showGenerations(9)
        } else {
            pokeSection.style.display = "flex";
            searchSection.style.display = "none";
            getPokemon(pokemonId).then(data => showPokemon(data))
        }
    } else {
        pokeSection.style.display = "none";
        searchSection.style.display = "block";
        showPokemonsByType(typeId)
    }
} else {
    pokeSection.style.display = "none";
    getGeneration(generationId).then(data => {
        showPokemons(data, generationId, true)
        let allData = data;

        let searchBar = document.getElementById("search-bar");
        searchBar.addEventListener("keyup", function (event) {
            dataFiltered = data.filter(poke => poke.name.fr.toLowerCase().includes(searchBar.value.toLowerCase()))
            console.log(dataFiltered);
            showPokemons(dataFiltered, generationId, false)
        });
    })
}


