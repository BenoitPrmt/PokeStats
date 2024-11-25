const Types = ({pokemon}) => {
  return (
    pokemon.types.map((type) => (
      <img key={type.name} src={type.image} alt={type.name} className="size-10 rounded-full
                md:size-14"/>
    ))
  )
}

export default Types