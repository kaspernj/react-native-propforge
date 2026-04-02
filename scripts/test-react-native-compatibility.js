import {execFileSync} from "node:child_process"

/**
 * @typedef {object} CompatibilityTarget
 * @property {string} reactNative
 * @property {string} react
 * @property {string} reactTypes
 */

/** @type {CompatibilityTarget[]} */
const compatibilityTargets = [
  {react: "19.0.0", reactNative: "0.78.3", reactTypes: "19.2.14"},
  {react: "19.0.0", reactNative: "0.79.7", reactTypes: "19.2.14"},
  {react: "19.1.0", reactNative: "0.80.3", reactTypes: "19.2.14"},
  {react: "19.1.4", reactNative: "0.81.6", reactTypes: "19.2.14"}
]

/**
 * @param {string} command
 * @param {string[]} args
 * @returns {void}
 */
function run(command, args) {
  execFileSync(command, args, {stdio: "inherit"})
}

/**
 * @param {string} selector
 * @returns {CompatibilityTarget}
 */
function compatibilityTargetFor(selector) {
  const normalizedSelector = selector.replace(/^0\./, "")
  const compatibilityTarget = compatibilityTargets.find((target) => {
    return target.reactNative === selector || target.reactNative.startsWith(`0.${normalizedSelector}.`)
  })

  if (!compatibilityTarget) {
    throw new Error(`Unknown React Native compatibility target: ${selector}`)
  }

  return compatibilityTarget
}

/**
 * @param {CompatibilityTarget} compatibilityTarget
 * @returns {void}
 */
function testCompatibilityTarget(compatibilityTarget) {
  console.log(`\nTesting React Native ${compatibilityTarget.reactNative} with React ${compatibilityTarget.react} and @types/react ${compatibilityTarget.reactTypes}\n`)
  run("npm", [
    "install",
    "--no-save",
    `react@${compatibilityTarget.react}`,
    `react-native@${compatibilityTarget.reactNative}`,
    `@types/react@${compatibilityTarget.reactTypes}`
  ])
  run("npm", ["run", "build"])
  run("npm", ["run", "typecheck"])
  run("npm", ["test"])
}

/**
 * @returns {void}
 */
function main() {
  const selector = process.argv[2]

  if (!selector || selector === "all") {
    for (const compatibilityTarget of compatibilityTargets) {
      testCompatibilityTarget(compatibilityTarget)
    }

    return
  }

  testCompatibilityTarget(compatibilityTargetFor(selector))
}

main()
