import React from 'react'
import { FemaleLed } from './FemaleLed'

export function FemaleActive (url:string, refLabel:React.RefObject<HTMLButtonElement>, divFemale:React.RefObject<HTMLDivElement>) {
  if (refLabel.current !== null) {
    if (url !== null) {
      refLabel.current.style.color = 'black'
      refLabel.current.style.cursor = 'pointer'
      FemaleLed(divFemale)
    } else {
      refLabel.current.style.color = 'white'
      refLabel.current.style.cursor = 'default'
    }
  }
}
