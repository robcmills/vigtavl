import React from 'react'

import { COS_60, SIN_60 } from '../constants'

const RADIUS = 1
const ADJACENT = RADIUS * COS_60
const OPPOSITE = RADIUS * SIN_60
const VERTICES = [
  [OPPOSITE, ADJACENT],
  [0, -RADIUS],
  [-OPPOSITE, ADJACENT],
]

const Triangle = ({ fill, onClick, stroke, strokeWidth, style, x, y }) => {
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

export default Triangle
