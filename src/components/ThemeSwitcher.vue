<template>
  <button
    type="button"
    @click="onThemeToggler"
    class="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-surface-200 hover:scale-105 transition-colors"
    aria-label="Toggle Theme"
  >
    <i
      :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"
      class="text-surface-900 dark:text-surface-0 text-lg"
    />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

const onThemeToggler = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("p-dark", isDark.value);
  localStorage.setItem("prefers-dark", isDark.value ? "1" : "0");
};

onMounted(() => {
  isDark.value = localStorage.getItem("prefers-dark") === "1";
  document.documentElement.classList.toggle("p-dark", isDark.value);
});
</script>
