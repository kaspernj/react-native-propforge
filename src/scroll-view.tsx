import React from "react"
import {ScrollView as ReactNativeScrollView} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ScrollViewProps} from "./types.js"

const ScrollView = propforgeComponent<ScrollViewProps>(
  ReactNativeScrollView as React.ElementType,
  "ScrollView"
)

export default ScrollView
