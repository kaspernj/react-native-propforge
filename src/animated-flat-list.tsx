import React from "react"
import {Animated as ReactNativeAnimated} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {FlatListProps} from "./types.js"

const AnimatedFlatList = propforgeComponent<FlatListProps>(
  ReactNativeAnimated.FlatList as React.ElementType,
  "AnimatedFlatList"
)

export default AnimatedFlatList
