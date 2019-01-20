export const typeToFillMap = {
	[undefined]: 'Wheat',
	sea: 'DeepSkyBlue',
	forest: 'ForestGreen',
	mountain: 'Sienna',
}

export const toRad = deg => deg * (Math.PI / 180)
export const COS_60 = Math.cos(toRad(60))
export const SIN_60 = Math.sin(toRad(60))
export const COS_90 = Math.cos(toRad(90))
export const SIN_90 = Math.sin(toRad(90))