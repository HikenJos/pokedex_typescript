import React from 'react'

export function CircleLed (refDiv:React.RefObject<HTMLDivElement>) {
  if (refDiv.current !== null) {
    refDiv.current.style.background = 'rgb(214, 38, 35, 0.5)'
    setTimeout(() => {
      refDiv.current ? refDiv.current.style.background = 'transparent' : console.log('Congratulations, have a good day')
    }, 1000)
  }
}
