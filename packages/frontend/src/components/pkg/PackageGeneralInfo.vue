<script>
import { useEmoji } from '@/util/emoji'
import PackageLogo from './PackageLogo.vue'
import PackageCount from './PackageCount.vue'

export default {
  components: {
    PackageLogo,
    PackageCount,
  },

  props: {
    pkg: {
      type: Object,
      required: true,
    },
  },

  setup (props) {
    const { parsedText: parsedDescription } = useEmoji(() => props.pkg.description)

    return {
      parsedDescription,
    }
  },
}
</script>

<template>
  <div
    class="flex items-center pb-4 lg:py-4"
  >
    <PackageLogo
      v-if="!$responsive.sm"
      :pkg="pkg"
      class="mr-6"
    />

    <div class="flex-1 w-0 mr-6 overflow-hidden">
      <div class="w-full truncate text-gray-600">
        <span class="text-gray-100">
          {{ pkg.name }}
        </span>

        <span>
          by {{ pkg.maintainers.map(m => m.name).join(', ') }}
        </span>
      </div>

      <div class="w-full truncate text-gray-500">
        <span v-if="pkg.description">
          {{ parsedDescription }}
        </span>
        <span v-else>No description</span>
      </div>
    </div>

    <slot />

    <a
      v-if="pkg.repo"
      :href="pkg.repo"
      target="_blank"
    >
      <PackageCount
        v-tooltip="'GitHub stars'"
        :count="pkg.stars || 0"
      />
    </a>
  </div>
</template>
