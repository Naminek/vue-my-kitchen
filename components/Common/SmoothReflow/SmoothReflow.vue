<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
import Vue from 'vue'
import smoothReflow from 'vue-smooth-reflow'

export default Vue.extend({
  name: 'SmoothReflow',
  mixins: [smoothReflow],
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    if (typeof this.$smoothReflow !== 'undefined') {
      this.$smoothReflow(this.options)
    }
  }
})
</script>
