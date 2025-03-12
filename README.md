# Pokémon Search App
A simple web application that allows users to search for Pokémon by name or ID and view their details, including stats, types, and an image.

## Features
- **Search Functionality**: Users can enter a Pokémon name or ID to retrieve details.
- **Pokémon Details Display**: Shows name, ID, weight, height, sprite, types, and stats.
- **Error Handling**: Alerts users if an invalid Pokémon name or ID is entered.
- **Dynamic Data Rendering**: Updates the UI dynamically with fetched Pokémon data.
- **Responsive Design**: Works well on both desktop and mobile.

## Technologies Used
- **HTML5**: For structuring the web page.
- **CSS3**: For styling and layout.
- **JavaScript (ES6)**: For fetching and displaying Pokémon data.
- **PokéAPI Proxy**: Fetches data from `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/`.

## How to Use
1. Enter a Pokémon name or ID in the search bar.
2. Click the "Search" button.
3. The app will display:
   - Pokémon name, ID, height, and weight.
   - The Pokémon's front sprite.
   - The Pokémon's types, formatted as badges.
   - The Pokémon's base stats (HP, Attack, Defense, Special Attack, Special Defense, Speed).
   - An alert message if the Pokémon is not found.

## How to View
1. Clone this repository:
   ```bash
   git clone https://github.com/tylerhuynh287/Pokemon-Search-App-fCC.git
   ```
2. Open `index.html` in a web browser.

## Future Enhancements
- **Autocomplete Suggestions**: Provide search suggestions as users type.
- **Shiny Pokémon Support**: Display shiny Pokémon sprites if available.
- **More Detailed Info**: Add abilities, evolution chain, and move sets.

Enjoy searching for your favorite Pokémon!
