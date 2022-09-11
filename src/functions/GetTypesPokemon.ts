import { PokemonArray } from '../@types/pokemon'

export function GetTypePokemon (pokemon:PokemonArray) {
  const firstType:string = pokemon.data.types[0].type.name
  let secondType:string | null = null
  if (pokemon.data.types.length === 2) {
    secondType = pokemon.data.types[1].type.name
  }

  const types = {
    firstType,
    secondType
  }

  return types
}
