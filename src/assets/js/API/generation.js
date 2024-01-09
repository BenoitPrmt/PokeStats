const headers = {
    Accept: "application/json",
};

function showGenerations(max) {
    let genEle = document.getElementById("generations");

    for (let i = 1; i < max + 1; i++) {
        genEle.innerHTML += `
        <a href="?gen=${i}" id="${i}" class="w-32 h-32 pokeball text-white text-xl p-2 rounded-full flex justify-center items-center">${i}</a>
        `
    }
}

function showPokemons(pokemonsList, gen, add_to_session) {
    let pokemonsSection = document.getElementById("pokemons")
    let pokemons = [];

    pokemonsSection.innerHTML = ""

    for (poke of pokemonsList) {
        let pokeEle = document.createElement("a");
        pokeEle.setAttribute("href", "?pokemon=" + poke.pokedexId)

        pokeEle.innerHTML = `
        <div class="mx-auto px-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img class="w-full rounded-lg object-cover object-center" src="${poke.sprites.regular}" alt="product" />
            <div>
              <div class="my-6 flex items-center justify-between px-4">
                <p class="font-bold text-gray-500">${poke.name.fr}</p>
              </div>
            </div>
          </div>
        </div>
        `

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

async function getGeneration(gen) {
    try {
        const response = await fetch("https://tyradex.tech/api/v1/gen/" + gen, {
            method: "GET",
            headers: headers,
        });
        const response_1 = await response.json();
        return response_1;
    } catch (error) {
        error;
    }

}