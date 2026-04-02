import React from "react"
import {ImageBackground as ReactNativeImageBackground} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ImageBackgroundProps} from "./types.js"

const ImageBackground = propforgeComponent<ImageBackgroundProps>(
  ReactNativeImageBackground as React.ElementType,
  "ImageBackground"
)

export default ImageBackground
