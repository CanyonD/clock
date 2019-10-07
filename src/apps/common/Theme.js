import {
	createMuiTheme,
	responsiveFontSizes,
	CssBaseline,
	MuiThemeProvider } from '@material-ui/core';
import React, { Component } from 'react';

export const defaults = {};

const theme = responsiveFontSizes(createMuiTheme(defaults));

class Theme extends Component {

	render() {
		const {
			children
		} = this.props;

		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
				{children}
			</MuiThemeProvider>
		);
	}
}

export default Theme;
