import axios from 'axios'
import React, { useState } from 'react'
import { PokemonArray, PokemonType } from '../@types/pokemon'
import { Container } from '../elements/Container'
import { Center, Img, PokemonImg, PokemonName, Circle, PokemonTypeOne, PokemonTypeTwo, PokemonMale, PokemonFemale, Left, Right, PokemonSearch } from '../elements/PokedexElements'
import useGetPokemon from '../hooks/useGetPokemon'
import pokedex from '../resources/img/pokedex.png'

function Pokedex () {
  const [inputPokemon, setInputPokemon] = useState<string>('bulbasaur')
  const [malePokemon, setMalePokemon] = useState<string>('')
  let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`

  // const response:PokemonType = useGetPokemon(url)
  const [pokemon, setPokemon] = useState<PokemonArray>(
    {
      data: {
        name: 'bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: ''
        },
        types: [
          {
            slot: 1,
            type: { name: 'grass' }
          },
          {
            slot: 2,
            type: { name: 'poison' || null }
          }
        ],
        id: 1
      }
    } as PokemonArray)

  function HandleInput (e:React.ChangeEvent<HTMLInputElement>) {
    setInputPokemon(e.target.value.toLowerCase())
  }

  async function GetPokemons () {
    console.log(url)
    const res:PokemonArray = await axios.get(url)
    setMalePokemon(res.data.sprites.front_default)
    setPokemon(res)
    console.log(res)
  }

  async function GetNextPokemon () {
    const id:number = pokemon.data.id
    if (id === 905) {
      url = 'https://pokeapi.co/api/v2/pokemon/1'
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${id + 1}`
    }
    const res:PokemonArray = await axios.get(url)
    setMalePokemon(res.data.sprites.front_default)
    setPokemon(res)
  }

  async function GetBeforePokemon () {
    const id:number = pokemon.data.id
    if (id === 1) {
      url = 'https://pokeapi.co/api/v2/pokemon/905'
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${id - 1}`
    }
    const res:PokemonArray = await axios.get(url)
    setMalePokemon(res.data.sprites.front_default)
    setPokemon(res)
  }

  function GetFemalePokemon () {
    const imgFemalePokemon = pokemon.data.sprites.front_female
    const payload = { ...pokemon }
    if (imgFemalePokemon !== null) {
      payload.data.sprites.front_default = imgFemalePokemon
    }
    setPokemon(payload)
  }

  function GetMalePokemon () {
    const payload = { ...pokemon }
    payload.data.sprites.front_default = malePokemon

    setPokemon(payload)
  }

  function HandlePressedInput (e:React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      GetPokemons()
    }
  }

  function CircleColor () {

  }

  return (
    <Container>
      <h1>Pokedex</h1>
      <Center>
        <Img src={pokedex} alt='Pokedex' />
        <PokemonImg src={pokemon.data.sprites.front_default} alt='Pokemon'/>
        <PokemonName>{pokemon.data.name.toUpperCase()}</PokemonName>
        <Circle />
        <PokemonTypeOne>{pokemon.data.types[0].type.name.toUpperCase()}</PokemonTypeOne>
        <PokemonTypeTwo>{pokemon.data.types.length === 2 ? pokemon.data.types[1].type.name?.toUpperCase() : ''}</PokemonTypeTwo>
        <PokemonMale onClick={GetMalePokemon}>M</PokemonMale>
        <PokemonFemale onClick={GetFemalePokemon}>F</PokemonFemale>
        <Left onClick={GetBeforePokemon}>{'<  '}</Left>
        <Right onClick={GetNextPokemon}>{'  >'}</Right>
        <PokemonSearch name='inputPokemon' placeholder='Find Pokemon' onChange={HandleInput} onKeyDown={HandlePressedInput} />
      </Center>

    </Container>
  )
}

export default Pokedex
