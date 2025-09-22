// import { rl } from "./repl.js";
export async function commandHelp(state) {
    console.log(`Welcome to the Pokedex!`);
    console.log(`Usage:`);
    for (const cmd of Object.values(state.commands)) {
        console.log(`${cmd.name} - ${cmd.description}`);
    }
    console.log(`help: Displays a help message
exit: Exit the Pokedex`);
    // rl.prompt();
}
