import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { Plugin } from 'vue-fragment'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Plugin)

// Necessary for components such as v-dialog and v-menu to function correctly
const app = document.createElement('div')
app.setAttribute('data-app', 'true')
document.body.appendChild(app)

// Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn()
  unobserve = jest.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver
})


// Suppress the error message about navigation not being implemented by jsdom

// There should be a single listener which simply prints to the
// console. We will wrap that listener in our own listener.
const wdw = (window as any)

const listeners = wdw._virtualConsole.listeners('jsdomError')
const originalListener = listeners && listeners[0]

wdw._virtualConsole.removeAllListeners('jsdomError')

// Add a new listener to swallow JSDOM errors that orginate from clicks on anchor tags.
wdw._virtualConsole.addListener('jsdomError', (error: any) => {
  if (
    error.type !== 'not implemented' &&
    error.message !== 'Not implemented: navigation (except hash changes)' &&
    originalListener
  ) {
    originalListener(error)
  }

  // swallow error
})
