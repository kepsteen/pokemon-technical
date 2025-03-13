// Pokemon List Response Types
export type PokemonListResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
};

export type PokemonListItem = {
	name: string;
	url: string;
};

// For backward compatibility
export type Pokemon = PokemonListResponse;

// Pokemon Detail Types
export type PokemonDetail = {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: PokemonSprites;
	types: PokemonType[];
	stats: PokemonStat[];
	abilities: PokemonAbility[];
	base_experience: number;
	species: {
		name: string;
		url: string;
	};
};

export type PokemonSprites = {
	front_default: string;
	front_shiny: string;
	back_default: string;
	back_shiny: string;
	other: {
		"official-artwork": {
			front_default: string;
		};
	};
};

export type PokemonType = {
	slot: number;
	type: {
		name: string;
		url: string;
	};
};

export type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

export type PokemonAbility = {
	ability: {
		name: string;
		url: string;
	};
	is_hidden: boolean;
	slot: number;
};

// Collection Types
export type PokemonCollection = {
	pokemon: PokemonDetail[];
	lastUpdated: string;
};

// Team Types
export type PokemonTeam = {
	id: string;
	name: string;
	pokemon: PokemonDetail[];
	created: string;
};
