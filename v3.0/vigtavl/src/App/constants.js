export const typeToFillMap = {
	[undefined]: 'Wheat',
	sea: 'DeepSkyBlue',
	forest: 'ForestGreen',
	mountain: 'Sienna',
}

export const colorToFillAndStrokeMap = {
	black: { fill: 'black', stroke: 'white' },
	white: { fill: 'white', stroke: 'black' },
}

export const toRad = deg => deg * (Math.PI / 180)
export const COS_30 = Math.cos(toRad(30))
export const COS_60 = Math.cos(toRad(60))
export const SIN_60 = Math.sin(toRad(60))
export const COS_90 = Math.cos(toRad(90))
export const SIN_90 = Math.sin(toRad(90))
export const TAN_30 = Math.tan(toRad(30))
