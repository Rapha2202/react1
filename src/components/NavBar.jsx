function NavBar({ pokemonIndex, pokemonList, select }) {



    return <figure>
        {pokemonList.map((pokemon) => (
            <button key={pokemon.name} onClick={() => select(pokemon)}>{pokemon.name}</button>
        ))}
    </figure>
}

export default NavBar;