export type PokemonType = {
  abilities: {},
  base_experiencie:number,
  forms:[],
  game_indices:[],
  height:number,
  held_items:[]
  id:number,
  is_default:boolean,
  location_area_encounters:string,
  moves:[],
  name:string,
  order:number,
  past_types: [],
  species:{},
  sprites:{
    front_default:string,
    front_female:string
  },
  stats:[],
  types:[
    {
    slot:number,
    type: {name:string }
    },
    {
      slot:number,
      type: {name:string | null}
    }
  ],

  weight:number
}

export type PokemonArray = {
  config:{},
  data: PokemonType,
  headers: {},
  request: {},
  status:number,
  statusText:string
}

export interface pokemonImgType {
  bug?:string,
  dark?:string,
  dragon?:string,
  electric?:string,
  fairy?:string,
  fighting?:string,
  fire?:string,
  flying?:string,
  ghost?:string,
  grass?:string,
  ground?:string,
  ice?:string,
  normal?:string,
  psychic?:string,
  poison?:string,
  rock?:string,
  steel?:string,
  water?:string
  empty?:string
}
