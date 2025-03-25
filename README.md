# Pokémon Explorer

This is a technical assessment made for self-taught developers and bootcamp grads to test their frontend functional knowledge with React.

## Please Note

Before looking at the code, please switch to the starter branch. The solution code exists on the main branch

## Features

- View a list of 20 Pokémon on the home page
- Click on a Pokémon to view detailed information
- Responsive design that works on mobile and desktop
- Loading states and error handling

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router v7

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable UI components
│   ├── ErrorMessage.tsx
│   ├── LoadingSpinner.tsx
│   └── PokemonCard.tsx
├── pages/          # Page components
│   ├── HomePage.tsx
│   └── PokemonDetailPage.tsx
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
├── types.ts        # TypeScript type definitions
└── index.css       # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## API

This project uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data:

- List endpoint: `https://pokeapi.co/api/v2/pokemon?limit=20`
- Detail endpoint: `https://pokeapi.co/api/v2/pokemon/{name}`

## License

MIT
