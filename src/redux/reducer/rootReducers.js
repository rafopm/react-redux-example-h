import { combineReducers } from "redux";
import contador_reducer from "./contadorReducer";
import game_shop from "./gameShopReducer";


const rootReducers = combineReducers({
 cuenta: contador_reducer, pokemon: game_shop
});

export default rootReducers;