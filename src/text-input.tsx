import React from "react"
import {TextInput as ReactNativeTextInput} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TextInputProps} from "./types.js"

const TextInput = propforgeComponent<TextInputProps>(
  ReactNativeTextInput as React.ElementType,
  "TextInput"
)

export default TextInput
