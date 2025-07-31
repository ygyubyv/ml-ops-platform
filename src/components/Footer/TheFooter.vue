<template>
  <footer
    class="w-full px-4 py-3 bg-surface-0 text-surface-900 border-t border-surface-200"
  >
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <h2 class="text-base text-inherit">© {{ year }} ML OPS PLATFORM</h2>

      <a
        href="https://github.com/ygyubyv/ml-ops-platform"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-surface-200 hover:bg-surface-100 transition-colors"
      >
        <i class="pi pi-github text-base" />
        <span class="text-sm font-medium">GitHub</span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
