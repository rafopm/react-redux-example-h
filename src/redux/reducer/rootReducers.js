import { combineReducers } from "redux";
import contador_reducer from "./contadorReducer";
import game_shop from "./gameShopReducer";
import buscador from "./buscadorReducer";


const rootReducers = combineReducers({
 cuenta: contador_reducer, pokemon: game_shop, buscar: buscador
});

export default rootReducers;