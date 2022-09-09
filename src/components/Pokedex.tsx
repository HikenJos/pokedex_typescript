import axios from 'axios'
import React, { useState, useRef } from 'react'
import { PokemonArray } from '../@types/pokemon'
import { Container } from '../elements/Container'
import { Center, Img, PokemonImg, PokemonName, Circle, PokemonTypeOne, PokemonTypeTwo, PokemonMale, PokemonFemale, Left, Right, PokemonSearch } from '../elements/PokedexElements'
import useGetPokemon from '../hooks/useGetPokemon'
import pokedex from '../resources/img/pokedex.png'

function Pokedex () {
  const [inputPokemon, setInputPokemon] = useState<string>('bulbasaur')
  const [malePokemon, setMalePokemon] = useState<string>('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
  const btnFemale = useRef<HTMLLabelElement>(null)
  const labelCircle = useRef<HTMLDivElement>(null)
  let url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`

  // const response:PokemonType = useGetPokemon(url)
  const [pokemon, setPokemon] = useState<PokemonArray>(
    {
      data: {
        name: 'bulbasaur',
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
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
    const res:PokemonArray = await axios.get(url)
    setMalePokemon(res.data.sprites.front_default)
    setPokemon(res)
    console.log(res)
    CircleColor()
    FemaleActive(res.data.sprites.front_female)
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
    CircleColor()
    FemaleActive(res.data.sprites.front_female)
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
    CircleColor()
    FemaleActive(res.data.sprites.front_female)
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
    if (labelCircle.current !== null) {
      labelCircle.current.style.background = 'rgb(214, 38, 35, 0.5)'
      setTimeout(() => {
        labelCircle.current ? labelCircle.current.style.background = 'transparent' : console.log('Congratulations, have a good day')
      }, 1000)
    }
  }

  function FemaleActive (female:string) {
    if (btnFemale.current !== null) {
      if (female !== null) {
        btnFemale.current.style.color = 'black'
        btnFemale.current.style.cursor = 'pointer'
      } else {
        btnFemale.current.style.color = 'white'
        btnFemale.current.style.cursor = 'default'
      }
    }
  }

  return (
    <Container>
      <h1>Pokedex</h1>
      <Center>
        <Img src={pokedex} alt='Pokedex' />
        <PokemonImg src={pokemon.data.sprites.front_default} alt='Pokemon'/>
        <PokemonName>{pokemon.data.name.toUpperCase()}</PokemonName>
        <Circle onClick={CircleColor} ref={labelCircle}/>
        <PokemonTypeOne>{pokemon.data.types[0].type.name.toUpperCase()}</PokemonTypeOne>
        <PokemonTypeTwo>{pokemon.data.types.length === 2 ? pokemon.data.types[1].type.name?.toUpperCase() : ''}</PokemonTypeTwo>
        <PokemonMale onClick={GetMalePokemon}>M</PokemonMale>
        <PokemonFemale onClick={GetFemalePokemon} ref={btnFemale}>F</PokemonFemale>
        <Left onClick={GetBeforePokemon}>{'<'}</Left>
        <Right onClick={GetNextPokemon}>{'>'}</Right>
        <PokemonSearch placeholder='Find Pokemon' onChange={HandleInput} onKeyDown={HandlePressedInput} />
      </Center>

    </Container>
  )
}

export default Pokedex
