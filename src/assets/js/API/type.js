// get all pokemons of the same type
function fetchTypes() {
    fetch("https://pokebuildapi.fr/api/v1/types")
        .then(response => response.json())
        .then(data => {
            let types = [];
            for (let type of data) {
                types.push({
                    name: type.name,
                    image: type.image,
                });
            }
            localStorage.setItem("types", JSON.stringify(types));
            showTypes();
        });
}

function showTypes() {
    let typesEle = document.getElementById("types");

    let typesSession = localStorage.getItem("types");

    if (typesSession) {
        typesSession = JSON.parse(typesSession);

        for (let type of typesSession) {
            let typeEle = document.createElement("a");
            typeEle.setAttribute("href", "?type=" + type.name);

            let typeImage = document.createElement("img");
            typeImage.classList.add("type-little");
            typeImage.setAttribute("alt", type.name);
            typeImage.setAttribute("title", type.name);
            typeImage.setAttribute("src", type.image);

            typeEle.appendChild(typeImage);

            typesEle.appendChild(typeEle);
        }
    } else {
        fetchTypes();
    }
}

function fetchPokemons(type) {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then(response => response.json())
        .then(data => {
            let pokemons = [];
            for (let pokemon of data) {
                pokemons.push({
                    pokedexId: pokemon.pokedexId,
                    name: pokemon.name,
                    sprite: pokemon.sprite,
                });
            }
            localStorage.setItem("type" + type, JSON.stringify(pokemons));
            showPokemonsByType(type);
        });
}

function showPokemonsByType(type) {
    let pokemonsEle = document.getElementById("pokemons");

    let pokemonsSession = localStorage.getItem("type" + type);

    if (pokemonsSession) {
        pokemonsSession = JSON.parse(pokemonsSession);

        for (let pokemon of pokemonsSession) {
            let pokemonEle = document.createElement("a");
            pokemonEle.classList.add("card");
            pokemonEle.setAttribute("href", "?pokemon=" + pokemon.pokedexId);
            pokemonEle.setAttribute('title', 'pokemon')

            let pokemonImage = document.createElement("img");
            pokemonImage.setAttribute("src", pokemon.sprite);
            pokemonImage.setAttribute("alt", pokemon.name);

            let pokemonName = document.createElement("h3");
            pokemonName.innerHTML = pokemon.name;

            pokemonEle.appendChild(pokemonImage);
            pokemonEle.appendChild(pokemonName);

            pokemonsEle.appendChild(pokemonEle);
        }
    } else {
        fetchPokemons(type);
    }
}