import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { PokemonDetail } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const PokemonDetailPage = () => {
	const { name } = useParams<{ name: string }>();
	const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPokemonDetail = async () => {
			if (!name) return;

			try {
				setIsLoading(true);
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${name}`
				);

				if (!response.ok) {
					throw new Error(`Failed to fetch details for ${name}`);
				}

				const data: PokemonDetail = await response.json();
				setPokemon(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An unknown error occurred"
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPokemonDetail();
	}, [name]);

	if (isLoading) {
		return <LoadingSpinner size="large" />;
	}

	if (error || !pokemon) {
		return <ErrorMessage message={error || "Pokemon not found"} showHomeLink />;
	}

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
			<Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
				&larr; Back to All Pokemon
			</Link>

			<div className="flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 flex justify-center">
					<img
						src={
							pokemon.sprites.other["official-artwork"].front_default ||
							pokemon.sprites.front_default
						}
						alt={pokemon.name}
						className="w-64 h-64 object-contain"
					/>
				</div>

				<div className="md:w-1/2 mt-4 md:mt-0">
					<h1 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>

					<div className="mb-4">
						<div className="flex gap-2 mb-2">
							{pokemon.types.map((type) => (
								<span
									key={type.type.name}
									className="px-3 py-1 rounded-full text-white text-sm font-semibold bg-blue-500"
								>
									{type.type.name}
								</span>
							))}
						</div>

						<div className="grid grid-cols-2 gap-2">
							<div className="text-gray-700">
								<span className="font-semibold">Height:</span>{" "}
								{pokemon.height / 10}m
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">Weight:</span>{" "}
								{pokemon.weight / 10}kg
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">ID:</span> #{pokemon.id}
							</div>
							<div className="text-gray-700">
								<span className="font-semibold">Base XP:</span>{" "}
								{pokemon.base_experience}
							</div>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-semibold mb-2">Abilities</h2>
						<ul className="list-disc list-inside">
							{pokemon.abilities.map((ability) => (
								<li key={ability.ability.name} className="capitalize">
									{ability.ability.name}
									{ability.is_hidden && (
										<span className="text-gray-500 text-sm ml-2">(Hidden)</span>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-semibold mb-2">Stats</h2>
				<div className="space-y-2">
					{pokemon.stats.map((stat) => (
						<div key={stat.stat.name} className="w-full">
							<div className="flex justify-between mb-1">
								<span className="text-sm font-medium capitalize">
									{stat.stat.name}
								</span>
								<span className="text-sm font-medium">{stat.base_stat}</span>
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5">
								<div
									className="bg-blue-600 h-2.5 rounded-full"
									style={{
										width: `${Math.min(100, (stat.base_stat / 255) * 100)}%`,
									}}
								></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PokemonDetailPage;
