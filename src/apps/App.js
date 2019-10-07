import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Theme from 'apps/common/Theme';
import Layout from 'apps/common/Layout';
import Clocks from 'apps/clocks';
// import 'styles/App.css';

function App() {
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Theme>
				<Layout
					title={'Clock application'}
					footer={{
						link: 'https://canyond.github.io/clock',
						projectName: 'Clock',
					}}
				>
					<Clocks/>
				</Layout>
			</Theme>
		</MuiPickersUtilsProvider>
	);
}

export default App;
