import PokemonCard from './components/PokemonCard'
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

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClickAdd = () => {
    setpokemonIndex(pokemonIndex + 1)
  }

  const handleClickRemove = () => {
    setpokemonIndex(pokemonIndex - 1)
  }

  return (<div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    {pokemonIndex > 0 ? <button onClick={handleClickRemove}>Précédent</button> : <p></p>}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickAdd}>Suivant</button> : <p></p>}
  </div>)
}

export default App
