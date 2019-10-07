import moment from 'moment-timezone';
import React, { Fragment, useState } from 'react';
import {
	Container,
	Grid,
	Button,
	FormControlLabel,
	Switch,
} from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import ClockCard from '@components/ClockCard';

export default function Clocks(props) {
	const [ currentTime, setCurrentTime ] = useState(localStorage.getItem('currentTime') || new Date());
	const [ isOpenPicker, setIsOpenPicker ] = useState(false);

	const handlerSetTime = (value) => {
		localStorage.setItem('currentTime', value);
		setCurrentTime(localStorage.getItem('currentTime'));
	};

	const handlerCurrentTime = () => {
		handlerSetTime(new Date());
	};

	const {
		classes,
	} = props;

	return (
		<Container className={classes.cardGrid} maxWidth={'lg'}>
			<Grid
				container
				spacing={4}
				justify={'center'}
				alignContent={'center'}
				alignItems={'center'}
			>
				<ClockCard
					title={'London'}
					time={moment(currentTime).tz('Europe/London').format('HH:mm')}
				/>
				<ClockCard
					title={'Kyiv'}
					time={moment(currentTime).tz('Europe/Kiev').format('HH:mm')}
				/>
				<ClockCard
					title={'Tokyo'}
					time={moment(currentTime).tz('Asia/Tokyo').format('HH:mm')}
				/>
			</Grid>

			<Grid container spacing={4} justify={'center'} className={classes.globalActions}>
				<TimePicker
					className={classes.hidden}
					variant={'dialog'}
					open={isOpenPicker}
					ampm={false}
					onOpen={() => setIsOpenPicker(true)}
					onClose={() => setIsOpenPicker(false)}
					value={currentTime}
					onChange={handlerSetTime}
					showTodayButton
					todayLabel={'Now'}
					autoOk
				/>
				<Button
					variant={'contained'}
					color={'primary'}
					onClick={() => {
						setIsOpenPicker(true);
					}}
				>
					Set Time
				</Button>

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
