import React from "react"
import {View as ReactNativeView} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ViewProps} from "./types.js"

const View = propforgeComponent<ViewProps>(
  ReactNativeView as React.ElementType,
  "View"
)

export default View
