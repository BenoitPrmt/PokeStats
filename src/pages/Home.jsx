import contributorsModel from "../models.js";
import {useParams} from "react-router-dom";
import Pokemon from "./Pokemon.jsx";

function Home() {
  const {id} = useParams();

  return (
    <main className="flex justify-between items-center lg:h-[calc(100dvh-136px)]">
      <section className="flex justify-between items-center w-full">
        <div>
          <h1
            className="bg-gradient-to-r from-gradientB via-gradientR bg-clip-text text-3xl font-semibold
          text-transparent sm:text-7xl">Pokestats
          </h1>
          <h2 className="text-4xl my-5">Pokédex intégrant les 9 générations de Pokémon</h2>
          <h3 className="text-3xl">
            By {contributorsModel.map((item, index) => (
            <span
              key={index}
              className="capitalize font-semibold"
            >{item.name}
            </span>
          )).reduce((prev, curr, idx, arr) => {
            if (idx === arr.length - 1) {
              return [prev, ' & ', curr];
            }
            return [prev, curr];
          }, [])}
          </h3>
        </div>

        <img className="img size-96 rounded-full shadow-md"/>
      </section>

    </main>

  )
}

export default Home
