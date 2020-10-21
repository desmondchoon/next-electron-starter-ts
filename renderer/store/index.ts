  
import { enableStaticRendering } from 'mobx-react'

/**Stores */
import ExampleStore from './example-store'

const isServer = !process.browser
enableStaticRendering(isServer)

class Store {
    exampleStore: ExampleStore
    constructor(props: Object) {
        this.exampleStore = new ExampleStore();
    }
}

let store: any = null

export function initializeStore(initialData: Object) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(initialData)
  }
  if (store === null) {
    store = new Store(initialData)
  }
  return store
}