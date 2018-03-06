import React, { Component } from 'react';
import {
  View,
} from 'react-vr';
import NavButton from '../Components/NavButton';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <NavButton 
          handleClick={this.props.handleNavClick}
          scene="Outer Space"
        />
        <NavButton
          handleClick={this.props.handleNavClick}
          scene="Chess World"
        />
      </View>
    )
  }
}