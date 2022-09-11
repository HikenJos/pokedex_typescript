import React from 'react'

export function FemaleLed (divFemale:React.RefObject<HTMLDivElement>) {
  if (divFemale.current !== null) {
    divFemale.current.style.background = 'rgb(7, 94, 255, 0.7)'
    setTimeout(() => {
      divFemale.current ? divFemale.current.style.background = 'transparent' : console.log('')
    }, 1000)
  }
}
