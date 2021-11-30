import { useState } from 'react'

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState('')
	return (
		<input
			value={searchValue}
			onChange={event => setSearchValue(event.target.value)} />
	)
}

export default SearchBar
