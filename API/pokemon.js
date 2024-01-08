const STAT_TEXT = {
    HP: "PV",
    attack: "Attaque",
    defense: "Défense",
    special_attack: "Attaque Spéciale",
    special_defense: "Défense Spéciale",
    speed: "Vitesse",
};

// const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon", {
//     method: "GET",
//     headers: headers,
// }).then((response) => response.json())
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => { error });



function showPokemon(poke) {

    let pokemonSection = document.getElementById("pokemon");

    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("id", "poke-image");
    pokemonImage.setAttribute("src", poke.image);

    let pokemonTitle = document.createElement("h2");
    pokemonTitle.setAttribute("id", "poke-name");
    pokemonTitle.innerHTML = poke.name;

    let pokemonTypes = document.createElement("div");
    pokemonTypes.setAttribute("id", "poke-types");
    
    for (let type in poke.apiTypes) {
        // show type image
        let typeEleLink = document.createElement("a");
        typeEleLink.setAttribute("href", "?type=" + poke.apiTypes[type].name);

        let typeEle = document.createElement("img");
        typeEle.classList.add("type");
        typeEle.setAttribute("src", poke.apiTypes[type].image);
        typeEle.setAttribute("title", poke.apiTypes[type].name);
        typeEle.setAttribute("alt", poke.apiTypes[type].name);

        typeEleLink.appendChild(typeEle);
        pokemonTypes.appendChild(typeEleLink);
    }

    // STATS
    let stats = document.createElement("div");
    stats.setAttribute("id", "stats");

    let statsTitle = document.createElement("h3");
    statsTitle.innerHTML = "Stats";

    let statsList = document.createElement("ul");

    for (let stat in poke.stats) {
        let statEle = document.createElement("li");
        statEle.innerHTML = STAT_TEXT[stat] + " : " + poke.stats[stat];
        statsList.appendChild(statEle);
    }

    stats.appendChild(statsTitle);
    stats.appendChild(statsList);

    pokemonSection.appendChild(pokemonImage)
    pokemonSection.appendChild(pokemonTitle)
    pokemonSection.appendChild(pokemonTypes)
    pokemonSection.appendChild(stats)

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