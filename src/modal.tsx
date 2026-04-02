import React from "react"
import {Modal as ReactNativeModal} from "react-native"

import {propforgeComponent} from "./propforge-component.js"
import type {ModalProps} from "./types.js"

const Modal = propforgeComponent<ModalProps>(
  ReactNativeModal as React.ElementType,
  "Modal"
)

export default Modal
