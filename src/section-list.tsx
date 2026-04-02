import React from "react"
import {SectionList as ReactNativeSectionList} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {SectionListProps} from "./types.js"

const SectionList = propforgeComponent<SectionListProps>(
  ReactNativeSectionList as React.ElementType,
  "SectionList"
)

export default SectionList
