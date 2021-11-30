import { Fruit } from '../../models/Fruit'

interface Props {
	fruits: Fruit[];
}


const SearchResults = ({ fruits }: Props) => (
	<div>
		{fruits.map(fruit => (
			<div key={fruit.id}>
				{fruit.name}
			</div>
		))}
	</div>
)


export default SearchResults
