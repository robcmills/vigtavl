import React from 'react'

import DefaultTriangle from '../Triangle/default'

const Town = ({ fill, onClick, stroke, strokeWidth, style, x, y }) => {
  return (
    <DefaultTriangle
      fill="wheat"
      onClick={onClick}
      radius={0.6}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
      x={x}
      y={y}
    />
  )
}

export default Town
