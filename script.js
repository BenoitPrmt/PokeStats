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
        let gen = document.createElement("div");
        gen.setAttribute("id", i)
        gen.classList.add("card")
        gen.setAttribute("onclick", "getGeneration(" + i + ")")

        let title = document.createElement("h3");
        title.innerHTML = "Génération " + i

        gen.appendChild(title)
        genEle.appendChild(gen)
    }
}

function getGeneration(gen) {

    let pokemonsSection = document.getElementById("pokemons")
    pokemonsSection.innerHTML = ""

    let loadingEle = document.createElement("h4");
    loadingEle.innerHTML = "Chargement...";
    loadingEle.classList.add("loading-text");

    pokemonsSection.appendChild(loadingEle);

    const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + gen, {
        method: "GET",
        headers: headers,
    }).then((response) => response.json())
        .then((response) => {
            console.log(response);
            pokemonsSection.innerHTML = ""
            response.forEach(poke => {
                let pokeEle = document.createElement("div");
                pokeEle.classList.add("card")
                pokeEle.setAttribute("onclick", "getPokemon(" + poke.pokedexId + ")")
                // pokeEle.setAttribute("href", window.location.href + "pokemon/" + poke.pokedexId)

                let pokeName = document.createElement("h3");
                pokeName.innerHTML = poke.name

                let pokeImage = document.createElement("img");
                pokeImage.setAttribute("src", poke.image)

                pokeEle.appendChild(pokeName)
                pokeEle.appendChild(pokeImage)
                pokemonsSection.appendChild(pokeEle)
            });
        })
        .catch((error) => { error });
}

function getPokemon(poke_id) {

    console.log(window.location);

    const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon/" + poke_id, {
        method: "GET",
        headers: headers,
    }).then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((error) => { error });
}

showGenerations(8)