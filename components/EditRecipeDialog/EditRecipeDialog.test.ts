import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import EditRecipeDialog from '.'

const localVue = createLocalVue()

describe('EditRecipeDialog', () => {
  const defaultProps = {
    value: true
  }

  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return shallowMount(EditRecipeDialog, {
      localVue,
      vuetify: new Vuetify(),
      propsData: defaultProps,
      ...options
    })
  }

  it('should match its snapshot', () => {
    const wrapper = mountFunc()
    expect(wrapper).toMatchSnapshot()
  })
})
