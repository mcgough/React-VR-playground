import React from 'react';
import {
  asset,
  Model,
} from 'react-vr';

export default class DeathStar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y, z } = this.props.translate;
    return (
      <Model
        source={{
          obj: asset('rook/chess.obj'),
        }}
        style={{
          transform: [
            {translateX: x},
            {translateY: y},
            {translateZ: z},
          ],
        }}
        wireframe={true}
      />     
    )   
  }
}