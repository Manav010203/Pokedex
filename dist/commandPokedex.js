export async function commandPokedex(state) {
    if (!state.caughtPokemon) {
        throw new Error(`No pokemon caught yet`);
    }
    console.log(`Your Pokedex:`);
    for (const name in state.caughtPokemon) {
        console.log(` - ${name}`);
    }
    state.readline.prompt();
}
