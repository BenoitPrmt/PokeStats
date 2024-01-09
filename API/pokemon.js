const STAT_TEXT = {
    hp: "PV",
    atk: "Attaque",
    def: "Défense",
    spe_atk: "Attaque Spéciale",
    spe_def: "Défense Spéciale",
    vit: "Vitesse",
};


function showPokemon(poke) {

    let pokemonSection = document.getElementById("pokemon");

    // ---- SECTION LEFT ----
    let sectionLeft = document.createElement("div");
    sectionLeft.setAttribute("id", "section-left");

    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("id", "poke-image");
    pokemonImage.setAttribute("src", poke.sprites.regular);

    sectionLeft.appendChild(pokemonImage);
    // ---- END SECTION LEFT ----


    // ---- SECTION RIGHT ----

    let sectionRight = document.createElement("div");
    sectionRight.setAttribute("id", "section-right");

    // -- SECTION HEADER --
    let sectionHeader = document.createElement("div");
    sectionHeader.setAttribute("id", "section-header");

    let pokemonTitle = document.createElement("h2");
    pokemonTitle.setAttribute("id", "poke-name");
    pokemonTitle.innerHTML = poke.name.fr;

    let pokemonTypes = document.createElement("div");
    pokemonTypes.setAttribute("id", "poke-types");

    for (let type in poke.types) {
        // show type image
        let typeEleLink = document.createElement("a");
        typeEleLink.setAttribute("href", "?type=" + poke.types[type].name);

        let typeEle = document.createElement("img");
        typeEle.classList.add("type");
        typeEle.setAttribute("src", poke.types[type].image);
        typeEle.setAttribute("title", poke.types[type].name);
        typeEle.setAttribute("alt", poke.types[type].name);

        typeEleLink.appendChild(typeEle);
        pokemonTypes.appendChild(typeEleLink);
    }

    sectionHeader.appendChild(pokemonTitle);
    sectionHeader.appendChild(pokemonTypes);
    // -- END SECTION HEADER --

    // GENERATION
    let generation = document.createElement("div");
    generation.setAttribute("id", "generation");

    let generationTitle = document.createElement("h3");
    generationTitle.innerHTML = "Génération " + poke.generation;

    generation.appendChild(generationTitle);


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

    sectionRight.appendChild(sectionHeader);
    sectionRight.appendChild(generation)
    sectionRight.appendChild(stats);
    // ---- END SECTION RIGHT ----

    pokemonSection.appendChild(sectionLeft);
    pokemonSection.appendChild(sectionRight);

}

function getPokemon(poke_id) {
    const pokeSession = localStorage.getItem(poke_id);

    if (!pokeSession) {
        const apiCall = fetch("https://tyradex.tech/api/v1/pokemon/" + poke_id, {
            method: "GET",
            headers: headers,
        }).then((response) => response.json())
            .then((response) => {
                showPokemon(response)
                localStorage.setItem(poke_id, JSON.stringify(response))
            })
            .catch((error) => { error });
    } else {
        showPokemon(JSON.parse(pokeSession))
    }
}