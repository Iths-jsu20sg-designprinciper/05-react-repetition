import SearchBar from './search/SearchBar'

interface Props {
	searchValue: string;
	setSearchValue: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {

	return (
		<header>
			<h1> React repetition </h1>
			<SearchBar
				searchValue={searchValue}
				setSearchValue={setSearchValue} />
		</header>
	)
}

export default Header
