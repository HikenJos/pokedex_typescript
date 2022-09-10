import React, { useState, useRef } from 'react'
import { PokemonArray } from '../@types/pokemon'
import { Container } from '../elements/Container'
import { Center, Img, PokemonImg, PokemonName, Circle, PokemonTypeOne, PokemonTypeTwo, PokemonMale, PokemonFemale, Left, Right, PokemonSearch } from '../elements/PokedexElements'
import { GetPokemons } from '../functions/GetPokemons'
import pokedex from '../resources/img/pokedex.png'
import { GetFemalePokemon } from '../functions/GetFemalePokemon'
import { GetMalePokemon } from '../functions/GetMalePokemon'
import { GetBeforePokemon } from '../functions/GetBeforePokemon'
import { GetNextPokemon } from '../functions/GetNextPokemon'
import { initialState } from '../@types/initial_state'

function Pokedex () {
  const [inputPokemon, setInputPokemon] = useState<string>('bulbasaur')
  const btnFemale = useRef<HTMLLabelElement>(null)
  const [isTherePokemonFemale, setisTherePokemonFemale] = useState<boolean>(false)
  const labelCircle = useRef<HTMLDivElement>(null)
  const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`

  const [pokemon, setPokemon] = useState<PokemonArray>(initialState as PokemonArray)

  function HandleInput (e:React.ChangeEvent<HTMLInputElement>) {
    setInputPokemon(e.target.value.toLowerCase())
  }

  async function HandlePressedInput (e:React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const res = await GetPokemons(url, btnFemale, labelCircle)
      setPokemon(res)
    }
  }

  return (
    <Container>
      <h1>Pokedex</h1>
      <Center>
        <Img src={pokedex} alt='Pokedex' />
        <PokemonImg src={isTherePokemonFemale ? (pokemon.data.sprites.front_female) : pokemon.data.sprites.front_default } alt='Pokemon'/>
        <PokemonName>{pokemon.data.name.toUpperCase()}</PokemonName>
        <Circle ref={labelCircle}/>
        <PokemonTypeOne>{pokemon.data.types[0].type.name.toUpperCase()}</PokemonTypeOne>
        <PokemonTypeTwo>{pokemon.data.types.length === 2 ? pokemon.data.types[1].type.name?.toUpperCase() : ''}</PokemonTypeTwo>
        <PokemonMale onClick={() => setisTherePokemonFemale(GetMalePokemon)}>M</PokemonMale>
        <PokemonFemale onClick={() => setisTherePokemonFemale(GetFemalePokemon(pokemon))} ref={btnFemale}>F</PokemonFemale>
        <Left onClick={async () => setPokemon(await GetBeforePokemon(url, pokemon, labelCircle, btnFemale))}>{'<'}</Left>
        <Right onClick={async () => setPokemon(await GetNextPokemon(url, pokemon, labelCircle, btnFemale))}>{'>'}</Right>
        <PokemonSearch placeholder='Find Pokemon' onChange={HandleInput} onKeyDown={HandlePressedInput} />
      </Center>

    </Container>
  )
}

export default Pokedex
