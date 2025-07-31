<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import FileUpload from "./components/MainPage/FileUpload.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import FileContentTable from "./components/MainPage/FileContentTable.vue";
</script>

<template>
  <TheHeader />
  <main class="min-h-screen">
    <FileUpload />
    <FileContentTable />
  </main>
  <TheFooter />
</template>
