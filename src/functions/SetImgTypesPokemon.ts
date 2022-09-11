import { PokemonArray, pokemonImgType } from '../@types/pokemon'

import bug from '../resources/types_pokemon/type_bug.png'
import dark from '../resources/types_pokemon/type_dark.png'
import dragon from '../resources/types_pokemon/type_dragon.png'
import electric from '../resources/types_pokemon/type_electric.png'
import fairy from '../resources/types_pokemon/type_fairy.png'
import fighting from '../resources/types_pokemon/type_fighting.png'
import fire from '../resources/types_pokemon/type_fire.png'
import flying from '../resources/types_pokemon/type_flying.png'
import ghost from '../resources/types_pokemon/type_ghost.png'
import grass from '../resources/types_pokemon/type_grass.png'
import ground from '../resources/types_pokemon/type_ground.png'
import ice from '../resources/types_pokemon/type_ice.png'
import normal from '../resources/types_pokemon/type_normal.png'
import psychic from '../resources/types_pokemon/type_physic.png'
import poison from '../resources/types_pokemon/type_poison.png'
import rock from '../resources/types_pokemon/type_rock.png'
import steel from '../resources/types_pokemon/type_steel.png'
import water from '../resources/types_pokemon/type_water.png'
import empty from '../resources/types_pokemon/type_emty.png'

export function SetImgTypesPokemon (pokemon:PokemonArray) {
  const typeOne:string = pokemon.data.types[0].type.name
  let typeTwo:string | null = 'vacio'

  if (pokemon.data.types.length === 2) {
    typeTwo = pokemon.data.types[1].type.name
  }

  const typesPokemon:pokemonImgType = {
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    psychic,
    poison,
    rock,
    steel,
    water,
    empty
  }
  const Ftype = typesPokemon[typeOne as keyof pokemonImgType]
  const Stype = typesPokemon[typeTwo as keyof pokemonImgType]

  const resPayload = {
    Ftype,
    Stype
  }
  return resPayload
}
