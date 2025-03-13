import { useEffect, useState } from "react";
import "./App.css";
import { Pokemon } from "./types";

function App() {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getPokemon = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon?limit=20&offset=40"
				);
				if (!response.ok) {
					throw new Error(`Error fetching Pokemon: ${response.status}`);
				}
				const data = await response.json();
				setPokemon(data);
			} catch (err) {
				console.error("Failed to fetch Pokemon:", err);
				setError(
					err instanceof Error ? err.message : "An unknown error occurred"
				);
			} finally {
				setIsLoading(false);
			}
		};
		getPokemon();
	}, []);

	return (
		<div className="pokemon-app">
			<header className="app-header">
				<div className="pokeball-logo"></div>
				<h1>Pokémon Explorer</h1>
			</header>

			{isLoading && <p className="loading">Catching Pokémon...</p>}

			{error && <p className="error">Error: {error}</p>}

			{!isLoading && !error && pokemon && (
				<div className="pokemon-list">
					<h2>Pokémon List</h2>
					<p className="pokemon-count">
						Showing {pokemon.results.length} of {pokemon.count} Pokémon
					</p>
					<p className="instructions">
						Click on a Pokémon to see more details!
					</p>
					<ul>
						{pokemon.results.map((pokemon) => (
							<li key={pokemon.name} className="pokemon-item">
								{pokemon.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
