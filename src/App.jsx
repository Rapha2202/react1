import PokemonCard from './components/PokemonCard'
import Navbar from './components/NavBar'
import { useState } from "react";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ]

  const [pokemonIndex, setpokemonIndex] = useState(1);

  const selectPokemon = (pokemon) => {
    setpokemonIndex(pokemonList.map(item => item.name).indexOf(pokemon.name))
  }


  return (<div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <Navbar pokemonIndex={pokemonIndex} pokemonList={pokemonList} select={selectPokemon} />
  </div>)
}

export default App
