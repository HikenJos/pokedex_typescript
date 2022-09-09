import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokemonType } from '../@types/pokemon'

function useGetPokemon (url:string) {
  const [pokemons, setPokemons] = useState<PokemonType>({} as PokemonType)

  useEffect(() => {
    async function getPokemonss () {
      try {
        const res = await axios.get(url)
        setPokemons(res.data)
      } catch (err) {

      }
    }
    getPokemonss()
  }, [])
  return pokemons
}

export default useGetPokemon
