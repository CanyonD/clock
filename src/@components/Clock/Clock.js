import { Typography } from '@material-ui/core';
import React from 'react';

export default function Clock(props) {
	const {
		classes,
	} = props;

	return (
		<Typography
			component={'h1'}
			variant={'h1'}
			color={'inherit'}
			align={'center'}
			noWrap
			className={classes.root}
		>
			{'11:11'}
		</Typography>
	);
}
