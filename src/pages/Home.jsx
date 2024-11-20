import {useParams} from "react-router-dom";
import Pokemon from "./Pokemon.jsx";

function Home() {
  const { id } = useParams();

  return (
    <main className="flex justify-between items-center lg:h-[calc(100dvh-136px)]">
      <section className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-7xl tracking-wider font-semibold">Pokestats</h1>
          <h2 className="text-4xl my-5">Pokédex intégrant les 9 générations de Pokémon</h2>
          <h3 className="text-3xl">By Benoit Parmentier & Kilian Olry</h3>
        </div>

        <img className="img size-96 rounded-full shadow-md"/>
      </section>

    </main>

  )
}

export default Home
