import React from "react"
import {Text as ReactNativeText} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TextProps} from "./types.js"

const Text = propforgeComponent<TextProps>(
  ReactNativeText as React.ElementType,
  "Text"
)

export default Text
