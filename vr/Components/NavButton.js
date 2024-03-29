import React, { Component } from "react";
import { Text, VrButton, Animated } from "react-vr";

export default class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.6)
    };
  }

  handleHoverIn() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 300
    }).start();
  }
  handleHoverExit() {
    Animated.timing(this.state.opacity, {
      toValue: 0.6,
      duration: 300
    }).start();
  }

  render() {
    const AnimatedButton = Animated.createAnimatedComponent(VrButton);
    return (
      <AnimatedButton
        style={{
          margin: 0.1,
          backgroundColor: "#fff",
          borderRadius: 0.05,
          opacity: this.state.opacity
        }}
        onEnter={this.handleHoverIn.bind(this)}
        onExit={this.handleHoverExit.bind(this)}
        onClick={() => this.props.handleClick(this.props.scene)}
      >
        <Text
          style={{
            fontSize: 0.2,
            margin: 0.05,
            textAlign: "center",
            textAlignVertical: "center",
            color: "#000"
          }}
        >
          {this.props.scene}
        </Text>
      </AnimatedButton>
    );
  }
}
