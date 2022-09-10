export const initialState =
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
  }
