import React from 'react';
import { Link } from 'react-router-dom';

const mainPage = () => {
	return (
		<div>
			<h1>Main Page </h1>
			<Link to={'tech'}>Tech</Link> | <Link to={'blog'}>Blog</Link>
		</div>
	);
};

export default mainPage;
