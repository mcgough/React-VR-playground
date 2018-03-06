import React from 'react';
import {
  asset,
  Model,
  Animated,
} from 'react-vr';

import { Easing } from 'react-native';

export default class DeathStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spin: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startDeathStarSpin();
  }

  startDeathStarSpin() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
        toValue: 1,
        duration: 30000,
        easing: Easing.linear,
      }
    ).start(() => this.startDeathStarSpin());
  }

  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    const DeathStar = Animated.createAnimatedComponent(Model);
    return (
      <DeathStar
        source={{
          obj: asset('death-star/death-star.obj'),
        }}
        style={{
          transform: [
            {translate: [-2, 3, -3]},
            {rotateZ: '0deg'},
            {rotateX: '0deg'},
            {rotateY: spin},
          ],
        }}
        texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
      />     
    )   
  }
}