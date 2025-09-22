// import readline from 'node:readline';
import { getCommands } from './command.js';
// import { getCommands } from './repl.js';
import { createInterface } from "readline";
import { PokeAPI } from './pokeapi.js';
export function initState(cacheInterval) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > ",
    });
    return {
        readline: rl,
        commands: getCommands(),
        api: new PokeAPI(cacheInterval),
        nextLocationURL: "",
        prevLocationURL: "",
        caughtPokemon: {},
    };
}
