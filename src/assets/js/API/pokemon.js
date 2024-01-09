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
    pokemonTitle.textContent = `Nom du pokémon : ${poke.name.fr}`;

    // let pokemonTypes = document.createElement("div");
    let pokemonTypes = document.getElementById("poke-types");


    for (let type in poke.types) {
        // show type image
        let typeEleLink = document.createElement("a");
        typeEleLink.setAttribute("href", "?type=" + poke.types[type].name);

        let typeEle = document.createElement("img");
        typeEle.classList.add('w-10', 'h-10', 'rounded-full');
        typeEle.setAttribute("src", poke.types[type].image);
        typeEle.setAttribute("title", poke.types[type].name);
        typeEle.setAttribute("alt", poke.types[type].name);

        typeEleLink.appendChild(typeEle);
        pokemonTypes.appendChild(typeEleLink);
    }
    // -- END SECTION HEADER --

    // GENERATION
    let generationTitle = document.getElementById("gen-title");
    generationTitle.textContent = `Génération : ${poke.generation}`

        // id
        let pokemonId = document.getElementById("poke-id");
        pokemonId.textContent = `N° : ${poke.pokedexId}`
    

    // STATS
    let statsList = document.getElementById("stats-list");

    for (let stat in poke.stats) {
        let statEle = document.createElement("li");
        statEle.setAttribute("id", "stat-" + stat)
        statEle.innerHTML = STAT_TEXT[stat] + " : " + poke.stats[stat];
        statsList.appendChild(statEle);
    }
    // ---- END SECTION RIGHT ----

    // OTHER DATA
    let WeightHeight = document.getElementById('poke-weight');
    WeightHeight.textContent = `Hauteur : ${poke.height} || Poids : ${poke.weight}`;

    // CAROUSEL SHINNY
    let imgShiny = document.getElementById('poke-image-2');
    imgShiny.setAttribute('src', poke.sprites.shiny);
    
    // EVOLUTIONS
    // let evolutionsSection = document.createElement("div");

    // for (let evol in poke.evolution) {
    //     if (poke.evolution[evol] != null && evol !== "mega") {
    //         for (let evo in poke.evolution[evol]) {
    //             getPokemon(poke.evolution[evol][evo].pokedexId, true).then(pokeData => {
    //                 let evolImg = document.createElement("img")
    //                 evolImg.setAttribute("src", `${pokeData.sprites.regular}`)
    
    //                 evolutionsSection.appendChild(evolImg)
    //             });
    //         }
    //     }
    // }

    document.getElementById("pokemon").appendChild(pEle)
    document.getElementById("pokemon").appendChild(evolutionsSection)

}

async function getPokemon(poke_id) {
    try {
        const pokeSession = localStorage.getItem(poke_id);

        const response = await fetch("https://tyradex.tech/api/v1/pokemon/" + poke_id, {
            method: "GET",
            headers: headers,
        });
        const data = await response.json();
        if (!pokeSession) {
            localStorage.setItem(poke_id, JSON.stringify(data))
        }
        return data;
    } catch (error) {
        error;
    }
}