import { Typography } from '@material-ui/core';
import React from 'react';

export default function Clock(props) {
	const {
		classes,
		time
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
			{time}
		</Typography>
	);
}
