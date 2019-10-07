import React from 'react';
import Theme from 'apps/common/Theme';
import Layout from 'apps/common/Layout';
import Clocks from 'apps/clocks';
import 'styles/App.css';

function App() {
	return (
		<Theme>
			<Layout
				title={'Clock application'}
				footer={{
					link: 'https://canyond.github.io/clock',
					projectName: 'Clock'
				}}
			>
				<Clocks/>
			</Layout>
		</Theme>
	);
}

export default App;
