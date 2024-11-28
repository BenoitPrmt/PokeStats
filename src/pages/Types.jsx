import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import Title from "../components/layout/title.jsx";
import {getTypes} from "../api/types.js";

function Type() {
  const {type} = useParams();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTypes(type);
        console.log("DATA", data);
        setTypes(data);
      } catch (error) {
        console.log(error);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, [type]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="py-20 container">
      <Title content={"Tous les types"} size={"small"} />

      <div className={"grid grid-cols-1 sm:grid-cols-2 px-8 lg:px-0 lg:grid-cols-4 gap-x-24 gap-y-48 py-52"}>
        {types.length > 0 ? (
            types.map((type) => (
                <a href={"/type/" + type.name.fr.toLowerCase()} key={type.id}>
                  <img src={type.sprites} alt={type.name.fr} className={"size-20 rounded-full"}/>
                </a>
            ))
        ) : (
            <h2>Aucun type trouvé.</h2>
        )}
      </div>
    </main>
  );
}

export default Type;
