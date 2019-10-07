import moment from 'moment-timezone';
import React, { Fragment, useState } from 'react';
import {
	Container,
	Grid,
	Button,
	FormControlLabel,
	Switch,
} from '@material-ui/core';
import ClockCard from '@components/ClockCard';

export default function Clocks(props) {
	const [ currentTime, setCurrentTime ] = useState(localStorage.getItem('currentTime') || new Date());

	const handlerCurrentTime = () => {
		localStorage.setItem('currentTime', new Date());
		setCurrentTime(localStorage.getItem('currentTime'));
	};

	const handlerSetTime = () => {
	};

	const {
		classes,
	} = props;

	return (
		<Container className={classes.cardGrid} maxWidth={'lg'}>
			<Grid container spacing={4} justify={'center'}>
				<ClockCard
					title={'London'}
					time={moment(currentTime).tz('Europe/London').format('HH:mm')}
				/>
				<ClockCard
					title={'Kyiv'}
					time={moment(currentTime).tz('Europe/Kiev').format('HH:mm')}
					actions={
						<Fragment>
							<Button
								variant={'contained'}
								color={'primary'}
								onClick={handlerSetTime}
							>
								Set Time
							</Button>
						</Fragment>
					}
				/>
				<ClockCard
					title={'Tokyo'}
					time={moment(currentTime).tz('Asia/Tokyo').format('HH:mm')}
				/>
			</Grid>

			<Grid container spacing={4} justify={'center'} className={classes.globalActions}>
				<FormControlLabel
					value={'start'}
					control={
						<Switch color="primary"/>
					}
					label={'Real-time'}
					labelPlacement={'start'}
				/>
				<Button
					variant={'contained'}
					color={'primary'}
					onClick={handlerCurrentTime}
				>
					Set Current Time
				</Button>
			</Grid>
		</Container>
	);
}
