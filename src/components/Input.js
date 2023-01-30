import React from 'react'

function Input({arrayItem, handleClick}) {
  
  return (
    arrayItem.map(item => (
      <input type='image' alt={item.name} name={item.cat} src={item.url} onClick={handleClick} value={item} />
      )
    )
  )
}

export default Input;
