# Issue Repro

## Installation

```
yarn install
```

or

```
npm install
```

## Test Runner

Two commands are available to run via npm or yarn.

`test-error`:
This will run the test, outputing to console, lcov format in `lcov.info`, and html format in `coverage.html`

`test`:
This will run the test, outputing to console, and lcov format in `lcov.info`

For any other test, include `--sourcemaps --transform node_modules/lab-transform-typescript`