import React from "react"
import {TouchableHighlight as ReactNativeTouchableHighlight} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TouchableHighlightProps} from "./types.js"

const TouchableHighlight = propforgeComponent<TouchableHighlightProps>(
  ReactNativeTouchableHighlight as React.ElementType,
  "TouchableHighlight"
)

export default TouchableHighlight
