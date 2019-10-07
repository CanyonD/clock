import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Layout from 'apps/common/Layout';

let container;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	document.body.removeChild(container);
	container = null;
});

it('Layout > renders components', () => {
	const title = 'title',
		link = 'footer-link',
		projectName = 'footer-projectName',
		contentText = 'content';

	act(() => {
		ReactDOM.render(<Layout
				title={'title'}
				footer={{
					link: link,
					projectName: projectName,
				}}
			>
				{contentText}
			</Layout>,
			container,
		);
	});

	const header = container.querySelector('header');
	expect(header).toBeDefined();
	expect(header.textContent).toBe(title);

	const footer = container.querySelector('footer');
	expect(footer).toBeDefined();
	expect(footer.textContent).toBe('Copyright © ' + projectName + ' ' + new Date().getFullYear());

	const content = container.querySelector('main');
	expect(content).toBeDefined();
	expect(content.textContent).toBe(contentText);
});
