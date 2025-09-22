export async function commandExplore(state, ...args) {
    // const splt = args.split()
    if (args.length !== 1) {
        throw new Error(`you must provide a location name`);
    }
    const Name = args[0];
    const location = await state.api.fetchLocation(Name);
    console.log(`Exploring the location ${location}`);
    console.log(`Pokemon Found:`);
    for (const enc of location.pokemon_encounters) {
        console.log(` - ${enc.pokemon.name}`);
    }
    state.readline.prompt();
}
