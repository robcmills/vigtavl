import React from 'react'

import DefaultSquare from '../Square/default'

const Castle = ({ fill, onClick, stroke, strokeWidth, style, x, y }) => {
  return (
    <DefaultSquare
      fill="wheat"
      onClick={onClick}
      radius={0.45}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
    />
  )
}

export default Castle
