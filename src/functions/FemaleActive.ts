import React from 'react'

export function FemaleActive (url:string, refLabel:React.RefObject<HTMLLabelElement>) {
  if (refLabel.current !== null) {
    if (url !== null) {
      refLabel.current.style.color = 'black'
      refLabel.current.style.cursor = 'pointer'
    } else {
      refLabel.current.style.color = 'white'
      refLabel.current.style.cursor = 'default'
    }
  }
}
