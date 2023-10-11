import PokemonCard from './components/PokemonCard'
import Navbar from './components/NavBar'
import { useState, useEffect } from "react";


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

  return (<div>
    {useEffect(() => {
      alert("hello pokemon trainer :)")
    }, [])}
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <Navbar pokemonList={pokemonList} setpokemonIndex={setpokemonIndex} />
  </div>)
}

export default App
