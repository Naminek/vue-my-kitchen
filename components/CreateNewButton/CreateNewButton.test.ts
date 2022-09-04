import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import CreateNewButton from '.'

const localVue = createLocalVue()

describe('CreateNewButton', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return shallowMount(CreateNewButton, {
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
