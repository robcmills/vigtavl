import React from 'react'
import withStyles from 'react-jss'

import styles from './styles'
import PlayBoard from '../Board/play'

const Play = ({ classes: c }) => (
	<div className={c.page}>
		<PlayBoard className={c.board} />
	</div>
)

export default withStyles(styles)(Play)
