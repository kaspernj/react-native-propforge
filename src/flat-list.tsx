import React from "react"
import {FlatList as ReactNativeFlatList} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {FlatListProps} from "./types.js"

const FlatList = propforgeComponent<FlatListProps>(
  ReactNativeFlatList as React.ElementType,
  "FlatList"
)

export default FlatList
