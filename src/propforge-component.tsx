import React from "react"

import {memoComponent} from "./memo-component.js"

const REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref")
const REACT_MEMO_TYPE = Symbol.for("react.memo")

/**
 * @param component
 * @returns {boolean}
 */
function isAlreadyExoticComponent(component: React.ElementType) {
  if (typeof component !== "object" && typeof component !== "function") {
    return false
  }

  if (!("$$typeof" in component)) {
    return false
  }

  return component.$$typeof === REACT_FORWARD_REF_TYPE || component.$$typeof === REACT_MEMO_TYPE
}

/**
 * Re-type a React Native component with extended `dataSet` support.
 *
 * @param component
 * @param displayName
 */
export function propforgeComponent<Props>(component: React.ElementType, displayName: string) {
  if ((typeof component === "object" || typeof component === "function") && "displayName" in component && !component.displayName) {
    component.displayName = displayName
  }

  if (isAlreadyExoticComponent(component)) {
    return component as React.ComponentType<Props>
  }

  return memoComponent<Props, unknown>(component, displayName) as React.ComponentType<Props>
}
