import React from 'react'

import { SIN_90 } from '../constants'

const Square = ({ fill, onClick, radius, stroke, strokeWidth, style, x, y }) => {
  const side = radius * SIN_90
  const vertices = [
    [side, side],
    [side, -side],
    [-side, -side],
    [-side, side],
  ]
  const points = vertices
    .map(point => `${x + point[0]},${y + point[1]}`)
    .join(' ')
  return (
    <polygon
      fill={fill}
      onClick={onClick}
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
    />
  )
}

export default Square
