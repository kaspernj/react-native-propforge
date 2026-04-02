import React from "react"
import {VirtualizedList as ReactNativeVirtualizedList} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {VirtualizedListProps} from "./types.js"

const VirtualizedList = propforgeComponent<VirtualizedListProps>(
  ReactNativeVirtualizedList as React.ElementType,
  "VirtualizedList"
)

export default VirtualizedList
