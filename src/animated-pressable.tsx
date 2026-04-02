import React from "react"
import {Animated as ReactNativeAnimated, Pressable as ReactNativePressable} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {PressableProps} from "./types.js"

const AnimatedPressable = propforgeComponent<PressableProps>(
  ReactNativeAnimated.createAnimatedComponent(ReactNativePressable) as React.ElementType,
  "AnimatedPressable"
)

export default AnimatedPressable
