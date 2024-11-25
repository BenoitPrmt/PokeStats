const Name = ({pokemonNames}) => {
  return (
    <h1
      className="text-6xl font-semibold text-gray-900 tracking-tight duration-1000"
      onMouseEnter={(e) => (e.currentTarget.innerHTML = pokemonNames.jp)}
      onMouseLeave={(e) => (e.currentTarget.innerHTML = pokemonNames.fr)}
    >
      {pokemonNames.fr}
    </h1>
  )

}

export default Name;