import contributorsModel from "../models/contributors.js";
import {useParams} from "react-router-dom";
import Pokemon from "./Pokemon.jsx";

function Home() {
  const {id} = useParams();

  return (
    <main className="container flex justify-between items-center min-h-[calc(100dvh-144px)]">
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        <div>
          <h1
            className="hidden text-center text-5xl font-semibold tracking-wide
                       text-transparent bg-gradient-to-r from-gradientB to-gradientR bg-clip-text
                       sm:text-7xl md:text-start lg:block">Pokestats
          </h1>
          <h2 className="text-center md:text-start text-2xl md:text-3xl my-5 tracking-wide">Pokédex intégrant les 9
            générations de Pokémon</h2>
          <h3 className="text-xl md:text-3xl text-center md:text-start">
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

        <div>
          <h1
            className="block lg:hidden pb-14 text-center md:text-start bg-gradient-to-r from-gradientB via-gradientR bg-clip-text text-5xl font-semibold
          text-transparent sm:text-7xl tracking-wide">Pokestats
          </h1>
          <img
            className="img size-64 sm:size-72 md:size-96 rounded-full shadow-md"
            alt=""
          />
        </div>

      </section>

    </main>

  )
}

export default Home
