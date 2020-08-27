const {sumAsync, subtractAsync} = require('../math')

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

async function test(title, callback) {
    try {
      await callback()
      console.log(`✓ ${title}`)
    } catch (error) {
      console.error(`✕ ${title}`)
      console.error(error)
    }
  }

// Without async await gives this error
//  function test(title, callback) {
//   try {
//      callback()
//     console.log(`✓ ${title}`)
//   } catch (error) {
//     console.error(`✕ ${title}`)
//     console.error(error)
//   }
// }
//(node:41753) UnhandledPromiseRejectionWarning: Error: -4 is not equal to 10
// at Object.toBe (/Users/pritesh/code/javascript/testingcourse/examples/async-await.js:29:15)
// at test (/Users/pritesh/code/javascript/testingcourse/examples/async-await.js:6:18)
// at <anonymous>
// at process._tickCallback (internal/process/next_tick.js:189:7)
// at Function.Module.runMain (module.js:696:11)
// at startup (bootstrap_node.js:204:16)
// at bootstrap_node.js:625:3
// (node:41753) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
// (node:41753) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

