import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Layout(props) {
	const {
		classes,
		children,
		title,
		footer,
	} = props;

	return (
		<div className={classes.root}>
			{title && (
				<Header>
					{title}
				</Header>
			)}
			{children && (
				<Container
					component={'main'}
					className={classes.main}
					maxWidth={'lg'}
				>
					{children}
				</Container>
			)}
			{footer && (
				<Footer
					link={footer.link}
					projectName={footer.projectName}
				/>
			)}
		</div>
	);
}
