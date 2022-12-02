import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useSWR from 'swr';

const ReactPage = () => {

	async function fetcher () {
			const result = await axios.get('https://jsonplaceholder.typicode.com/posts')

			return result.data
	}

	const { data : docs, error } = useSWR('posts',fetcher);
	
	if (!docs) return <div>loading...</div>
	if (error) return <div>fail to loading...</div>

	return <div>
		<h3>React</h3>
		{docs.map((data) => (
			<Link to={String(data.id)} key={data.id} style={{display:'block', margin:'1rem 0'}}>
				{data.title}
			</Link>
		))}
	</div>;
};

export default ReactPage;
