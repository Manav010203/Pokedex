import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./commandMap.js";
import { commandExplore } from "./commandExplore.js";
import { commandCatch } from "./commandCatch.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        // can add more commands here
        help: {
            name: "help",
            description: "Display a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "dispaly next 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "display previous 20 locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore <location_name>",
            description: "use to explore a location",
            callback: commandExplore,
        },
        catch: {
            name: "catch <name>",
            description: "catching the pokemon",
            callback: commandCatch,
        }
    };
}
