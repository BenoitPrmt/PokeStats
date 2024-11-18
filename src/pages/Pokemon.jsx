import {useParams} from "react-router-dom";

function Pokemon() {
    const { id } = useParams();

    return (
        <h1 className="text-center">Pokémon n°{id}</h1>
    )
}

export default Pokemon
