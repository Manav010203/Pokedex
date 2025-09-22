export async function commandMap(state) {
    const { api, nextLocationURL } = state;
    const pageURL = nextLocationURL ?? undefined;
    const data = await api.fetchLocations(pageURL);
    data.results.forEach((loc) => console.log(loc.name));
    state.nextLocationURL = data.next;
    state.prevLocationURL = data.previous;
    state.readline.prompt();
}
export async function commandMapb(state) {
    const { api, prevLocationURL } = state;
    const pageURl = prevLocationURL ?? undefined;
    const data = await state.api.fetchLocations(pageURl);
    data.results.forEach((loc) => console.log(loc.name));
    state.nextLocationURL = data.next;
    state.prevLocationURL = data.previous;
    state.readline.prompt();
}
