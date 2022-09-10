import { PokemonArray } from '../@types/pokemon'

export function GetFemalePokemon (pokemon:PokemonArray) {
  const imgFemalePokemon:string = pokemon.data.sprites.front_female
  let isThereFemale = false
  if (imgFemalePokemon !== null) {
    isThereFemale = true
  }
  // console.log(pokemon)
  return isThereFemale
}
