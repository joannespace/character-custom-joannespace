import React from 'react'
import Image from './Image'

function Result({customizeResult, getRandomResult}) {
  return (
    <>
        <Image customizeResult={customizeResult} />
        <button className="random-btn" onClick={getRandomResult}>RANDOM</button>
    </>
  )
}

export default Result
