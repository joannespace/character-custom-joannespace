import React from 'react'

function Image({customizeResult}) {
  return (
    customizeResult.map(custom => (
        <img alt={custom.name} src={custom.url} name={custom.cat} className={custom.cat} />
    ))
  )
}

export default Image;
