import React from "react"

import {memoComponent} from "./memo-component.js"

/**
 * Build a memoized component wrapper with extended `dataSet` support.
 *
 * @param component
 * @param displayName
 */
export function propforgeComponent<Props>(component: React.ElementType, displayName: string) {
  return memoComponent<Props, unknown>(
    component,
    displayName
  ) as React.ComponentType<Props>
}
