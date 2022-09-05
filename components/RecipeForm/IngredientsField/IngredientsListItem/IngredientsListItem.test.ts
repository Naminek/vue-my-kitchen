import { getFixedIngredientItems } from '~/test/fakes/ingredientitem'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import IngredientsListItem from '.'

const localVue = createLocalVue()

const ingredientItem = getFixedIngredientItems(1)[0]

describe('IngredientsListItem', () => {
  const defaultProps = {
    item: ingredientItem
  }

  beforeEach(() => {
    jest.resetAllMocks()
  })

  function mountFunc (options = {}) {
    return mount(IngredientsListItem, {
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
