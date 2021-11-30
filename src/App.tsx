import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import SearchResults from './components/search/SearchResults';
import { Fruit } from './models/Fruit'

function App() {
	const [searchText, setSearchText] = useState('')
	const fruits: Fruit[] = [
		{id: '1', name: 'orange'},
		{id: '2', name: 'banana'},
		{id: '3', name: 'apple'},
		{id: '4', name: 'grapes'},
		{id: '5', name: 'melon'}
	]

	const filteredFruits = fruits.filter(fruit => fruit.name.includes(searchText))
	
	return (
		<div className="App">
			<Header searchValue={searchText} setSearchValue={setSearchText} />
			<main>
				<SearchResults fruits={filteredFruits} />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
