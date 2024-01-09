const STAT_TEXT = {
    hp: "PV",
    atk: "Attaque",
    def: "Défense",
    spe_atk: "Attaque Spéciale",
    spe_def: "Défense Spéciale",
    vit: "Vitesse",
};


function showPokemon(poke) {

    // ---- SECTION LEFT ----
    let pokemonImage = document.getElementById("poke-image");
    pokemonImage.setAttribute("src", poke.sprites.regular);
    // ---- END SECTION LEFT ----


    // ---- SECTION RIGHT ----
    let pokemonTitle = document.getElementById("poke-name");
    pokemonTitle.innerHTML = poke.name.fr;

    // let pokemonTypes = document.createElement("div");
    let pokemonTypes= document.getElementById("poke-types");

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
    // -- END SECTION HEADER --

    // GENERATION
    let generationTitle = document.getElementById("gen-title");
    generationTitle.innerHTML = "Génération " + poke.generation;


    // STATS
    let statsList = document.getElementById("stats-list");

    for (let stat in poke.stats) {
        let statEle = document.createElement("li");
        statEle.setAttribute("id", "stat-"+stat)
        statEle.innerHTML = STAT_TEXT[stat] + " : " + poke.stats[stat];
        statsList.appendChild(statEle);
    }
    // ---- END SECTION RIGHT ----

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