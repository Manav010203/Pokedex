export async function commandCatch(state, ...args) {
    if (args.length !== 1) {
        throw new Error(`nedde the pokemon name to catch`);
    }
    const pokemon_name = args[0];
    const info = await state.api.fetchPokemon(pokemon_name);
    console.log(`Throwing a Pokeball at ${pokemon_name}...`);
    const res = Math.floor(Math.random() * info.base_experience);
    if (res > 40) {
        console.log(`${info.name} escaped`);
        state.readline.prompt();
        return;
    }
    console.log(`${info.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.caughtPokemon[info.name] = info;
    state.readline.prompt();
}
