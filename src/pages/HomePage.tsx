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
					{/* Map over the pokmeonList and display each using the PokemonCard component */}
				</div>
			</div>
		</>
	);
};

export default HomePage;
