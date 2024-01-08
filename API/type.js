// get all pokemons of the same type

function fetchTypes() {
    fetch("https://pokebuildapi.fr/api/v1/types")
        .then(response => response.json())
        .then(data => {
            let types = [];
            for (let type of data) {
                types.push({
                    name: type.name,
                    image: type.image,
                });
            }
            localStorage.setItem("types", JSON.stringify(types));
            showTypes();
        });
}

function showTypes() {
    let typesEle = document.getElementById("types");

    let typesSession = localStorage.getItem("types");

    if (typesSession) {
        typesSession = JSON.parse(typesSession);

        for (let type of typesSession) {

            console.log(type);

            let typeEle = document.createElement("a");
            typeEle.setAttribute("href", "?type=" + type.name);

            let typeImage = document.createElement("img");
            typeImage.classList.add("type-little");
            typeImage.setAttribute("alt", type.name);
            typeImage.setAttribute("title", type.name);
            typeImage.setAttribute("src", type.image);

            // let typeName = document.createElement("h3");
            // typeName.innerHTML = type.name;

            typeEle.appendChild(typeImage);
            // typeEle.appendChild(typeName);

            typesEle.appendChild(typeEle);
        }
    } else {
        fetchTypes();
    }
}

// fetch("https://pokebuildapi.fr/api/v1/types", {
//         headers: headers
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);

//             for (let type of data) {
//                 let typeEle = document.createElement("a");
//                 typeEle.setAttribute("href", "?type=" + type.name);

//                 let typeImage = document.createElement("img");
//                 typeImage.classList.add("type-little");
//                 typeImage.setAttribute("alt", type.name);
//                 typeImage.setAttribute("title", type.name);
//                 typeImage.setAttribute("src", type.image);

//                 // let typeName = document.createElement("h3");
//                 // typeName.innerHTML = type.name;

//                 typeEle.appendChild(typeImage);
//                 // typeEle.appendChild(typeName);

//                 typesEle.appendChild(typeEle);
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//         })