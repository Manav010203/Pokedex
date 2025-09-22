// import { State } from './state.js';
// export const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout,
//   prompt:"Pokedex > ",
// })
export async function startREPL(state) {
    // const commands = getCommands();
    state.readline.prompt();
    state.readline.on('line', (input) => {
        const split = cleanInput(input);
        if (split.length === 0) {
            state.readline.prompt();
            return;
        }
        const cmdName = split[0];
        const args = split.slice(1);
        const cmd = state.commands[cmdName];
        if (!cmd) {
            console.log(`Unknown handler`);
            state.readline.prompt();
            return;
        }
        try {
            cmd.callback(state, ...args);
        }
        catch (e) {
            console.error(`error running command : ${e}`);
        }
        state.readline.prompt();
    });
}
export function cleanInput(input) {
    // logic goes here
    return input.toLowerCase().trim().split(" ").filter(Boolean);
}
