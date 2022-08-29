import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import IndexPage from './index.vue'

const localVue = createLocalVue()

describe('Dashboard page', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return shallowMount(IndexPage, {
      localVue,
      vuetify: new Vuetify(),
      ...options
    })
  }

  it('should match its snapshot', () => {
    const wrapper = mountFunc()
    expect(wrapper).toMatchSnapshot()
  })
})
