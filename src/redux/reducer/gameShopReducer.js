import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopActions";

const default_game_shop = {
    cantidad_pokemon: 30
};

const game_shop = (state = default_game_shop, action) => {
    switch(action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                cantidad_pokemon: state.cantidad_pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                cantidad_pokemon: state.cantidad_pokemon + action.payload
            }
        }

        default: return state;
    }
}

export default game_shop;

