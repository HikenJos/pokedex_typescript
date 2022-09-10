import axios from 'axios'
import React from 'react'
import { PokemonArray } from '../@types/pokemon'
import { FemaleActive } from './FemaleActive'
import { CircleLed } from './CircleLed'

export async function GetPokemons (url:string, refLabel:React.RefObject<HTMLButtonElement>, refDiv:React.RefObject<HTMLDivElement>) {
  const res:PokemonArray = await axios.get(url)

  CircleLed(refDiv)
  FemaleActive(res.data.sprites.front_female, refLabel)

  return res
}
