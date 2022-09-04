import Vuetify from 'vuetify'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import AppBar from '.'

const localVue = createLocalVue()

describe('AppBar', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return shallowMount(AppBar, {
      localVue,
      vuetify: new Vuetify(),
      stubs: {
        'nuxt-link': RouterLinkStub
      },
      ...options
    })
  }

  it('should match its snapshot', () => {
    const wrapper = mountFunc()
    expect(wrapper).toMatchSnapshot()
  })
})
