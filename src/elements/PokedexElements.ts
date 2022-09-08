import styled from 'styled-components'

export const Center = styled.div`
  display: grid;
  max-width: 676px;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  margin: auto;
  width: 70%;
  height: auto;
  

  @media(max-width:683px){
    width: 360px;
    height: auto;
  }
`
export const PokemonImg = styled.img`
  position: relative;
  width: 121px;
  height: 106px;
  top: -242px;
  left: 161px;
  background: yellow;

  @media(max-width:683px){
    width: 92px;
    height: 81px;
    top: -184px;
    left: 45px;
  }
  @media(max-width:450px){
    width: 92px;
    height: 81px;
    top: -184px;
    left: 45px;
  }
`
export const PokemonName = styled.label`
  position: relative;
  display: flex;
  width: 145px;
  height: 62px;
  align-items: center;
  justify-content: center;
  top:-373px;
  left: 380px;
  font-size: 25px;
  background: yellow;

  @media(max-width:683px){
    width: 112px;
    height: 49px;
    top: -285px;
    left: 211px;
  }
  
`
export const Circle = styled.div`
  position: relative;
  width: 55px;
  height:55px;
  top: -511px;
  left:119px;
  border-radius: 100%;
  background: yellow;

  @media(max-width:683px){
    width: 39px;
    height: 40px;
    top: -390px;
    left: 15px;
  }
`
export const PokemonTypeOne = styled.label`
  position: relative;
  display: grid;
  width: 64px;
  height: 24px;
  justify-content: center;
  align-items: center;
  top: -275px;
  left: 363px;
  background: yellow;

  @media(max-width:683px){
    width: 49px;
    height: 19px;
    top: -210px;
    left: 199px;
  }
`
export const PokemonTypeTwo = styled.label`
  position: relative;
  display: grid;
  width: 64px;
  height: 24px;
  justify-content: center;
  align-items: center;
  top: -299px;
  left: 478px;
  background: yellow;

  @media(max-width:683px){
    width: 50px;
    height: 19px;
    top: -229px;
    left: 286px;
  }
`
export const PokemonMale = styled.label`
  position: relative;
  width: 25px;
  height: 24px;
  top: -374px;
  left: 357px;
  background: yellow;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -287px;
    left: 194px;
  }
`
export const PokemonFemale = styled.label`
  position: relative;
  width: 25px;
  height: 24px;
  top: -398px;
  left: 386px;
  background: yellow;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -307px;
    left: 217px;
  }
`
export const Left = styled.label`
  position: relative;
  width: 25px;
  height: 24px;
  top: -398px;
  left: 265px;
  background: yellow;
  cursor:pointer;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -307px;
    left: 217px;
  }
`
export const Right = styled.label`
  position: relative;
  width: 25px;
  height: 24px;
  top: -422px;
  left: 293px;
  background: yellow;
  cursor: pointer;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -307px;
    left: 217px;
  }
`
