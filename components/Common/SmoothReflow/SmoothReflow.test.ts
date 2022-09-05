import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import SmoothReflow from '.'

const localVue = createLocalVue()

describe('SmoothReflow', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return mount(SmoothReflow, {
      localVue,
      vuetify: new Vuetify(),
      mocks: {},
      propsData: {
      },
      ...options
    })
  }

  it('should match its snapshot', () => {
    const wrapper = mountFunc()
    expect(wrapper).toMatchSnapshot()
  })
})
