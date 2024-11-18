import {useParams} from "react-router-dom";

function Home() {
  const { id } = useParams();

  return (
  <h1 className="text-center">Pokestats {id}</h1>
  )
}

export default Home
