import React from 'react'

import { SIN_90 } from '../constants'

const RADIUS = 0.75;
const SIDE = RADIUS * SIN_90
const VERTICES = [
  [SIDE, SIDE],
  [SIDE, -SIDE],
  [-SIDE, -SIDE],
  [-SIDE, SIDE],
]

const Square = ({ fill, onClick, stroke, strokeWidth, style, x, y }) => {
  const points = VERTICES
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
