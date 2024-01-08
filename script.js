const headers = {
    Accept: "application/json",
};

// const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon", {
//     method: "GET",
//     headers: headers,
// }).then((response) => response.json())
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => { error });

function showGenerations(max) {
    let genEle = document.getElementById("generations");

    for (let i = 1; i < max + 1; i++) {
        let gen = document.createElement("a");
        gen.setAttribute("id", i)
        gen.classList.add("card")
        // gen.setAttribute("onclick", "getGeneration(" + i + ")")
        gen.setAttribute("href", "?gen=" + i)

        let title = document.createElement("h3");
        title.innerHTML = "Génération " + i

        gen.appendChild(title)
        genEle.appendChild(gen)
    }
}

function showPokemons(pokemonsList, gen, add_to_session) {
    let pokemonsSection = document.getElementById("pokemons")
    let pokemons = [];

    for (poke of pokemonsList) {
        console.log(poke);
        let pokeEle = document.createElement("a");
        pokeEle.classList.add("card")
        pokeEle.setAttribute("href", "?pokemon=" + poke.pokedexId)

        let pokeName = document.createElement("h3");
        pokeName.innerHTML = poke.name

        let pokeImage = document.createElement("img");
        pokeImage.setAttribute("src", poke.sprite)

        pokeEle.appendChild(pokeName)
        pokeEle.appendChild(pokeImage)

        if (add_to_session) {
            pokemons.push({
                pokedexId: poke.pokedexId,
                name: poke.name,
                sprite: poke.sprite
            })
        }
        pokemonsSection.appendChild(pokeEle)
    };
    if (add_to_session) localStorage.setItem("gen" + gen, JSON.stringify(pokemons));
}

function getGeneration(gen) {

    let pokemonsSection = document.getElementById("pokemons")
    pokemonsSection.innerHTML = ""

    let loadingEle = document.createElement("h4");
    loadingEle.innerHTML = "Chargement...";
    loadingEle.classList.add("loading-text");

    pokemonsSection.appendChild(loadingEle);

    const generationSession = localStorage.getItem("gen" + gen);

    if (!generationSession) {
        const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + gen, {
            method: "GET",
            headers: headers,
        }).then((response) => response.json())
            .then((response) => {
                console.log(response);
                pokemonsSection.innerHTML = ""

                showPokemons(response, gen, true);
            })
            .catch((error) => { error });
    } else {
        console.log(generationSession);

        pokemonsSection.innerHTML = ""
        showPokemons(JSON.parse(generationSession), gen, false);

    }
}

function showPokemon(poke) {

    let pokemonSection = document.getElementById("pokemon");

    let pokemonTitle = document.createElement("h2");
    pokemonTitle.innerHTML = poke.name;

    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", poke.image);

    pokemonSection.appendChild(pokemonTitle)
    pokemonSection.appendChild(pokemonImage)

}

function getPokemon(poke_id) {
    console.log(window.location);

    const pokeSession = localStorage.getItem(poke_id);

    if (!pokeSession) {
        const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon/" + poke_id, {
            method: "GET",
            headers: headers,
        }).then((response) => response.json())
            .then((response) => {
                console.log(response);

                showPokemon(response)
                localStorage.setItem(poke_id, JSON.stringify(response))
            })
            .catch((error) => { error });
    } else {
        showPokemon(JSON.parse(pokeSession))
    }
}

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("pokemon");
const generationId = urlParams.get("gen");

if(!generationId) {
    if (!pokemonId) {
        showGenerations(8)
    } else {
        getPokemon(pokemonId)
    }
} else {
    getGeneration(generationId)
}


