import React, { Component } from 'react';
import {
  View,
} from 'react-vr';
import Rook from '../Components/Rook';

export default class ChessWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Rook translate={{x: -3, y: -1, z: -10}} />
        <Rook translate={{x: 5, y: -1, z: -10}} />
        <Rook translate={{x: 10, y: -1, z: 18.25}} />
        <Rook translate={{x: -8.75, y: -1, z: 18.55}} />
      </View>
    );
  }
};