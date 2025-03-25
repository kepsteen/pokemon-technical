import { useParams, Link } from "react-router";

// TODO: Fetch the individual pokemon data from the PokeAPI using the name parameter
// TODO: Replace the commented out code with the pokemon data returned from the API

const PokemonDetailPage = () => {
	const { name } = useParams<{ name: string }>();
	console.log(name);

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
			<Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
				&larr; Back to All Pokemon
			</Link>

			<div className="flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 flex justify-center">
					{/* <img
						src={
							pokemon.sprites.other["official-artwork"].front_default ||
							pokemon.sprites.front_default
						}
						alt={pokemon name}
						className="w-64 h-64 object-contain"
					/> */}
				</div>

				<div className="md:w-1/2 mt-4 md:mt-0">
					<h1 className="text-3xl font-bold capitalize mb-2">
						{/* {pokemon name} */}
					</h1>

					<div className="mb-4">
						<div className="flex gap-2 mb-2">
							{/* Map over the types and display each using the Type component */}
							<span className="px-3 py-1 rounded-full text-white text-sm font-semibold bg-blue-500">
								{/* {type name} */}
							</span>
						</div>

						<div className="grid grid-cols-2 gap-2">
							<div className="text-gray-700">
								<span className="font-semibold">Height:</span>{" "}
								{/* {pokemon height / 10}m */}
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">Weight:</span>{" "}
								{/* {pokemon weight / 10}kg */}
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">ID:</span> #{/* {pokemon.id} */}
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">Base XP:</span>{" "}
								{/* {pokemon.base_experience} */}
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-semibold mb-2">Abilities</h2>
						<ul className="list-disc list-inside">
							{/* Map over the abilities and display each using the Ability component */}
							<li className="capitalize">
								{/* {ability.name} */}
								{/* {ability.is_hidden && (
										<span className="text-gray-500 text-sm ml-2">(Hidden)</span>
									)} */}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-semibold mb-2">Stats</h2>
				<div className="space-y-2">
					{/* Map over the stats and display each using the Stat component */}
					<div className="w-full">
						<div className="flex justify-between mb-1">
							<span className="text-sm font-medium capitalize">
								{/* {stat name} */}
							</span>
							<span className="text-sm font-medium">
								{/* base stat value */}
							</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-2.5">
							<div
								className="bg-blue-600 h-2.5 rounded-full"
								style={
									{
										// width: `${Math.min(100, (base stat value / 255) * 100)}%`,
									}
								}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonDetailPage;
