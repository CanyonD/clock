import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import Clock from '@components/Clock';

export default function ClockCard(props) {
	const {
		classes,
		title,
		time,
		actions
	} = props;

	const size = {
		xs: 12,
		sm: 6,
		md: 4,
	};

	return (
		<Grid
			item
			key={'Kyiv'}
			{...size}
		>

		<Card className={classes.card}>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant={'h5'} component={'h2'} align={'center'}>
					{title}
				</Typography>
				<Clock
					time={time}
				/>
				{actions && (
					<CardActions className={classes.cardActions}>
						{actions}
					</CardActions>
				)}
			</CardContent>
		</Card>
		</Grid>

	);
}
