# 🐾 Pokedex CLI

A command-line Pokedex built with **TypeScript**, **Node.js**, and **npm**.  
Explore Pokémon locations, view wild encounters, and try to catch Pokémon—powered by the [PokeAPI](https://pokeapi.co/).

---

## ✨ Features
- **Interactive REPL**: Commands like `map`, `mapb`, `explore <location>`, `catch <pokemon>`, `inspect <pokemon>` and `pokedex`.
- **Live Data**: Fetches location and Pokémon info directly from PokeAPI.
- **Catch & Store**: Attempt to catch Pokémon based on their base experience and save them to your personal Pokédex.
- **Caching**: Uses an in-memory cache with automatic cleanup.

---

## 🛠️ Tech Stack
- Node.js (ES modules)
- TypeScript
- npm
- PokeAPI
- vitest (for testing)

---

## 🚀 Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/<your-username>/pokedex.git
cd pokedex

# 2️⃣ Install dependencies
npm install

# 3️⃣ Build the project
npm run build

# 4️⃣ Start the interactive CLI
npm start
```
| Command              | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `help`               | Show all available commands                           |
| `exit`               | Exit the Pokedex                                      |
| `map`                | Show the next 20 location areas                       |
| `mapb`               | Show the previous 20 location areas                   |
| `explore <location>` | List Pokémon that appear in a given location area     |
| `catch <pokemon>`    | Attempt to catch a Pokémon and add it to your Pokédex |
| `pokedex`            | View all Pokémon you’ve caught                        |

:) pika pika pikachu.... :)
