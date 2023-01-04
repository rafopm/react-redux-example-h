import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  incremento,
  decremento,
} from "../redux/actions/contadorActions";

const Contador = () => {
  const state = useSelector((state) => state);
  
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(incremento())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decremento())}>-1</button>
      </nav>
        <h3>{console.log(state.cuenta)}</h3>
    </div>
  );
};

export default Contador;
