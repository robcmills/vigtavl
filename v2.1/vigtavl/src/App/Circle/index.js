import React from 'react'

const Circle = ({ fill, onClick, radius, stroke, strokeWidth, style, x, y }) => {
  return (
    <circle
      fill={fill}
      onClick={onClick}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={style}
      r={radius}
      cx={x}
      cy={y}
    />
  )
}

export default Circle
