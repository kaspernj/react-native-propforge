import test from "node:test"
import assert from "node:assert/strict"
import React from "react"

import {memoComponent} from "../build/memo-component.js"

test("memoComponent sets the display name", () => {
  const BaseComponent = () => null
  const MemoComponent = memoComponent(BaseComponent, "DisplayNameTest")

  assert.equal(MemoComponent.displayName, "DisplayNameTest")
})

test("memoComponent forwards refs and props", () => {
  const calls = []
  const BaseComponent = React.forwardRef((props, ref) => {
    calls.push({props, ref})

    return null
  })
  const MemoComponent = memoComponent(BaseComponent, "ForwardRefTest")
  const ref = React.createRef()

  const renderedElement = MemoComponent.type.render({example: "value"}, ref)
  const renderedRef = React.version.startsWith("18.") ? renderedElement.ref : renderedElement.props.ref

  assert.equal(renderedElement.type, BaseComponent)
  assert.equal(renderedElement.props.example, "value")
  assert.equal(renderedRef, ref)
  assert.equal(calls.length, 0)
})
