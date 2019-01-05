import React from 'react'

import { COS_60, SIN_60 } from '../constants'

const Hex = ({ fill, onClick, radius, stroke, strokeWidth, style, x, y }) => {
  const adjacent = radius * COS_60
  const opposite = radius * SIN_60
  const points = [
    [0, radius],
    [opposite, adjacent],
    [opposite, -adjacent],
    [0, -radius],
    [-opposite, -adjacent],
    [-opposite, adjacent],
  ].map(point => `${x + point[0]},${y + point[1]}`).join(' ')
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

export default Hex
