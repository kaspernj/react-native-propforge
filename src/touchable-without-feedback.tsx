import React from "react"
import {TouchableWithoutFeedback as ReactNativeTouchableWithoutFeedback} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {TouchableWithoutFeedbackProps} from "./types.js"

const TouchableWithoutFeedback = propforgeComponent<TouchableWithoutFeedbackProps>(
  ReactNativeTouchableWithoutFeedback as React.ElementType,
  "TouchableWithoutFeedback"
)

export default TouchableWithoutFeedback
