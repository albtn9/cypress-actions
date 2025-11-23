const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZiOTU1MmM2LTg5MmUtNGEwOC04MjAyLTFmMjI3ZjdhODY3NS0xNzYzOTEyMzgwMTI2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTBhMmJhNTktZjAzNS00MWNiLWI1OGYtYzYyZDc1NmVkZTY0IiwidHlwZSI6InQifQ.RDOB4a6WM085MroWvBAZF4O069K-_lYpOfx8MmDGFfw'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
