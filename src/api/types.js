export async function getTypes() {
    return fetch(`https://tyradex.app/api/v1/types`)
        .then((res) => res.json())
        .then((data) => data);
}