import React from 'react'

import { COS_60, SIN_60 } from '../constants'

const Triangle = ({ fill, onClick, radius, stroke, strokeWidth, style, x, y }) => {
  const adjacent = radius * COS_60
  const opposite = radius * SIN_60
  const vertices = [
    [opposite, adjacent],
    [0, -radius],
    [-opposite, adjacent],
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

export default Triangle
