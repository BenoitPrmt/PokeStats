const Carousel = ({pokemon}) => {
    let evolution = [];

  if (pokemon.evolution.next.length > 0) {
    evolution = pokemon.evolution.next.flat();

  }

  return (
    <div>
      <div className="carousel w-full h-52">
        {evolution.length > 0 ? (
          evolution.map((item, index) => (
            <div key={index} id={`item${index + 1}`} className="carousel-item w-full flex justify-center">
              <img
                src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${item.pokedex_id}/regular.png`}
                alt={`Evolution ${item.pokedex_id}`}
              />
            </div>
          ))
        ) : (
          ''
        )}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {evolution.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Carousel;