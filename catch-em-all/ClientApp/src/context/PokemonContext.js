import { createContext, useState } from "react";

const PokemonContext = createContext([]);


export function PokemonProvider({ children }) {

  const [caughPokemon, setCaughtPokemon] = useState([]);


  /**
   *
   * @param {string} pokemonNumber
   * @return {boolean}  
   * If catching a new pokemon return true
   * Else already caught return false
   */
  const catchPokemon = (pokemonNumber) => {
    if (caughPokemon.indexOf(pokemonNumber) === -1) {
      setCaughtPokemon((preState) => [...preState, pokemonNumber])
      return true;
    } else {
      return false;
    }
  }


  return (
    <PokemonContext.Provider value={{ caughPokemon, catchPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext;