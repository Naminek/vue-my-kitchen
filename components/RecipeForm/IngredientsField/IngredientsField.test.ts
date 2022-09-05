import { getFixedIngredientItems } from './../../../test/fakes/ingredientitem';
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import IngredientsField from '.'

const localVue = createLocalVue()
const ingredients = getFixedIngredientItems()

describe('IngredientsField', () => {
  const defaultProps = {
    ingredients
  }

  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return mount(IngredientsField, {
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
