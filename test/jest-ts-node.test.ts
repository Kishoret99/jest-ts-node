import DummyClass from "../src/jest-ts-node"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("DummyClass is instantiable", () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})

describe("give me a promise method", () => {

  it("resolves when passed a name", async () => {
    const dummyClass = new DummyClass();
    const value = await dummyClass.giveMeAPromise('kishore');
    expect(value).toEqual('kishore');
  })

  it("rejects with a string when no name is passed", async () => {
    const dummyClass = new DummyClass();
    const rejectionMsg = await dummyClass.giveMeAPromise('').catch(err => err);
    expect(rejectionMsg).toEqual('Provide a name');
  })
})
