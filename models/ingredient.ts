/* eslint-disable camelcase */
import { Model } from '@vuex-orm/core'

export enum Season {
  SEASON_UNSPECIFIED,
  SEASON_ALL,
  SEASON_SPRING,
  SEASON_SUMMER,
  SEASON_AUTUMN,
  SEASON_WINTER,
}

export enum Group {
  GROUP_UNSPECIFIED,
  GROUP_1,
  GROUP_2,
  GROUP_3,
  GROUP_4,
  GROUP_5,
}

export default class Ingredient extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'ingredients'

  // The argument is the default value.
  static fields () {
    return {
      id: this.number(0),
      name: this.attr(''),
      season: this.number(''),
      group: this.number(0)
    }
  }

  id!: number
  name!: string
  season?: Season
  group?: Group
}
