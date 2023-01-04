//const { act } = require("react-dom/test-utils");
import { INCREMENTO, DECREMENTO, RESET } from "../types";

const initialState = {
  contador: 50,
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

export default function contador_reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + action.payload,
      };
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - action.payload,
      };
    case RESET:
      return {
        ...state,
        contador: 0,
      };
    default:
     return { ...state }
  }
}
