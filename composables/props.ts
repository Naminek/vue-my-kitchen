import { Ref, ref, watch } from "@nuxtjs/composition-api"
import { cloneDeep, isEqual } from 'lodash-es'

export function usePropWatch<Props extends {}> (props: Props) {
  return <Field extends keyof Props> (field: Field) => {
    const localVar = ref(cloneDeep(props[field])) as Ref<Props[Field]>
    watch(
      () => props[field],
      (vals) => {
        if (!isEqual(vals, localVar.value)) {
          localVar.value = cloneDeep(vals)
        }
      }, { deep: true, immediate: true }
    )
    return localVar
  }
}
