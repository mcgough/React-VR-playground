import React from 'react';
import {
  View,
} from 'react-vr';
import { Easing } from 'react-native';
import DeathStar from '../Components/DeathStar';

export default class SpaceScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <DeathStar />
      </View>
    );
  }
};