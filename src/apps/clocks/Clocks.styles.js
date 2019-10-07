const styles = ({ spacing, breakpoints }) => ({
	root: {},
	cardGrid: {
		paddingTop: spacing(8),
		paddingBottom: spacing(8),
		[breakpoints.down('md')]: {
			paddingTop: spacing(2),
			paddingBottom: spacing(2),
		},
	},
	globalActions: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: spacing(2),
		'& > button, & > label': {
			margin: `${spacing(1)}px auto`,
		},
	},
	hidden: {
		display: 'none',
	},
});

export default styles;
