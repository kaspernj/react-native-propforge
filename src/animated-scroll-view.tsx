import React from "react"
import {Animated as ReactNativeAnimated} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ScrollViewProps} from "./types.js"

const AnimatedScrollView = propforgeComponent<ScrollViewProps>(
  ReactNativeAnimated.ScrollView as React.ElementType,
  "AnimatedScrollView"
)

export default AnimatedScrollView
