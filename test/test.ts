import * as Lab from 'lab'
import { expect } from 'code'
import { testFunction } from '../src/test'

const lab = Lab.script();
const { describe, it } = lab

export { lab }

describe ('testFunction', () => {
  it ('behaves as expected without bar', (done) => {
    const ret = testFunction({ foo: 'string'} )

    expect(testFunction).to.be.a.function()
    expect(ret).to.be.a.boolean().and.to.equal(true)

    done()
  })
})
