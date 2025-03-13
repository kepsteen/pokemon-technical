# Pokemon API Challenge

This repository contains a frontend challenge focused on working with the Pokemon API. The challenge is designed to progressively build your skills in React, TypeScript, API integration, and frontend development.

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

## Challenge Overview

The base application fetches a list of Pokemon from the [PokeAPI](https://pokeapi.co/) and displays their names in a simple list. Your task is to enhance this application through a series of progressive challenges.

## Level 1: Basic Pokemon List (Already Implemented)

- Fetch the list of Pokemon from the PokeAPI
- Display the Pokemon names in a list
- Handle loading and error states

## Level 2: Pokemon Details

Enhance the application to show more details about each Pokemon:

- Add a click handler to each Pokemon in the list
- When a Pokemon is clicked, fetch its detailed information from `https://pokeapi.co/api/v2/pokemon/{name}`
- Display the Pokemon's:
  - Image (sprite)
  - Type(s)
  - Height and weight
  - Base stats (HP, Attack, Defense, etc.)
- Implement a "back to list" button

## Level 3: Pokemon Card Collection

Create a more interactive experience:

- Add a "Catch Pokemon" button to each Pokemon detail view
- When clicked, add the Pokemon to a "My Collection" section
- Store the collection in localStorage so it persists between page refreshes
- Allow users to remove Pokemon from their collection
- Add a counter showing how many Pokemon they've caught

## Level 4: Search and Filter

Improve the user experience with search and filter functionality:

- Add a search input to filter Pokemon by name
- Implement type filtering (allow users to show only Pokemon of certain types)
- Add pagination or infinite scrolling to handle the large number of Pokemon
- Sort Pokemon by different attributes (alphabetical, ID number, etc.)

## Level 5: Advanced Features

For those who want an extra challenge:

- Implement routing using React Router to create separate pages for:
  - Pokemon list
  - Pokemon details
  - My collection
- Add a Pokemon comparison feature (compare stats between two Pokemon)
- Create a "Team Builder" that allows users to create a team of up to 6 Pokemon
  - Calculate team strengths and weaknesses based on Pokemon types
- Add animations for Pokemon sprites or transitions between views
- Implement a battle simulator that allows users to battle their Pokemon against random opponents

## Bonus Challenge: Styling and UI/UX

- Create a responsive design that works well on mobile and desktop
- Implement a theme switcher (light/dark mode)
- Use CSS modules or a styling library like styled-components
- Create a visually appealing UI with attention to detail
- Add loading skeletons or animations for better UX during API calls

## Resources

- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Submission

When you've completed the challenges, please:

1. Push your code to a GitHub repository
2. Deploy the application to a platform like Vercel, Netlify, or GitHub Pages
3. Share the repository URL and deployed application link

Good luck and have fun building your Pokemon application!
