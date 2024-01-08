

function apiCall(endpoint) {
    const headers = {
        Accept: "application/json",
    };

    console.log("https://pokebuildapi.fr/api/v1/" + endpoint);
    

    const apiCall = fetch("https://pokebuildapi.fr/api/v1/" + endpoint, {
        method: "GET",
        headers: headers,
    }).then((response) => response.json())
        .then((response) => {
            return response

        })
        .catch((error) => { return error });
}

console.log(apiCall('pokemon'));