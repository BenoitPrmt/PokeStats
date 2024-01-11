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

let localCache = localStorage.getItem("pokemons");
let pokemons = [];

if (localCache === null) {
    getAllPokemons().then(data => {
        localStorage.setItem("pokemons", JSON.stringify(data))
        pokemons = data;
    })
} else {
    pokemons = JSON.parse(localCache);

    let searchBar = document.getElementById("search-bar");
    if (searchBar.value !== "") {
        searchBar.value = "";
    }

    searchBar.addEventListener("keyup", function (event) {
        dataFiltered = pokemons.filter(poke => poke.name.fr.toLowerCase().includes(searchBar.value.toLowerCase()))
        showPokemons(dataFiltered, 9, false)
    });
}

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
const generationId = urlParams.get("gen");

let pokeSection = document.getElementById("pokemon");
let searchSection = document.getElementById("search-section");

showGenerations(9)

if (generationId === null) {
    if (pokemonId === null) {
        pokeSection.style.display = "none";
        searchSection.style.display = "block";
    } else {
        pokeSection.style.display = "flex";
        searchSection.style.display = "none";

        showPokemon(pokemons.filter(poke => poke.pokedexId == pokemonId)[0]);
    }
} else {
    pokeSection.style.display = "none";

    // get pokemons by generation in "pokemons" localstorage
    showPokemons(pokemons.filter(poke => poke.generation == generationId), generationId, false);
}

function navigatePage(direction) {
    if (direction === "previous" && pokemonId < 1) {
        getPokemonPage(parseInt(pokemonId)-1)
    } else if (direction === "next" && pokemonId > 1017) {
        getPokemonPage(parseInt(pokemonId)+1)
    } else {
        getPokemonPage(pokemonId)
    }
}