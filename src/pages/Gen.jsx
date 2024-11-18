import {useParams} from "react-router-dom";

function Gen() {
    const { id } = useParams();

    return (
        <h1 className="text-center">Génération n°{id}</h1>
    )
}

export default Gen
