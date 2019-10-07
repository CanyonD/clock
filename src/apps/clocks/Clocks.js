import moment from 'moment-timezone';
import React, { useCallback, useEffect, useState, useRef } from 'react';
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
	const [ realTime, setRealTime ] = useState(JSON.parse(localStorage.getItem('realTime')) || false);
	const [ isOpenPicker, setIsOpenPicker ] = useState(false);

	const refIntervalId = useRef(null);

	const handlerRealTime = () => {
		localStorage.setItem('realTime', JSON.stringify(!realTime));
		setRealTime(JSON.parse(localStorage.getItem('realTime')));
	};

	const handlerSetTime = (value) => {
		localStorage.setItem('currentTime', value);
		setCurrentTime(localStorage.getItem('currentTime'));
	};

	const handlerCurrentTime = useCallback(() => {
		handlerSetTime(new Date());
	}, []);

	const startRealTime = useCallback(() => {
		refIntervalId.current = setInterval(handlerCurrentTime, 1000);
	}, [ refIntervalId, handlerCurrentTime ]);

	const stopRealTime = useCallback(() => {
		clearInterval(refIntervalId.current);
	}, [ refIntervalId ]);

	useEffect(() => {
		if (realTime) {
			startRealTime();
		} else {
			stopRealTime();
		}
	}, [ realTime, startRealTime, stopRealTime ]);

	useEffect(() => {
		return () => {
			clearInterval(refIntervalId.current);
		};
	}, [ refIntervalId ]);

	const {
		classes,
	} = props;

	const timeFormat = 'HH:mm';

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
					time={moment(currentTime).tz('Europe/London').format(timeFormat)}
				/>
				<ClockCard
					title={'Kyiv'}
					time={moment(currentTime).tz('Europe/Kiev').format(timeFormat)}
				/>
				<ClockCard
					title={'Tokyo'}
					time={moment(currentTime).tz('Asia/Tokyo').format(timeFormat)}
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
						<Switch
							color="primary"
							checked={realTime}
							onChange={handlerRealTime}
						/>
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
