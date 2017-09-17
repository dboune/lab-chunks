interface TestFunctionOptions {
  foo?: string
  bar?: boolean
}

export const testFunction = (options: TestFunctionOptions) => {

  if (options.bar) {
    console.log('Bar')
    return false
  }

  return true
}
