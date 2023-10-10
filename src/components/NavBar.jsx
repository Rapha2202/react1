function NavBar({ pokemonIndex, pokemonList, Add, Remove }) {



    return <figure>
        {pokemonIndex > 0 ? <button onClick={Remove}>Précédent</button> : <p></p>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={Add}>Suivant</button> : <p></p>}
    </figure>
}

export default NavBar;