import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-red-600 text-white p-4 shadow-md">
				<h1 className="text-2xl font-bold text-center">Pokédex</h1>
			</header>
			<main className="container mx-auto p-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/pokemon/:name" element={<PokemonDetailPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
