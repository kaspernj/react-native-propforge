import React from "react"
import {Animated as ReactNativeAnimated} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TextProps} from "./types.js"

const AnimatedText = propforgeComponent<TextProps>(
  ReactNativeAnimated.Text as React.ElementType,
  "AnimatedText"
)

export default AnimatedText
