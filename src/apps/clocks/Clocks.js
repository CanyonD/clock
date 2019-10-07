import React from 'react';
import {
	Container,
	Grid,
	Card,
	CardContent,
	CardActions,
	Button,
	Typography
} from '@material-ui/core';
import Clock from '@components/Clock'

export default function Clocks(props) {
	const {
		classes,
	} = props;

	return (
		<Container className={classes.cardGrid} maxWidth={'lg'}>
			<Grid container spacing={4} justify={'center'}>
				<Grid item key={'London'} xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant={'h5'} component={'h2'} align={'center'}>
								London
							</Typography>
							<Clock/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item key={'Kyiv'} xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant={'h5'} component={'h2'} align={'center'}>
								Kyiv
							</Typography>
							<Clock/>
						</CardContent>
						<CardActions className={classes.cardActions}>
							<Button variant={'contained'} color={'primary'}>
								Set Time
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item key={'Tokyo'} xs={12} sm={6} md={4}>
					<Card className={classes.card}>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant={'h5'} component={'h2'} align={'center'}>
								Tokyo
							</Typography>
							<Clock/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
