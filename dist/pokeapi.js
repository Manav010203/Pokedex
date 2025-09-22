// export class PokeAPI {
//   private static readonly baseURL = "https://pokeapi.co/api/v2";
//     #cache: Map<string, { value: unknown; timestamp: number }> = new Map();
//   constructor() {}
//   async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
//     // implment this
//     const url = pageURL ?? `${PokeAPI.baseURL}/location-area`
//     const response = await fetch(url);
//     if(!response.ok){
//         throw new Error(`failed to fetch the location ${response.status}`)
//     }
//     return (await response.json()) as ShallowLocations;
//   }
//   async fetchLocation(locationName: string): Promise<Location> {
//     // implement this
//     const url = `${PokeAPI.baseURL}/location-area/${locationName}`
//     const response = await fetch(url);
//     if(!response.ok){
//         throw new Error (`failed to fetch location ${response.status}`)
//     }
//     return (await response.json()) as Location;
//   }
// }
// export type ShallowLocations = {
//   // add properties here
//   count : number;
//   next :string|null;
//   previous:string|null;
//   results : {
//   name : string,
//   url :string,
//   }[],
// };
// export type Location = {
//   // add properties here
//   id: number;
//   name: string;
//   location: {
//     name: string;
//     url: string;
//   };
//   region: {
//     name: string;
//     url: string;
//   };
//   pokemon_encounters: {
//     pokemon: { name: string; url: string };
//     version_details: any[]; // refine if you need specific structure
//   }[];
//   game_indices: {
//     game_index: number;
//     generation: { name: string; url: string };
//   }[];
// };
import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache;
    constructor(cacheInterval) {
        this.cache = new Cache(cacheInterval);
    }
    closeCache() {
        this.cache.stopReapLoop();
    }
    async fetchLocations(pageURL) {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            const locations = await resp.json();
            this.cache.add(url, locations);
            return locations;
        }
        catch (e) {
            throw new Error(`Error fetching locations: ${e.message}`);
        }
    }
    async fetchPokemon(pokemonName) {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            const pokemon = await resp.json();
            this.cache.add(url, pokemon);
            return pokemon;
        }
        catch (e) {
            throw new Error(`Error fetching pokemon '${pokemonName}': ${e.message}`);
        }
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.cache.get(url);
        if (cached) {
            return cached;
        }
        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            const location = await resp.json();
            this.cache.add(url, location);
            return location;
        }
        catch (e) {
            throw new Error(`Error fetching location '${locationName}': ${e.message}`);
        }
    }
}
