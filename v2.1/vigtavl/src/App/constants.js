export const typeToFillMap = {
	[undefined]: 'Wheat',
	sea: 'DeepSkyBlue',
	forest: 'ForestGreen',
	mountain: 'Sienna',
}

export const toRad = deg => deg * (Math.PI / 180)
export const COS_60 = Math.cos(toRad(60))
export const SIN_60 = Math.sin(toRad(60))
