import TitleTertiary from "./title-tertiary.jsx";

const Carousel = ({pokemon}) => {
    let evolution = [];

    if (pokemon.evolution) {
        if (pokemon.evolution.pre?.length > 0) {
            evolution = evolution.concat(pokemon.evolution.pre.flat());
        }

        if (pokemon.evolution.next?.length > 0) {
            evolution = evolution.concat(pokemon.evolution.next.flat());
        }
    }

    return (
        <div className="order-2 shadow-sm rounded-lg">
          <TitleTertiary content={"évolutions"} tagColor={"bg-blue-500"}/>
            <div className="carousel w-full h-52">
                {evolution.length > 0 ? (
                    evolution.map((item, index) => (
                        <a key={index} id={`item${index + 1}`} className="carousel-item w-full flex justify-center"
                           href={`/pokemon/${item.pokedex_id}`}>
                            <img
                                src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${item.pokedex_id}/regular.png`}
                                alt={`Evolution ${item.pokedex_id}`}
                            />
                        </a>
                    ))
                ) : (
                    ''
                )}
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                {evolution.map((_, index) => (
                    <a key={index} href={`#item${index + 1}`} className="bg-red-500 btn btn-xs text-white hover:bg-gradientR">
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Carousel;