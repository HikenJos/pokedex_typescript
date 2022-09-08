import { Container } from '../elements/Container'
import { Center, Img, PokemonImg, PokemonName, Circle, PokemonTypeOne, PokemonTypeTwo, PokemonMale, PokemonFemale, Left, Right } from '../elements/PokedexElements'
import pokedex from '../resources/img/pokedex.png'
import pokemonImageDefault from '../resources/img/PokemonDefault.png'

function Pokedex () {
  return (
    <Container>
      <h1>Pokedex</h1>
      <Center>
        <Img src={pokedex} alt='Pokedex' />
        <PokemonImg src={pokemonImageDefault} alt='Pokemon'/>
        <PokemonName>Baulbasur</PokemonName>
        <Circle />
        <PokemonTypeOne>Grass</PokemonTypeOne>
        <PokemonTypeTwo>Poison</PokemonTypeTwo>
        <PokemonMale>M</PokemonMale>
        <PokemonFemale>F</PokemonFemale>
        <Left>{'<'}</Left>
        <Right>{'>'}</Right>
      </Center>

    </Container>
  )
}

export default Pokedex
