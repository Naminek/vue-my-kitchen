import IngredientItem from '~/composables/type'
import { Group } from '~/composables/enum'
import { faker } from '@faker-js/faker'
import { randomEnum } from '~/composables/enum'

export const getRandomIngredientItems = (amount = 5) => {
  const data = [] as IngredientItem[]
  for (let i = 0; i < amount; i++) {
    data.push({
        ingredient_id: faker.datatype.number(),
        amount: faker.random.word(),
        group: randomEnum(Group)
      }
    )
  }
  return data
}

export const getFixedIngredientItems = (amount = 5) => {
  const data = [] as IngredientItem[]
  for (let i = 0; i < amount; i++) {
    data.push({
        ingredient_id: i + 1,
        amount: '3 piece',
        group: randomEnum(Group)
      }
    )
  }
  return data
}
