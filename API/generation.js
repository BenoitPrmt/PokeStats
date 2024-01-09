const headers = {
    Accept: "application/json",
};

function showGenerations(max) {
    let genEle = document.getElementById("generations");

    for (let i = 1; i < max + 1; i++) {
        let gen = document.createElement("a");
        gen.setAttribute("id", i)
        gen.classList.add("card")
        gen.setAttribute("href", "?gen=" + i)

        let title = document.createElement("h3");
        title.innerHTML = i + "G"

        gen.appendChild(title)
        genEle.appendChild(gen)
    }
}

function showPokemons(pokemonsList, gen, add_to_session) {
    let pokemonsSection = document.getElementById("pokemons")
    let pokemons = [];

    for (poke of pokemonsList) {
        let pokeEle = document.createElement("a");
        pokeEle.classList.add("card")
        pokeEle.setAttribute("href", "?pokemon=" + poke.pokedexId)

        let pokeName = document.createElement("h3");
        pokeName.innerHTML = poke.name.fr

        let pokeImage = document.createElement("img");
        pokeImage.setAttribute("src", poke.sprites.regular)

        pokeEle.appendChild(pokeName)
        pokeEle.appendChild(pokeImage)

        if (add_to_session) {
            pokemons.push({
                pokedexId: poke.pokedexId,
                name: { fr: poke.name.fr },
                sprites: { regular: poke.sprites.regular, shiny: poke.sprites.shiny }
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
        const apiCall = fetch("https://tyradex.tech/api/v1/gen/" + gen, {
            method: "GET",
            headers: headers,
        }).then((response) => response.json())
            .then((response) => {
                pokemonsSection.innerHTML = ""

                showPokemons(response, gen, true);
            })
            .catch((error) => { error });
    } else {
        pokemonsSection.innerHTML = ""
        showPokemons(JSON.parse(generationSession), gen, false);

    }
}