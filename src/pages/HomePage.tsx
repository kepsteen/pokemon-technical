import { useState, useEffect } from "react";
import { PokemonListResponse } from "../types";
import PokemonCard from "../components/PokemonCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
	const [pokemonList, setPokemonList] = useState<PokemonListResponse | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=20"
				);

				if (!response.ok) {
					throw new Error("Failed to fetch Pokemon");
				}

				const data: PokemonListResponse = await response.json();
				setPokemonList(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An unknown error occurred"
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPokemon();
	}, []);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage message={error} />;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold mb-6">Pokémon Collection</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{pokemonList?.results.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
