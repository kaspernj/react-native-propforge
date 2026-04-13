import test from "node:test"
import assert from "node:assert/strict"
import React from "react"

import {propforgeComponent} from "../build/propforge-component.js"

test("propforgeComponent memoizes plain components", () => {
  const BaseComponent = () => null
  const PropforgedComponent = propforgeComponent(BaseComponent, "PropforgedComponent")

  assert.notEqual(PropforgedComponent, BaseComponent)
  assert.equal(PropforgedComponent.displayName, "PropforgedComponent")
})

test("propforgeComponent preserves the original exotic component identity", () => {
  const BaseComponent = React.forwardRef(() => null)
  const PropforgedComponent = propforgeComponent(BaseComponent, "PropforgedComponent")

  assert.equal(PropforgedComponent, BaseComponent)
})

test("propforgeComponent fills in a missing display name", () => {
  const BaseComponent = React.forwardRef(() => null)
  const PropforgedComponent = propforgeComponent(BaseComponent, "PropforgedDisplayName")

  assert.equal(PropforgedComponent.displayName, "PropforgedDisplayName")
})
