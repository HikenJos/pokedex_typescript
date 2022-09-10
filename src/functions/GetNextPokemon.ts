import axios from 'axios'
import React from 'react'
import { PokemonArray } from '../@types/pokemon'
import { CircleLed } from './CircleLed'
import { FemaleActive } from './FemaleActive'

export async function GetNextPokemon (url:string, pokemon:PokemonArray, refDiv:React.RefObject<HTMLDivElement>, refButton:React.RefObject<HTMLButtonElement>) {
  const id:number = pokemon.data.id
  if (id === 905) {
    url = 'https://pokeapi.co/api/v2/pokemon/1'
  } else {
    url = `https://pokeapi.co/api/v2/pokemon/${id + 1}`
  }
  const res:PokemonArray = await axios.get(url)
  CircleLed(refDiv)
  FemaleActive(res.data.sprites.front_female, refButton)
  return res
}
