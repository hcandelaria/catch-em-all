import React, { Component } from 'react';
import PokemonCards from './PokemonCards';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <PokemonCards />
      </div>
    );
  }
}
