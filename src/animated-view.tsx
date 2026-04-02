import React from "react"
import {Animated as ReactNativeAnimated} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ViewProps} from "./types.js"

const AnimatedView = propforgeComponent<ViewProps>(
  ReactNativeAnimated.View as React.ElementType,
  "AnimatedView"
)

export default AnimatedView
