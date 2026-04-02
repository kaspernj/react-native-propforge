import React from "react"
import {KeyboardAvoidingView as ReactNativeKeyboardAvoidingView} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {KeyboardAvoidingViewProps} from "./types.js"

const KeyboardAvoidingView = propforgeComponent<KeyboardAvoidingViewProps>(
  ReactNativeKeyboardAvoidingView as React.ElementType,
  "KeyboardAvoidingView"
)

export default KeyboardAvoidingView
