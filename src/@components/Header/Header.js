import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header(props) {
	const {
		classes,
		children,
	} = props;

	return (
		<AppBar position={'relative'}>
			<Toolbar>
				<Typography
					component={'h2'}
					variant={'h5'}
					color={'inherit'}
					align={'center'}
					noWrap
					className={classes.title}
				>
					{children}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
