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
        gen.setAttribute("onclick", "getGeneration(" + i + ")")

        let title = document.createElement("h3");
        title.innerHTML = "Génération" + i

        gen.appendChild(title)
        genEle.appendChild(gen)
    }
}

function getGeneration(gen) {
    const apiCall = fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/"+gen, {
        method: "GET",
        headers: headers,
    }).then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((error) => { error });

}

showGenerations(5)