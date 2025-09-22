// repl.js actually refers to repl.ts
// import { string } from "zod";
import { startREPL } from "./repl.js";
import { initState } from "./state.js";
function main() {
    const state = initState(1000 * 60 * 5);
    startREPL(state);
}
main();
