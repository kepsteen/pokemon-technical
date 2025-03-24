# Pokémon Explorer

A React application built with Vite, TypeScript, and Tailwind CSS that allows users to browse and view details about Pokémon using the [PokéAPI](https://pokeapi.co/).

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
