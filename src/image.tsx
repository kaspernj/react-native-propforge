import React from "react"
import {Image as ReactNativeImage} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ImageProps} from "./types.js"

const Image = propforgeComponent<ImageProps>(
  ReactNativeImage as React.ElementType,
  "Image"
)

export default Image
