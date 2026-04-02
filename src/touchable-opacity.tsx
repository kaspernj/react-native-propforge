import React from "react"
import {TouchableOpacity as ReactNativeTouchableOpacity} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TouchableOpacityProps} from "./types.js"

const TouchableOpacity = propforgeComponent<TouchableOpacityProps>(
  ReactNativeTouchableOpacity as React.ElementType,
  "TouchableOpacity"
)

export default TouchableOpacity
