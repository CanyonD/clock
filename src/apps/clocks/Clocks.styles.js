const styles = ({spacing}) => ({
	root: {},
	cardGrid: {
		paddingTop: spacing(8),
		paddingBottom: spacing(8),
	},
	globalActions: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		'& > button, & > label': {
			margin: `${spacing(1)}px auto`
		}
	},
	hidden: {
		display: 'none',
	}
});

export default styles;
