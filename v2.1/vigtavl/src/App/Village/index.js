import React from 'react'

import DefaultCircle from '../Circle/default'

const Village = ({ fill, onClick, stroke, strokeWidth, style, x, y }) => {
  return (
    <DefaultCircle
      fill="wheat"
      onClick={onClick}
      radius={0.5}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
      x={x}
      y={y}
    />
  )
}

export default Village
