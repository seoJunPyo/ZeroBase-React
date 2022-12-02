import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const TechPage = () => {
	return <div>
		<h2>Tech</h2>
		<Link to='react'>React</Link> | <Link to='javascript'>JavaScript</Link>
		<Outlet />
	</div>;
};

export default TechPage;
