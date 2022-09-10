import styled from 'styled-components'
import { theme } from '../theme'

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
  background: transparent;

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
  font-size: 16px;
  color: ${theme.font};
  background: transparent;

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
  background: transparent;

  @media(max-width:683px){
    width: 39px;
    height: 40px;
    top: -390px;
    left: 15px;
  }
`
export const PokemonTypeOne = styled.button`
  position: relative;
  display: grid;
  width: 64px;
  height: 24px;
  justify-content: center;
  align-items: center;
  top: -275px;
  left: 363px;
  font-family: Lato, sans-serif;
  font-size: 11px;
  color: ${theme.font};
  background: transparent;

  @media(max-width:683px){
    width: 49px;
    height: 19px;
    top: -210px;
    left: 199px;
    font-size: 10px;
  }
`
export const PokemonTypeTwo = styled.button`
  position: relative;
  display: grid;
  width: 64px;
  height: 24px;
  justify-content: center;
  align-items: center;
  top: -299px;
  left: 478px;
  font-family: Lato, sans-serif;
  font-size: 11px;
  color: ${theme.font};
  background: transparent;

  @media(max-width:683px){
    width: 50px;
    height: 19px;
    top: -229px;
    left: 286px;
    font-size: 10px;
  }
`
export const PokemonMale = styled.button`
  position: relative;
  width: 25px;
  height: 24px;
  top: -374px;
  left: 357px;
  font-weight: 700;
  background: transparent;
  border: none;
  cursor: pointer;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -287px;
    left: 194px;
  }
`
export const PokemonFemale = styled.button`
  position: relative;
  width: 25px;
  height: 24px;
  top: -398px;
  left: 386px;
  font-weight: 700;
  color:white;
  background: transparent;
  border:none;
  cursor: default;

  @media(max-width:683px){
    width: 20px;
    height: 20px;
    top: -307px;
    left: 217px;
  }
`
export const Left = styled.button`
  position: relative;
  display: grid;
  width: 25px;
  height: 24px;
  justify-content: start;
  top: -392px;
  left: 265px;
  background: transparent;
  border:none;
  cursor:pointer;

  @media(max-width:683px){
    display: block;
    width: 20px;
    height: 25px;
    top: -311px;
    left: 121px;
  }
`
export const Right = styled.button`
  position: relative;
  display: grid;
  width: 25px;
  height: 24px;
  justify-content: end;
  align-items: end;
  top: -425px;
  left: 293px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media(max-width:683px){
    display: block;
    width: 20px;
    height: 20px;
    top: -333px;
    left: 148px;
  }
`
export const PokemonSearch = styled.input`
  position: relative;
  width: 90px;
  height: 33px;
  top: -430px;
  left: 159px;
  
  @media(max-width:683px){
    width: 68px;
    height: 26px;
    top: -341px;
    left: 45px;
    font-size: 10px;
  }
`
