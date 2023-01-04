import { INCREMENTO, DECREMENTO, RESET } from "../types";

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//ACTION CREATOR
export const incremento = (cant) => {
  return { type: INCREMENTO, payload: 1 };
};

export const decremento = () => {
  return { type: DECREMENTO, payload: 1 };
};

export const reset = () => {
  return { type: RESET };
};
