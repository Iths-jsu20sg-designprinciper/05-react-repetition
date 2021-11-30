import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchResults from './components/search/SearchResults';

function App() {
	const fruits = ['orange', 'banana', 'apple', 'grapes', 'melon']
	
	return (
		<div className="App">
			<Header />
			<main>
				<SearchResults fruits={fruits} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
