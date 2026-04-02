import React from "react"
import {Animated as ReactNativeAnimated} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ImageProps} from "./types.js"

const AnimatedImage = propforgeComponent<ImageProps>(
  ReactNativeAnimated.Image as React.ElementType,
  "AnimatedImage"
)

export default AnimatedImage
