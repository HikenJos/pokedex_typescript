import React, { useState, useRef, useEffect } from 'react'
import { PokemonArray } from '../@types/pokemon'
import { Container } from '../elements/Container'
import { Center, Img, PokemonImg, PokemonName, Circle, PokemonTypeOne, PokemonTypeTwo, PokemonMale, PokemonFemale, Left, Right, PokemonSearch, IdPokemon, LedFemale, LeftIconType, RigthIconType } from '../elements/PokedexElements'
import { GetPokemons } from '../functions/GetPokemons'
import pokedex from '../resources/img/pokedex.png'
import { GetFemalePokemon } from '../functions/GetFemalePokemon'
import { GetMalePokemon } from '../functions/GetMalePokemon'
import { GetBeforePokemon } from '../functions/GetBeforePokemon'
import { GetNextPokemon } from '../functions/GetNextPokemon'
import { initialState } from '../@types/initial_state'
import { useSpeechSynthesis } from 'react-speech-kit'
import { SetImgTypesPokemon } from '../functions/SetImgTypesPokemon'
import empty from '../resources/types_pokemon/type_emty.png'

function Pokedex () {
  const [inputPokemon, setInputPokemon] = useState<string>('bulbasaur')
  const [isTherePokemonFemale, setisTherePokemonFemale] = useState<boolean>(false)
  const [imageFirstType, setImageFirstType] = useState<string>()
  const [imageSecondType, setImageSecondType] = useState<string>()
  const btnFemale = useRef<HTMLButtonElement>(null)
  const labelCircle = useRef<HTMLDivElement>(null)
  const imageTypePokemon = useRef<HTMLImageElement>(null)
  const DivFemale = useRef<HTMLDivElement>(null)
  const url = `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`
  const { speak } = useSpeechSynthesis()

  const [pokemon, setPokemon] = useState<PokemonArray>(initialState as PokemonArray)

  useEffect(() => {
    speak({ text: `${pokemon.data.name}` })
    speak({ text: `pokemon type ${pokemon.data.types[0].type.name} ${pokemon.data.types.length === 2 ? pokemon.data.types[1].type.name : ''}` })
    setImageFirstType(SetImgTypesPokemon(pokemon).Ftype)
    setImageSecondType(SetImgTypesPokemon(pokemon).Stype)
    setisTherePokemonFemale(false)
  }, [pokemon])

  function HandleInput (e:React.ChangeEvent<HTMLInputElement>) {
    setInputPokemon(e.target.value.toLowerCase())
  }

  const HandlePressedInput = async (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const res = await GetPokemons(url, btnFemale, labelCircle, DivFemale)
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
        <Circle onKeyDown={(e) => e.key === 'Enter' ? '' : console.log(e.key)} ref={labelCircle}/>
        <PokemonTypeOne>{pokemon.data.types[0].type.name.toUpperCase()}</PokemonTypeOne>
        <PokemonTypeTwo>{pokemon.data.types.length === 2 && pokemon.data.types[1].type.name?.toUpperCase()}</PokemonTypeTwo>
        <PokemonMale onClick={() => setisTherePokemonFemale(GetMalePokemon)}>M</PokemonMale>
        <PokemonFemale onClick={() => setisTherePokemonFemale(GetFemalePokemon(pokemon))} ref={btnFemale}>F</PokemonFemale>
        <Left onClick={async () => setPokemon(await GetBeforePokemon(url, pokemon, labelCircle, btnFemale, DivFemale))}>{'<'}</Left>
        <Right onClick={async () => setPokemon(await GetNextPokemon(url, pokemon, labelCircle, btnFemale, DivFemale))}>{'>'}</Right>
        <PokemonSearch placeholder='Find Pokemon' onChange={HandleInput} onKeyDown={HandlePressedInput} />
        <IdPokemon>{pokemon.data.id}</IdPokemon>
        <LedFemale ref={DivFemale}/>
        <LeftIconType src={imageFirstType} alt='type pokemon' ref={imageTypePokemon} />
        <RigthIconType src={typeof imageSecondType == 'undefined' ? empty : imageSecondType} alt=''></RigthIconType>
      </Center>

    </Container>
  )
}

export default Pokedex
