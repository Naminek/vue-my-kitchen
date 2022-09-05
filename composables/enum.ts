export enum Group {
  GROUP_UNSPECIFIED,
  GROUP_1,
  GROUP_2,
  GROUP_3,
  GROUP_4,
  GROUP_5,
}

export function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.keys(anEnum)
    .map(n => Number.parseInt(n))
    .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  const randomEnumValue = enumValues[randomIndex]
  return randomEnumValue
}
