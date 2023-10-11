function NavBar({ setpokemonIndex, pokemonList }) {

    const selectPokemon = (pokemon) => {
        setpokemonIndex(pokemonList.map(item => item.name).indexOf(pokemon.name))
        pokemon.name == "pikachu" ? alert("pika pikachu !!!") : null
    }

    return <figure>
        {pokemonList.map((pokemon) => (
            <button key={pokemon.name} onClick={() => selectPokemon(pokemon)}>{pokemon.name}</button>
        ))}
    </figure>
}

export default NavBar;