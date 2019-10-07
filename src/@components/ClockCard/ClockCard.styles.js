const styles = ({spacing}) => ({
	card: {
		minHeight: spacing(26),
		minWidth: spacing(32),
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	cardContent: {
		flexGrow: 1,
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
});

export default styles;
