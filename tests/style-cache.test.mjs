import test from "node:test"
import assert from "node:assert/strict"

import {createStyleCache} from "../build/style-cache.js"

test("createStyleCache returns a mutable empty object", () => {
  const styles = createStyleCache()

  styles.root = {flex: 1}

  assert.deepEqual(styles, {root: {flex: 1}})
})
