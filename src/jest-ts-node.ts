// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class DummyClass {
    constructor() {

    }

    giveMeAPromise(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if(!name) return reject('Provide a name')
            setTimeout(() => {
                resolve(name)
            }, 1000)
        })
    }

    giveMeAPromise2(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if(!name) return reject('Provide a name')
            setTimeout(() => {
                resolve(name)
            }, 1000)
        })
    }

    async someCoolMethod() {
        const value = await this.giveMeAPromise("0");
    }
}
