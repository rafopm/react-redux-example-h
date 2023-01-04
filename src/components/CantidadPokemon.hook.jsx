import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemonHook = () => {

    const game_shop = useSelector((state) => state.pokemon);
return (<React.Fragment>
    Unidades: {game_shop.cantidad_pokemon}
    </React.Fragment>
  );
}

export default CantidadPokemonHook;