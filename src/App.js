import { Provider } from "react-redux";
import CantidadPokemonHook from "./components/CantidadPokemon.hook";
import CompraPokemonHook from "./components/CompraPokemon.hook";
import Contador from "./components/Contador";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src={require("./img/pockemon.png")}
                    alt="pokemon"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-doby">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook />
                    </div>
                    <CompraPokemonHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contador />
      </div>
    </Provider>
  );
}

export default App;
