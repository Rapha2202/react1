function PokemonCard(props) {
    console.log(props)

    const pokemon = props.pokemon[0]

    return <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="Image d'un Pokemon" /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}

export default PokemonCard;