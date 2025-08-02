<template>
  <footer class="w-full px-4 py-3 border-t">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <h2 class="text-sm md:text-base text-inherit">
        © {{ year }} ML OPS PLATFORM
      </h2>

      <a
        href="https://github.com/ygyubyv/ml-ops-platform"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-md border transition-colors"
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
