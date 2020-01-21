import React, { Component } from "react";
import { AppRegistry, asset, View, Pano, Text, Animated } from "react-vr";
import SpaceScene from "./vr/Scenes/SpaceScene";
import ChessWorld from "./vr/Scenes/ChessWorld";
import NavUI from "./vr/Containers/NavUI";

export default class WelcomeToVR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: "Outer Space",
      panoSrc: {
        "Outer Space": "space.jpg",
        "Chess World": "chess-world.jpg"
      }
    };
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateValue();
  }
  componentDidUpdate() {
    this.animateValue();
  }

  animateValue() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }
  setScene(scene) {
    if (this.state.scene === scene) return false;
    this.setState({ scene });
  }
  setRenderedScene() {
    let scene;
    switch (this.state.scene) {
      case "Space":
        scene = <SpaceScene />;
        break;
      case "Chess World":
        scene = <ChessWorld />;
        break;
      default:
        scene = <SpaceScene />;
        break;
    }
    return scene;
  }

  render() {
    const renderedScene = this.setRenderedScene();
    const { scene, panoSrc } = this.state;
    const titleTranslateZ =
      scene === "Outer Space"
        ? this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, -5]
          })
        : -5;
    const titleOpacity = scene === "Chess World" ? this.animatedValue : 1;
    return (
      <View>
        <Pano source={asset(panoSrc[scene])} />
        <View>
          <Animated.View
            style={{
              width: 3,
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "space-between",
              borderColor: "#fff",
              borderWidth: 0.03,
              borderRadius: 0.05,
              layoutOrigin: [0.5, 0.5],
              opacity: titleOpacity,
              transform: [
                { translate: [0, 0] },
                { translateZ: titleTranslateZ }
              ]
            }}
          >
            <Text
              style={{
                fontSize: 0.5,
                textAlign: "center",
                textAlignVertical: "center",
                marginBottom: 0.025
              }}
            >
              {scene}
            </Text>
            <NavUI handleNavClick={this.setScene.bind(this)} />
          </Animated.View>
          {renderedScene}
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
