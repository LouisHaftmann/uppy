// This file was generated by build-components.mjs
// ANY EDITS WILL BE OVERWRITTEN!

import {
  ProviderIcon as PreactProviderIcon,
  type ProviderIconProps,
} from '@uppy/components'
import { h as preactH } from 'preact'
import { render as preactRender } from 'preact/compat'
import { shallowEqualObjects } from 'shallow-equal'
import { defineComponent, h, onMounted, ref, watch } from 'vue'
import { useUppyContext } from '../useUppyContext.js'

export default defineComponent<Omit<ProviderIconProps, 'ctx'>>({
  name: 'ProviderIcon',
  setup(props, { attrs }) {
    const containerRef = ref<HTMLElement | null>(null)
    const ctx = useUppyContext()

    function renderProviderIcon() {
      if (containerRef.value) {
        preactRender(
          preactH(PreactProviderIcon, {
            ...(attrs as ProviderIconProps),
            ctx,
          } satisfies ProviderIconProps),
          containerRef.value,
        )
      }
    }

    onMounted(() => {
      renderProviderIcon()
    })

    watch(ctx, () => {
      renderProviderIcon()
    })

    watch(
      () => props,
      (current, old) => {
        if (!shallowEqualObjects(current, old)) {
          renderProviderIcon()
        }
      },
    )

    return () => h('div', { ref: containerRef })
  },
})
