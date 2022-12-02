import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ReactDocPage = () => {
	const [docs, setDocs] = useState([])
	const params = useParams()
	console.log()
	
	useEffect(() => {
		async function fetchData(params) {
			const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params}`)
	
			return result.data
		}

		fetchData(params.docID).then((res) => {
			setDocs(res)
		})
	} ,[])





	return <div>
		<h3>{docs.title}</h3>
		<p>{docs.body}</p>
	</div>;
};

export default ReactDocPage;
