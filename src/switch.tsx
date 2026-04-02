import React from "react"
import {Switch as ReactNativeSwitch} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {SwitchProps} from "./types.js"

const Switch = propforgeComponent<SwitchProps>(
  ReactNativeSwitch as React.ElementType,
  "Switch"
)

export default Switch
