// TODO: Fetch a list of Pokemon from the PokeAPI
// TODO: Display the list of Pokemon using the PokemonCard component provided for you in src/components/PokemonCard.tsx
// TODO: Dynamically update the amount of pokemon fetched by changing the amount input using the limit parameter

const HomePage = () => {
	return (
		<>
			<div>
				<h1 className="text-2xl font-bold mb-6">Pokémon Collection</h1>
				<label htmlFor="pokemonAmount" className="flex flex-col gap-2">
					Enter amount of pokemon to fetch
					<input
						id="pokemonAmount"
						type="number"
						className="w-[200px] border-2 border-gray-300 rounded-md p-2"
					/>
				</label>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{/* Render a list of PokemonCard components here only use the PokemonCard component. Don't add any other html elements (it will just mess up the styling) */}
				</div>
			</div>
		</>
	);
};

export default HomePage;
