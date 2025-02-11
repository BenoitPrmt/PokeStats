const Types = ({pokemon}) => {
    return (
        pokemon.types.map((type) => (
            <a href={"/type/" + type.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")} key={type.id}>
                <img key={type.name} src={type.image} alt={type.name} className="size-10 rounded-full
                md:size-14"/>
            </a>
        ))
    )
}

export default Types