import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import MainPage from './component/MainPage'
import TechPage from './component/TechPage'
import BlogPage from './component/BlogPage'
import ReactPage from './component/ReactPage'
import ReactDocPage from './component/ReactDocPage'
import JavaScriptPage from './component/JavaScriptPage'

function App() {
	return (
		<div>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='tech' element={<TechPage />}>
					<Route path='javascript' element={<JavaScriptPage/> }/>
					<Route path='react' element={<ReactPage/>}/>
					<Route path='react/:docID' element={<ReactDocPage />}/>
				</Route>
				<Route path='blog' element={<BlogPage />}></Route>
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
