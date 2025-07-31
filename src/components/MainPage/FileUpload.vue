<template>
  <section
    class="flex flex-col items-center justify-center px-4 py-10 bg-surface-50 text-surface-900"
  >
    <h1 class="text-3xl font-bold mb-4 text-center">Upload your CSV file</h1>
    <p class="text-gray-600 mb-8 text-center max-w-md">
      Please upload a <span class="font-semibold">.csv</span> file.
    </p>

    <div
      class="w-full max-w-xl flex flex-col md:flex-row items-center justify-between gap-4 p-6 shadow-lg rounded-2xl bg-white"
    >
      <FileUpload
        ref="fileupload"
        mode="basic"
        accept=".csv"
        :maxFileSize="10000000"
      />
      <Button
        label="Upload"
        @click="onUploadClick"
        severity="secondary"
        class="w-full md:w-auto"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFileStore } from "@/stores/useFileStore";
import { FileUpload, Button } from "primevue";
import { showNotification } from "@/utils/showNotification";

const { setFileContent } = useFileStore();

const fileupload = ref();

const onUploadClick = () => {
  const file = fileupload.value?.files[0];

  if (!file) {
    showNotification("warning", "No file selected");
    return;
  }

  setFileContent(file);
};
</script>

<style>
.p-fileupload-basic-content > span {
  color: black !important;
}
</style>
