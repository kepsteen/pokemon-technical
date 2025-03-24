import { Link } from "react-router";
import { PokemonListItem } from "../types";

interface PokemonCardProps {
	pokemon: PokemonListItem;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
	// Function to extract Pokemon ID from URL
	const getPokemonId = (url: string) => {
		const parts = url.split("/");
		return parts[parts.length - 2];
	};

	const pokemonId = getPokemonId(pokemon.url);

	return (
		<Link
			to={`/pokemon/${pokemon.name}`}
			className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
		>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
				alt={pokemon.name}
				className="w-32 h-32 object-contain"
			/>
			<h2 className="text-lg font-semibold capitalize mt-2">{pokemon.name}</h2>
			<span className="text-gray-500 text-sm">#{pokemonId}</span>
		</Link>
	);
};

export default PokemonCard;
