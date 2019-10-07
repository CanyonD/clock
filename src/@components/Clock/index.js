import { withStyles } from '@material-ui/core/styles'
import Clock from './Clock'
import styles from './Clock.styles'

export default withStyles(styles, { withTheme: true })(Clock)
