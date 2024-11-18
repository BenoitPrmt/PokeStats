import {useParams} from "react-router-dom";

function Pokemon() {
    const { id } = useParams();

    return (
        <h1 className="text-center">Pokemon {id}</h1>
    )
}

export default Pokemon
