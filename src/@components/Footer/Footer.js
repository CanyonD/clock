import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';

export default function Footer(props) {
	const {
		classes,
		link,
		projectName
	} = props;

	return (
		<footer className={classes.root}>
			<Container maxWidth={'lg'}>
				<Typography
					variant={'body2'}
					color={'textSecondary'}
					align={'center'}
				>
					{'Copyright © '}
					<Link color={'inherit'} href={link}>
						{projectName}
					</Link>
					{' '}
					{new Date().getFullYear()}
				</Typography>
			</Container>
		</footer>
	);
}
