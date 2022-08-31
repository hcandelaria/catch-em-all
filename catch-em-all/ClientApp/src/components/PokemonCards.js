import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonContext from "../context/PokemonContext";
import './PokemonCards.css';

const findEncounters = () => {
  let encounter = [];
  for (let i = 0; i < 9; i++) {
    let temp = Math.floor((Math.random() * 905) + 1).toString()
    if (temp.length < 3) {
      temp = temp.toString().padStart(3, "0");
    }

    encounter.push(temp)
  }
  return encounter;
}

export default function PokemonCards() {
  const [encounter, updateEncounter] = useState([]);
  const { catchPokemon } = useContext(PokemonContext);
  const navigate = useNavigate()

  /**
   *
   *
   * @param {*} pokemonNumber
   * Handle click
   * If pokememon click is a new pokemon get new encounters
   * Else gameover
   */
  const handleClick = (pokemonNumber) => {
    const caught = catchPokemon(pokemonNumber);
    if (caught) {
      updateEncounter(findEncounters());
    } else {
      navigate('../gameover');
    }
  }

  useEffect(() => {
    updateEncounter(findEncounters())
  }, [])

  return (
    <div className='flex justify-center grid gap-4 md:grid-cols-3 ms:grid-cols-1'>
      {
        encounter.map((e, i) => {
          return (
            <div className='rounded-lg shadow-lg bg-dark max-w-sm mt-2 mb-2'
              key={i}>
              <img
                className='rounded-t-lg'
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e}.png`}
                data={e}
                onClick={(event) => { handleClick(event.target.getAttribute('data')) }}
                alt={`pokemon-number${e}`}
              />
              {/* <img
                className='pokeball hide'
                alt="pokeball"
                src='https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG'
              /> */}
            </div>
          )
        })

      }

    </div>
  );
};
