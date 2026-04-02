import React from "react"
import {Pressable as ReactNativePressable} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {PressableProps} from "./types.js"

const Pressable = propforgeComponent<PressableProps>(
  ReactNativePressable as React.ElementType,
  "Pressable"
)

export default Pressable
