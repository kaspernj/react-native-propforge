import React from "react"
import {SafeAreaView as ReactNativeSafeAreaView} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {SafeAreaViewProps} from "./types.js"

const SafeAreaView = propforgeComponent<SafeAreaViewProps>(
  ReactNativeSafeAreaView as React.ElementType,
  "SafeAreaView"
)

export default SafeAreaView
