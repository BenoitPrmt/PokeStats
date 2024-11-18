const headers = {
    Accept: "application/json",
};

function showGenerations(max) {
    let genEle = document.getElementById("generations");

    for (let i = 1; i < max + 1; i++) {
        genEle.innerHTML += `
        <div class ='relative pokeball'>
            <img src="./src/assets/images/pokeball.png" alt="pokeball genration de pokemon" class='w-20 h-20 md:w-32 md:h-32'>
            <a href="?gen=${i}" id="${i}" class="lien">${i}</a>
        </div>
        `
    }
}

function showPokemons(pokemonsList, gen, add_to_session) {
    let pokemonsSection = document.getElementById("pokemons")
    let pokemons = [];

    pokemonsSection.innerHTML = ""

    for (poke of pokemonsList) {
        let pokeEle = document.createElement("a");
        pokeEle.setAttribute("href", "?pokemon=" + poke.pokedex_id);
        pokeEle.setAttribute("title", `${poke.name.fr}`)

        pokeEle.innerHTML = `
        <div class="mx-auto px-5">
          <div class="cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img class="w-full rounded-lg object-cover object-center" src="${poke.sprites.regular}" alt="pokemon" />
            <div>
              <div class="my-6 flex items-center justify-between px-4">
                <p class="font-bold text-center text-gray-500">${poke.name.fr}</p>
              </div>
            </div>
          </div>
        </div>
        `

        if (add_to_session) {
            pokemons.push({
                pokedex_id: poke.pokedex_id,
                name: {fr: poke.name.fr},
                sprites: {regular: poke.sprites.regular, shiny: poke.sprites.shiny}
            })
        }
        pokemonsSection.appendChild(pokeEle)
    }

    if (add_to_session) localStorage.setItem("gen" + gen, JSON.stringify(pokemons));
}

async function getGeneration(gen) {
    try {
        const response = await fetch("https://tyradex.app/api/v1/gen/" + gen, {
            method: "GET",
            headers: headers,
        });
        const response_1 = await response.json();
        return response_1;
    } catch (error) {
        error;
    }

}
