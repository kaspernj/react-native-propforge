import React from "react"
import {ActivityIndicator as ReactNativeActivityIndicator} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ActivityIndicatorProps} from "./types.js"

const ActivityIndicator = propforgeComponent<ActivityIndicatorProps>(
  ReactNativeActivityIndicator as React.ElementType,
  "ActivityIndicator"
)

export default ActivityIndicator
