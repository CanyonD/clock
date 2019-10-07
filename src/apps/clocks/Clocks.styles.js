const styles = ({spacing}) => ({
	root: {},
	cardGrid: {
		paddingTop: spacing(8),
		paddingBottom: spacing(8),
	},
	card: {
		minHeight: spacing(26),
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	cardContent: {
		flexGrow: 1,
	},
	cardActions: {
		justifyContent: 'center'
	}
});

export default styles;
