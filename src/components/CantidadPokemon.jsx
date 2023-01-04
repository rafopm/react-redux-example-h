import React, { Component } from "react";
import { connect } from "react-redux";

class CantidadPokemon extends Component {
  render() {
    return (<React.Fragment>
      Unidades: {this.props.game_shop.cantidad_pokemon}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game_shop: state.pokemon
  }
  
}
//console.log('ss',game_shop)

export default connect(mapStateToProps)(CantidadPokemon);
